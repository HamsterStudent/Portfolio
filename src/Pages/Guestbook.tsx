import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";

import { highestZIndexAtom } from "../recoil/atom";
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
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import useDisplaySticker from "../Hooks/useDisplaySticker";

const ContentWrap = styled.section`
  padding: 20px;
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
  border: solid 1px;
`;

const EmojiBox = styled.div`
  position: fixed;
  top: 80px;
  left: 20px;
`;

const FormBox = styled.form`
  display: inline;
  input {
    background-color: transparent;
    border: solid 1px;
    height: 30px;
    border-radius: 15px;
    margin-left: 10px;
  }
`;

const GuestMemo = styled.div`
  border: solid 1px;
  margin-bottom: 10px;
  padding: 10px 5px;
  p {
    font-size: 14px;
  }
`;
const GuestText = styled.div`
  /* background-color: azure; */
  display: flex;
  align-items: center;
  font-size: 16px;
  div {
    font-size: 22px;
    margin-right: 10px;
  }
`;

function Guestbook() {
  const stickerName = "flutter";
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

  const [showEmojis, setShowEmojis] = useState(false);
  const [emojiIcon, setEmojiIcon] = useState("");
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState<{ id: string }[]>([]);
  const [key, setKey] = useState<QueryDocumentSnapshot<DocumentData>>();
  const [noMore, setNoMore] = useState(false);

  const start = query(
    collection(dbService, "memos"),
    orderBy("createdAt", "desc"),
    limit(5),
  );

  useEffect(() => {
    onSnapshot(start, (snapshot) => {
      const memoArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(memoArr);
      setMemos(memoArr);
      setKey(snapshot.docs[snapshot.docs.length - 1]);
    });
  }, []);

  const temp = async () => {
    const queryRef = query(
      collection(dbService, "memos"),
      orderBy("createdAt", "desc"),
      startAfter(key),
      limit(5),
    );

    const snap = await getDocs(queryRef);
    snap.empty ? setNoMore(true) : setKey(snap.docs[snap.docs.length - 1]);

    onSnapshot(queryRef, (snapshot) => {
      const memoArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMemos(memoArr);
    });
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
      width={400}
      defaultPosition={{ x: 30, y: 150 }}
      windowName={"Guestbook"}
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
              <div>{eachMemo.emojiIcon}</div>
              <p>{eachMemo.memo}</p>
            </GuestText>
          </GuestMemo>
        ))}
        <div onClick={temp}>next</div>
      </ContentWrap>
      {displaySticker ? (
        <Sticker
          name={stickerName}
          width={100}
          defaultPosition={{ x: 20, y: 10 }}
          setSricker={setDisplaySticker}
        />
      ) : null}
    </ModalWindow>
  );
}

export default Guestbook;
