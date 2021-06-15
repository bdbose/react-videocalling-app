/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Context } from './store';

function App() {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
    StopCamera,
    Restart,
  } = useContext(Context);

  const [id, setId] = useState('');
  return (
    <div className='App'>
      <video playsInline muted ref={myVideo} autoPlay />
      <button onClick={StopCamera}>Stop</button>
      <button onClick={Restart}>Start</button>
      <div>Id: {me}</div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(me).then(
            () => {
              console.log('copied');
            },
            (err) => {
              console.log(err);
            },
          );
        }}>
        Copy Code
      </button>
      <br />
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={() => callUser(id)}>+</button>
      {callAccepted ? 'T' : 'F'}
      <video playsInline ref={userVideo} autoPlay />
      {!callAccepted && <button onClick={answerCall}>Accept</button>}
    </div>
  );
}

export default App;
