export interface MusicTrack {
  id: number;
  title: string;
  artist: string;
  durationStr: string;
  url: string;
}

export const musicTracks: MusicTrack[] = [
  {
    id: 1,
    title: "20-MiiMaker.mp3",
    artist: "Nintendo",
    durationStr: "5:26",
    url: "https://youtu.be/oTu4WcpB9Iw?si=IgHbQqsh7xg8J46B"
  },
  {
    id: 2,
    title: "19-Track_01.mp3",
    artist: "Unknown",
    durationStr: "Unknown",
    url: "https://youtu.be/pG0bviOCSH0?si=nVuYdqyRs1fu3H7a"
  },
  {
    id: 3,
    title: "18-Track_02.mp3",
    artist: "Unknown",
    durationStr: "Unknown",
    url: "https://youtu.be/fJqMpRtTtsU?si=_CXJYkAgN7hxd2AM"
  },
  {
    id: 4,
    title: "17-Track_03.mp3",
    artist: "Unknown",
    durationStr: "Unknown",
    url: "https://youtu.be/7Q-MLPZDW1Q?si=K0a_CF-gnArTE6vx"
  },
  {
    id: 5,
    title: "16-Track_04.mp3",
    artist: "Unknown",
    durationStr: "Unknown",
    url: "https://youtu.be/G5i1MlK-sSs?si=9MPQHxF-YVqmpS0Z"
  }
];
