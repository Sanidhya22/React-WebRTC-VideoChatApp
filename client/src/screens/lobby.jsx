import React, { useCallback, useState } from "react";
import { useSocket } from "../context/SocketProvider";

const Lobby = () => {
  const [email, setemail] = useState("");
  const [room, setroom] = useState("");
  const socket = useSocket();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );
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
