import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import Navbar from "../navbar/Navbar";
import './Lobby.css';

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
      console.log(email);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    // <div>
    //   <h1>Lobby</h1>
    //   <form onSubmit={handleSubmitForm}>
    //     <label htmlFor="email">Email ID</label>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <br />
    //     <label htmlFor="room">Room Number</label>
    //     <input
    //       type="text"
    //       id="room"
    //       value={room}
    //       onChange={(e) => setRoom(e.target.value)}
    //     />
    //     <br />
    //     <button>Join</button>
    //   </form>
    // </div>
    <>
    <Navbar/>
    <div className="body1">
      <div className="container-lobby">
      <div className="brand-title">Join the Lobby</div>
      <form className="inputs" onSubmit={handleSubmitForm}>
        <label className="label-lo" htmlFor="email">Email ID: </label>
        <input
          className="input-lo"
          type="email" id="email"
          placeholder="example@test.com"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label-lo" htmlFor="room">Room No: </label>
        <input
          className="input-lo"
          type="text" id="room"
          placeholder="Room Number"
          value={room}
          autoComplete="off"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button className="button-lo" type="submit">JOIN</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default LobbyScreen;
