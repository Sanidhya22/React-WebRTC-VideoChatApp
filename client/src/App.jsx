import "./App.css";
import { Route, Routes } from "react-router-dom";
import Lobby from "./screens/lobby";
import RoomPage from "./screens/room";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Lobby></Lobby>}></Route>
          <Route path="/room/:roomId" element={<RoomPage></RoomPage>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
