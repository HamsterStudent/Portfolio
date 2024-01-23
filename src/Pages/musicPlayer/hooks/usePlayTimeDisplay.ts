import { useState } from "react";

export default function usePlayTimeDisplay() {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);

  let displayDuration;
  let displayDurationMinute = Math.floor(+durationSeconds.toFixed(0) / 60);
  let displayDurationSeconds = +durationSeconds.toFixed(0) % 60;

  let displayPlayed;
  let displayPlayedTime = +playedSeconds.toFixed(0);
  let displayPlayedMinute = Math.floor(displayPlayedTime / 60);
  let displayPlayedSecondes = displayPlayedTime % 60;

  displayDuration = `${
    displayDurationMinute < 10
      ? `0${displayDurationMinute}`
      : displayDurationMinute
  }:${
    displayDurationSeconds < 10
      ? `0${displayDurationSeconds}`
      : displayDurationSeconds
  }`;

  if (displayPlayedTime < 60) {
    displayPlayed = `00:${
      displayPlayedTime < 10 ? `0${displayPlayedTime}` : displayPlayedTime
    }`;
  } else {
    displayPlayed = `${
      displayPlayedMinute < 10
        ? `0${displayPlayedMinute}`
        : `${displayPlayedMinute}`
    }:${
      displayPlayedSecondes < 10
        ? `0${displayPlayedSecondes}`
        : displayPlayedSecondes
    }`;
  }

  return {
    setPlayedSeconds,
    setDurationSeconds,
    playedSeconds,
    durationSeconds,
    displayPlayed,
    displayDuration,
  };
}
