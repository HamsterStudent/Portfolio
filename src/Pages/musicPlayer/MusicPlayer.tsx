import { MutableRefObject, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styled, { keyframes } from "styled-components";
import ModalWindow from "../../shared/components/ModalWindow";
import { useRecoilState } from "recoil";
import { musicPlayAtom } from "../../recoil/atom";
import { useMediaQuery } from "react-responsive";
import usePlayTimeDisplay from "./hooks/usePlayTimeDisplay";

const ContentsWrap = styled.div`
  padding: 10px;
`;
const rotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

interface IPlay {
  isPlay: boolean;
}

const RotateCD = styled.div<IPlay>`
  width: 100%;
  height: 280px;
  margin-bottom: 5px;
  border: solid 1px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    width: 100%;
    height: 100%;
    background: url("assets/dot.png");
    background-size: 2px 2px;
    position: absolute;
    top: 0;
  }
  &.paused {
    img {
      animation-play-state: paused;
      -webkit-animation-play-state: paused;
    }
  }
  img {
    position: absolute;
    width: 100%;
    object-fit: contain;
    animation-play-state: running;
    animation: ${rotate} 1s infinite linear;
  }
`;

const CenterImg = styled.div`
  width: 30%;
  height: 30%;
  img {
    width: 30%;
    height: 30%;
    object-fit: cover;
    border: solid 1px;
    border-radius: 50%;
  }
`;

const MusicPlayerWrap = styled.div`
  display: none;
`;

const ControlBar = styled.div`
  progress {
    width: 100%;
    margin: 5px 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    height: 5px;
    border: solid 1px;
    border-radius: 10px;
  }
  progress[value]::-webkit-progress-bar {
    border-radius: 10em;
    background: #252525;
  }
  progress[value]::-webkit-progress-value {
    border-radius: 10em;
    background: #252525;
  }
  progress[value]::-moz-progress-bar {
    border-radius: 10em;
    background: #252525;
  }
`;

const PlayPauseIcon = styled.div`
  width: 20px;
`;

const TimeRanges = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  p {
    display: inline-block;
  }
`;
const MusicInfo = styled.div`
  margin-bottom: 5px;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
`;

type ControlsProps = {
  playedSeconds: number;
  duration: number;
  playerRef: MutableRefObject<ReactPlayer>;
};

const Controls = (props: ControlsProps) => {
  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.playerRef.current.seekTo(+e.target.value, "seconds");
  };

  return (
    <ControlBar>
      <progress
        // type="range"
        value={props.playedSeconds}
        // min={0}
        max={props.duration}
        // onChange={seek}
      />
    </ControlBar>
  );
};

export default function MusicPlayer() {
  const playerRef = useRef() as MutableRefObject<ReactPlayer>;
  const [playing, setPlaying] = useRecoilState(musicPlayAtom);
  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });
  const {
    setPlayedSeconds,
    setDurationSeconds,
    playedSeconds,
    durationSeconds,
    displayPlayed,
    displayDuration,
  } = usePlayTimeDisplay();

  return (
    <ModalWindow
      width={"300px"}
      windowName="MusicPlayer"
      defaultPosition={{ x: 100, y: 250 }}
      isDesktop={isDesktop}
    >
      <ContentsWrap>
        <RotateCD isPlay={playing} className={playing ? undefined : "paused"}>
          <img src="assets/album/mii_maker.jpg" alt="" />
          <CenterImg>
            <img src="assets/album/cd.png" alt="" />
          </CenterImg>
          <div className="overlay" data-overlay></div>
        </RotateCD>

        <MusicPlayerWrap>
          <ReactPlayer
            ref={playerRef}
            playsinline={true}
            url="https://youtu.be/oTu4WcpB9Iw?si=IgHbQqsh7xg8J46B"
            muted={false}
            volume={0.3}
            playing={playing}
            loop={true}
            width={100}
            onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
            onDuration={setDurationSeconds}
          />
        </MusicPlayerWrap>
        <Controls
          playerRef={playerRef}
          playedSeconds={playedSeconds}
          duration={durationSeconds}
        />
        <TimeRanges>
          <p>{displayPlayed}</p> / <p>{displayDuration}</p>
        </TimeRanges>
        <MusicInfo>
          <h2>Mill Maker</h2>
          <p>Nintendo wii u</p>
        </MusicInfo>

        <PlayPauseIcon
          onClick={() => {
            setPlaying((prev) => !prev);
          }}
        >
          <div>
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            )}
          </div>
        </PlayPauseIcon>
      </ContentsWrap>
    </ModalWindow>
  );
}
