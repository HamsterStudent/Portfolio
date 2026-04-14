import { MutableRefObject, useRef, useState } from "react";
import ReactPlayer from "react-player";
import ModalWindow from "../../shared/components/ModalWindow";
import { useRecoilState } from "recoil";
import { musicPlayAtom } from "../../recoil/atom";
import { useMediaQuery } from "react-responsive";
import usePlayTimeDisplay from "./hooks/usePlayTimeDisplay";
import { musicTracks, MusicTrack } from "./musicData";

export default function MusicPlayer() {
  const playerRef = useRef() as MutableRefObject<ReactPlayer>;
  const [playing, setPlaying] = useRecoilState(musicPlayAtom);
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
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

  const handleTrackSelect = (track: MusicTrack) => {
    setCurrentTrack(track);
    setPlaying(true);
  };

  const currentIdx = currentTrack ? musicTracks.findIndex(t => t.id === currentTrack.id) : -1;
  const handleEject = () => {
    setCurrentTrack(null);
    setPlaying(false);
  };

  return (
    <ModalWindow
      width={isDesktop ? "450px" : "100%"}
      windowName="MusicPlayer"
      defaultPosition={{ x: 50, y: 100 }}
      isDesktop={isDesktop}
    >
      <div className="p-[15px] font-galmuri bg-[#f6efe9] box-border">
        <div className="flex flex-col gap-[10px]">

          <div className="relative">
            <div className="border-[1.5px] border-black rounded-[6px] bg-white px-[10px] py-[20px] h-[200px] overflow-y-scroll relative [&::-webkit-scrollbar]:w-[16px] [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-track]:border-l-[1px] [&::-webkit-scrollbar-track]:border-black [&::-webkit-scrollbar-thumb]:bg-[#eeddc9] [&::-webkit-scrollbar-thumb]:border-[1px] [&::-webkit-scrollbar-thumb]:border-black [&::-webkit-scrollbar-thumb]:rounded-[2px]">
              <div className="grid grid-cols-3 gap-[15px] text-center">
                {musicTracks.map((track) => (
                  <div
                    key={track.id}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleTrackSelect(track)}
                  >
                    <div className="w-[45px] h-[45px] rounded-full mb-[5px] border-[0.5px] border-black bg-no-repeat bg-center bg-cover flex justify-center items-center shadow-[1px_1px_3px_rgba(0,0,0,0.3)]" style={{ backgroundImage: "url('assets/album/cd.png')" }}>
                      <div className="w-[12px] h-[12px] bg-white rounded-full border-[0.5px] border-black" />
                    </div>
                    <div className={`text-[12px] font-bold ${currentTrack?.id === track.id ? 'bg-[#e0e0e0]' : 'bg-transparent'} text-black px-[5px] py-[3px] w-[90%] break-all leading-tight mb-[3px]`}>
                      {track.title}
                    </div>
                    <div className="text-[11px] text-[#333]">
                      {track.durationStr}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex border-[1.5px] border-black rounded-[6px] bg-[#f6efe9] p-[10px] gap-[10px] items-center mt-[5px]">
            <div className="flex-1 bg-[#111] border-2 border-[#ccc] outline outline-[1.5px] outline-black h-[120px] rounded-[4px] relative p-[12px] box-border text-white overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-repeat pointer-events-none opacity-40" style={{ backgroundImage: "url('assets/dot.png')" }}></div>

              {currentTrack ? (
                <>
                  <div className="text-[14px] font-bold mb-[8px] relative z-10">[playing]</div>
                  <div className="text-[12px] leading-[1.4] break-all relative z-10 border-b border-[#444] pb-[5px]">{currentTrack.title}</div>
                  <div className="text-[11px] text-[#0ff] mt-[5px] relative z-10">{currentTrack.artist}</div>

                  <div className="absolute bottom-[12px] left-[12px] right-[12px] z-10 flex gap-[10px] items-center text-[11px]">
                    <span>{displayPlayed}</span>
                    <progress
                      className="flex-1 appearance-none h-[6px] border border-[#444] bg-[#222] [&::-webkit-progress-bar]:bg-[#222] [&::-webkit-progress-value]:bg-[#ddd]"
                      value={playedSeconds}
                      max={durationSeconds || 1}
                    />
                    <span>{displayDuration}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[14px] font-bold mb-[8px] relative z-10">[empty]</div>
                  <div className="text-[12px] leading-[1.4] break-all relative z-10 border-none">No disc selected</div>
                  <div className="text-[10px] absolute bottom-[12px] text-[#ddd] left-[12px] right-[12px] leading-[1.3] z-10">Click a disc above to begin your audio journey</div>
                </>
              )}
            </div>

            <div className="w-[120px] h-[120px] rounded-full border border-black bg-white flex justify-center items-center relative overflow-hidden" style={{ backgroundImage: 'repeating-radial-gradient(circle at center, #fff 0, #fff 4px, #ddd 5px, #fff 6px)' }}>
              {currentTrack && (
                <img src="assets/album/mii_maker.jpg" alt="cd" className={`w-full h-full rounded-full object-cover animate-spin ${playing && currentTrack !== null ? '[animation-play-state:running]' : '[animation-play-state:paused]'}`} style={{ animationDuration: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }} />
              )}
              <div className="absolute w-[26px] h-[26px] bg-[#eeddc9] rounded-full border border-black flex justify-center items-center">
                <div className="w-[10px] h-[10px] bg-black rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex gap-0 -mt-[2px]">
            <button
              onClick={() => { if (currentTrack) setPlaying(true) }}
              className="border-[1.5px] border-black bg-[#ecdac5] py-[5px] px-[15px] cursor-pointer flex justify-center items-center h-[30px] rounded-[3px] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.7),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] active:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)] border-r-0 w-[50px] rounded-br-none rounded-tr-none"
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-black"><path d="M8 5v14l11-7z" /></svg>
            </button>
            <button
              onClick={() => setPlaying(false)}
              className="border-[1.5px] border-black bg-[#ecdac5] py-[5px] px-[15px] cursor-pointer flex justify-center items-center h-[30px] rounded-[3px] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.7),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] active:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)] w-[50px] rounded-bl-none rounded-tl-none"
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-black"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            </button>
            <button
              onClick={handleEject}
              className="border-[1.5px] border-black bg-[#ecdac5] py-[5px] px-[15px] cursor-pointer flex justify-center items-center h-[30px] rounded-[3px] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.7),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] active:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)] w-[50px] ml-[10px]"
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-black"><path d="M5 15h14v2H5zm7-10l-7 7h14l-7-7z" /></svg>
            </button>
          </div>

          <div className="hidden">
            <ReactPlayer
              ref={playerRef}
              playsinline={true}
              url={currentTrack ? currentTrack.url : ""}
              muted={false}
              volume={0.3}
              playing={playing}
              width={0}
              height={0}
              onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
              onDuration={setDurationSeconds}
              onEnded={() => {
                if (currentIdx !== -1 && currentIdx + 1 < musicTracks.length) {
                  setCurrentTrack(musicTracks[currentIdx + 1]);
                  setPlaying(true);
                } else {
                  setPlaying(false);
                }
              }}
            />
          </div>
        </div>
      </div>
    </ModalWindow>
  );
}
