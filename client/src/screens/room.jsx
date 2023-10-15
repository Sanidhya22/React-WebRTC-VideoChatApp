import React, { useCallback, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useEffect } from "react";
const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const handelUserJoined = useCallback(({ email, id }) => {
    console.log(email);
    setRemoteSocketId(id);
  });
  useEffect(
    () => {
      socket.on("user:joined", handelUserJoined);
      return () => {
        socket.off("user:joined", handelUserJoined);
      };
    },
    [socket],
    handelUserJoined
  );
  return (
    <>
      <div>Room</div>
      <h4>{remoteSocketId ? "Connected" : "No One In The Room"}</h4>
    </>
  );
};
export default RoomPage;
