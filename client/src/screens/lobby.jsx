import React, { useCallback, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const [email, setemail] = useState("");
  const [room, setroom] = useState("");
  const socket = useSocket();
  const navigate = useNavigate();
  const handleSubmit = useCallback(
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
    },
    [navigate]
  );
  useEffect(() => {
    socket.on("room:join", (data) => {
      handleJoinRoom(data);
    });
  }, [socket]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="room">Room No</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setroom(e.target.value)}
        ></input>
        <button>Join</button>
      </form>
    </>
  );
};
export default Lobby;
