import React, { useCallback, useState, useEffect } from "react";
import { useSocket } from "../context/SocketProvider";
import ReactPlayer from "react-player";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const handelUserJoined = useCallback(({ email, id }) => {
    console.log(email);
    setRemoteSocketId(id);
  });
  const handelCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
  }, []);
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
      {remoteSocketId && <button onClick={handelCallUser}>Call</button>}
      {myStream && (
        <ReactPlayer
          playing
          muted
          height="300px"
          width="300px"
          url={myStream}
        ></ReactPlayer>
      )}
    </>
  );
};
export default RoomPage;
