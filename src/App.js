import React, { useState } from "react";
import "./App.css";


function App() {
  const [isPower, togglePower] = useState(true);
  const [isbank, toggleBank] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [displayText, setDisplay] = useState("");
  
  const getIdOfButton = (event) => {
    let btnId = event.target.id;
    setDisplay(btnId);
    var audioId = event.target.childNodes[1];
    audioId.volume = volume;
    audioId.play();
    document.getElementById(btnId).className = "drum-pad-active";
    setTimeout(function () {
      document.getElementById(btnId).className = "drum-pad";
    }, 100);
  };

  document.addEventListener("keypress", function (event) {
    if (
      (event.key) === "q" ||
      (event.key) === "w" ||
      (event.key) === "e" ||
      (event.key) === "a" ||
      (event.key) === "s" ||
      (event.key) === "d" ||
      (event.key) === "z" ||
      (event.key) === "x" ||
      (event.key) === "c"
    ) {
      let audioElement = document.getElementById(event.key.toUpperCase());    
      audioElement.volume = volume;
      audioElement.play();

      let btnId = audioElement.parentNode.id;
      document.getElementById(btnId).className = "drum-pad-active";
      setDisplay(btnId);
      setTimeout(function () {
        document.getElementById(btnId).className = "drum-pad";
      }, 100); 
    }
  });

  const handleVolumeChange = (event) => {
    event.preventDefault();
    let currentVolumeValue = event.target.value;
    if (currentVolumeValue < 0.1 && currentVolumeValue > 0) {
      const regex = /^.*[.||0]/;
      let newValue = currentVolumeValue.replace(regex, "");
      setDisplay(`Volume: ${newValue}`);
    } else if (
      currentVolumeValue === "0.1" ||
      currentVolumeValue === "0.2" ||
      currentVolumeValue === "0.3" ||
      currentVolumeValue === "0.4" ||
      currentVolumeValue === "0.5" ||
      currentVolumeValue === "0.6" ||
      currentVolumeValue === "0.7" ||
      currentVolumeValue === "0.8" ||
      currentVolumeValue === "0.9"
    ) {
      const regex = /^.*[.]/;
      let newValue = currentVolumeValue.replace(regex, "");
      setDisplay(`Volume: ${newValue}0`);
    } else if (currentVolumeValue === "1") {
      setDisplay(`Volume: 100`);
    } else if (currentVolumeValue === "0") {
      setDisplay(`Volume: 00`);
    } else {
      const regex = /^.*[.]/;
      let newValue = currentVolumeValue.replace(regex, "");
      setDisplay(`Volume: ${newValue}`);
    }

    setVolume(event.target.value);
    setTimeout(function () {
      setDisplay("");
    }, 1000);
  };

  return (
    <div id="drum-machine" className="App">
      <div id="display">{displayText}</div>
      <div className="controllers">
        <div>
          <p style={{ textAlign: "center", fontWeight: "600", margin: "5px" }}>
            Power
          </p>
          <div
            style={{
              width: "60px",
              height: "34px",
              background: isPower ? "#2196F3" : "#ccc",
              borderRadius: "34px",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => {
              togglePower((prevState) => !prevState);
            }}
          >
            <span
              style={{
                position: "absolute",
                height: "26px",
                width: "26px",
                left: "4px",
                bottom: "4px",
                background: "#fff",
                borderRadius: "50%",
                WebkitTransition: "0.4s",
                transition: "0.4s",
                transform: isPower ? "translateX(26px)" : "translateX(0)",
              }}
            ></span>
          </div>
        </div>
        <div className="volume-controller">
          <p style={{ textAlign: "center", fontWeight: "600", margin: "5px" }}>
            volume
          </p>
          <input
            className="volume-slider"
            type="range"
            step="0.01"
            min="0"
            max="1"
            value={volume}
            disabled={!isPower}
            onChange={handleVolumeChange}
          ></input>
        </div>
        <div>
          <p style={{ textAlign: "center", fontWeight: "600", margin: "5px" }}>
            Bank
          </p>
          <button
            style={{
              width: "60px",
              height: "34px",
              background: isPower ? "#2196F3" : "#ccc",
              borderRadius: "34px",
              cursor: "pointer",
              position: "relative",
              outline: "none",
              border: "none",
            }}
            disabled={!isPower}
            onClick={() => {
              toggleBank((prevState) => !prevState);
              isbank
                ? setDisplay("Smooth Piano Kit")
                : setDisplay("Heater Kit");
            }}
          >
            <span
              style={{
                position: "absolute",
                height: "26px",
                width: "26px",
                left: "4px",
                bottom: "4px",
                background: "#fff",
                borderRadius: "50%",
                WebkitTransition: "0.4s",
                transition: "0.4s",
                transform: isbank ? "translateX(26px)" : "translateX(0)",
              }}
            ></span>
          </button>
        </div>
      </div>
      <div id="drum-pad-wrapper">
        <button
          id={isbank ? "Heater 1" : "Chord 1"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          Q
          <audio
            src={isPower ? isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" : "#"
            }
            className="clip"
            id="Q"
          ></audio>
        </button>
        <button
          id={isbank ? "Heater 2" : "Chord 2"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          W
          <audio
            src={isPower ?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" : "#"
            }
            className="clip"
            id="W"
          ></audio>
        </button>
        <button
          id={isbank ? "Heater 3" : "Chord 3"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          E
          <audio
            src={ isPower?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" :"#"
            }
            className="clip"
            id="E"
          ></audio>
        </button>
        <button
          id={isbank ? "Heater 4" : "Shaker"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          A
          <audio
            src={ isPower ?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" :"#"
            }
            className="clip"
            id="A"
          ></audio>
        </button>
        <button
          id={isbank ? "Clap" : "Open HH"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          S
          <audio
            src={ isPower ?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" :"#"
            }
            className="clip"
            id="S"
          ></audio>
        </button>
        <button
          id={isbank ? "Open HH" : "Closed HH"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          D
          <audio
            src={isPower ?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" :"#"
            }
            className="clip"
            id="D"
          ></audio>
        </button>
        <button
          id={isbank ? "Kick n' Hat" : "Punchy Kick"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          Z
          <audio
            src={isPower ?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" : "#"
            }
            className="clip"
            id="Z"
          ></audio>
        </button>
        <button
          id={isbank ? "Kick" : "Side Stick"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          X
          <audio
            src={isPower ?
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" : "#"
            }
            className="clip"
            id="X"
          ></audio>
        </button>
        <button
          id={isbank ? "Closed HH" : "Snare"}
          className="drum-pad"
          onClick={getIdOfButton}
        >
          C
          <audio
            src={isPower ? 
              isbank
                ? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" : "#"
            }
            className="clip"
            id="C"
          ></audio>
        </button>
      </div>
    </div>
  );
}

export default App;
