import React, { useState, useEffect } from "react";
import './css/StopWatchComponent.css';

export default function StopWatchComponent(){
        const [time, setTime] = useState(0);
        const [running, setRunning] = useState(false);
        useEffect(() => {
          let interval;
          if (running) {
            interval = setInterval(() => {
              setTime((prevTime) => prevTime + 10);
            }, 10);
          } else if (!running) {
            clearInterval(interval);
          }
          return () => clearInterval(interval);
        }, [running]);
        return (
          <div className="stopwatch">
              <h4>Assignment 1</h4>
              <div className="heading"><h1>JavaScript StopWatch</h1></div>
              <div class="timer">
            <div className="numbers">
              <p className="hr">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</p>
              <p className="mts">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</p>
              <p className="sec">{("0" + ((time / 10) % 100)).slice(-2)}</p>
            </div>
            <div className="buttons">
              <button className= "start" onClick={() => setRunning(true)}>Start</button>
              <button className= "stop" onClick={() => setRunning(false)}>Stop</button>
            </div>
            </div>
          </div>
        );
      };

