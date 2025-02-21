import React, { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const VolumeControl = ({ onVolumeChange }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [lastVolume, setLastVolume] = useState(1);

  const Mute = () => {
    if (isMuted) {
      setVolume(lastVolume);
      onVolumeChange(lastVolume);
    } else {
      setLastVolume(volume);
      setVolume(0);
      onVolumeChange(0);
    }
    setIsMuted(!isMuted);
  };

  const handleChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    onVolumeChange(newVolume);
    setIsMuted(newVolume === "0");
  };

  return (
    <div className="volume__control">
      <FontAwesomeIcon
        icon={isMuted ? faVolumeXmark : faVolumeLow}
        onClick={() => Mute()}
      />
      <input
        type="range"
        className="volume__control-slider"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
};

export default VolumeControl;
