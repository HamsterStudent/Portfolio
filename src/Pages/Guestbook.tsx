import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  limit,
  startAfter,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { dbService } from "../firebase";
import ModalWindow from "../shared/components/ModalWindow";
import Sticker from "../shared/components/Sticker";
import { useMediaQuery } from "react-responsive";

const ContentWrap = styled.section`
  padding: 20px;
  color: ${(props) => props.theme.textColor};
  font: 500 1.4rem "Source Sans 3";
`;

const InputWrap = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const IconButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  border: solid 1px ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
`;

const EmojiBox = styled.div`
  position: fixed;
  top: 80px;
  left: 20px;
  z-index: 2;
`;

const FormBox = styled.form`
  display: inline;
  input {
    background-color: transparent;
    border: solid 1px ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    height: 30px;
    border-radius: 15px;
    margin-left: 10px;
  }
`;

const GuestMemo = styled.div`
  border: solid 1px ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 10px 5px;
  p {
    font-size: 14px;
  }
`;
const GuestText = styled.div`
  /* background-color: azure; */
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  font-size: 16px;
  div {
    font-size: 22px;
    margin-right: 10px;
  }
  .blank {
    width: 22px;
    margin-right: 10px;
    border: solid 1px ${(props) => props.theme.textColor};
  }
`;

function Guestbook() {
  const stickerName = "flutter";
  const [showEmojis, setShowEmojis] = useState(false);
  const [emojiIcon, setEmojiIcon] = useState("");
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState<{ id: string }[]>([]);
  const [key, setKey] = useState<QueryDocumentSnapshot<DocumentData>>();
  const [noMore, setNoMore] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  useEffect(() => {
    const firstPage = query(
      collection(dbService, "memos"),
      orderBy("createdAt", "desc"),
      limit(5),
    );

    onSnapshot(firstPage, (snapshot) => {
      const memoArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMemos(memoArr);
      setKey(snapshot.docs[snapshot.docs.length - 1]);
    });
  }, []);

  const onNextClick = async () => {
    const nextPage = query(
      collection(dbService, "memos"),
      orderBy("createdAt", "desc"),
      startAfter(key),
      limit(5),
    );

    const snap = await getDocs(nextPage);
    if (!snap.empty) {
      onSnapshot(nextPage, (snapshot) => {
        const memoArr = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMemos(memoArr);
        setKey(snap.docs[snap.docs.length - 1]);
      });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "memos"), {
        memo,
        createdAt: serverTimestamp(),
        emojiIcon,
      });
      console.log("written :", docRef.id);
    } catch (error) {
      console.error("error : ", error);
    }

    setEmojiIcon("");
    setMemo("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(value);
  };

  return (
    <ModalWindow
      width={isDesktop ? "400px" : "100%"}
      defaultPosition={{ x: 30, y: 150 }}
      windowName={"Guestbook"}
      isDesktop={isDesktop}
    >
      <ContentWrap>
        <InputWrap>
          <IconButton onClick={() => setShowEmojis(!showEmojis)}>
            {emojiIcon ? emojiIcon : "+"}
          </IconButton>
          {showEmojis && (
            <EmojiBox>
              <EmojiPicker
                height={400}
                width={300}
                onEmojiClick={(e) => {
                  setEmojiIcon(e.emoji);
                  setShowEmojis(false);
                }}
              />
            </EmojiBox>
          )}
          <FormBox onSubmit={onSubmit}>
            <input
              type="text"
              value={memo}
              onChange={onChange}
              placeholder="What's on your mind?"
              maxLength={120}
            />
            <input type="submit" value="memo" />
          </FormBox>
        </InputWrap>
        {memos.map((eachMemo: any) => (
          <GuestMemo key={eachMemo.id}>
            {/* <p>{eachMemo.createdAt.toDate().toISOString()}</p> */}
            <GuestText>
              {eachMemo.emojiIcon ? (
                <div>{eachMemo.emojiIcon}</div>
              ) : (
                <div className="blank"></div>
              )}

              <p>{eachMemo.memo}</p>
            </GuestText>
          </GuestMemo>
        ))}
        <div onClick={onNextClick}>next</div>
      </ContentWrap>
      <Sticker
        name={stickerName}
        width={100}
        defaultPosition={isDesktop ? { x: 300, y: 150 } : { x: 100, y: 150 }}
      />
    </ModalWindow>
  );
}

export default Guestbook;
