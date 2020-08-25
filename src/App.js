import React, { useState} from "react";
import "./App.css";
// import DrumPad from "./components/drumPad";
// import ToggleButton from "./components/toggle";

function App() {
  const [isPower, togglePower] = useState(true);
  const [isbank, toggleBank] = useState(true);
  const [volume, setVolume] = useState(50);
  const [displayText, setDisplay] = useState("");

  const getIdOfButton = (event)=> {
    console.log(event.target.id);
    console.log(event.target.childNodes[1]);
    var audioId = event.target.childNodes[1];
    
    // var btnId = document.getElementById(event.srcElement.id);
    audioId.play(); 
  }

  // useEffect(() => {
    
    
  // }, [displayText]);
  return (
    <div className="App">
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
            type="range"
            min="1"
            max="100"
            value={volume}
            onChange={(event) => {
              event.preventDefault();
              setDisplay(`Volume: ${event.target.value}`);
              setVolume(event.target.value);
              
            }}
          ></input>
        </div>
        <div>
          <p style={{ textAlign: "center", fontWeight: "600", margin: "5px" }}>
            Bank
          </p>
          <div
            style={{
              width: "60px",
              height: "34px",
              background: isbank ? "#2196F3" : "#ccc",
              borderRadius: "34px",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => {
              toggleBank((prevState) => !prevState);
              isbank ? setDisplay('Smooth Piano Kit') : setDisplay('Heater Kit');
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
          </div>
        </div>
      </div>
      <div id="drum-pad-wrapper">
        <button id="Heater-1"
          className="drum-pad"
          onClick={getIdOfButton}
            // isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
          
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 81){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          Q
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}
            className="clip"
            id="Q"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={ getIdOfButton
            // isbank ? setDisplay('Heater-2') : setDisplay('Chord-2');
            
          }
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 87){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          W
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}
            className="clip"
            id="W"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("E");
            q.play();
            isbank ? setDisplay('Heater-3') : setDisplay('Chord-3');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 69){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          E
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}
            className="clip"
            id="E"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("A");
            q.play();
            isbank ? setDisplay('Heater-4') : setDisplay('Shaker');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 65){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          A
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}
            className="clip"
            id="A"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("S");
            q.play();
            isbank ? setDisplay('Clap') : setDisplay('Open HH');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 83){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          S
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}
            className="clip"
            id="S"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("D");
            q.play();
            isbank ? setDisplay('Open HH') : setDisplay('Closed HH');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 68){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          D
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}
            className="clip"
            id="D"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("Z");
            q.play();
            isbank ? setDisplay('Kick n\' Hat') : setDisplay('Punchy Kick');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 90){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          Z
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}
            className="clip"
            id="Z"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("X");
            q.play();
            isbank ? setDisplay('Kick') : setDisplay('Side Stick');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 88){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          X
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}
            className="clip"
            id="X"
          ></audio>
        </button>
        <button
          className="drum-pad"
          onClick={() => {
            var q = document.getElementById("C");
            q.play();
            isbank ? setDisplay('Closed HH') : setDisplay('Snare');
          }}
          onKeyDown={(e) => {
            var q = document.getElementById("Q");
            var keyCode = e.keyCode;
            if(keyCode === 67){
              q.play();
              isbank ? setDisplay('Heater-1') : setDisplay('Chord-1');
            }
            
            
          }}
        >
          C
          <audio
            src={isbank ? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
            className="clip"
            id="C"
          ></audio>
        </button>
      </div>
    </div>
  );
}

export default App;
