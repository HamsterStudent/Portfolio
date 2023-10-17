import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { musicPlayAtom } from "../recoil/atom";

const ContentsWrap = styled.div`
  padding: 10px;
`;

const MusicPlayerWrap = styled.div`
  display: none;
`;

const ControlBar = styled.div`
  progress {
    margin: 5px 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.backgroundColor};
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
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const playerRef = useRef() as MutableRefObject<ReactPlayer>;
  const [playing, setPlaying] = useRecoilState(musicPlayAtom);

  console.log(playedSeconds.toFixed(0));

  return (
    <ModalWindow
      width={300}
      windowName="MusicPlayer"
      defaultPosition={{ x: 100, y: 350 }}
    >
      <ContentsWrap>
        <MusicPlayerWrap>
          <ReactPlayer
            ref={playerRef}
            playsinline={true}
            url="https://www.youtube.com/watch?v=7Q-MLPZDW1Q"
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
        <h2>WYS - Ōrora</h2>
        <div
          onClick={() => {
            setPlaying((prev) => !prev);
          }}
        >
          <PlayPauseIcon>
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </PlayPauseIcon>
        </div>
      </ContentsWrap>
    </ModalWindow>
  );
}
