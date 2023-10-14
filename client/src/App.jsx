import "./App.css";
import { Route, Routes } from "react-router-dom";
import Lobby from "./screens/lobby";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Lobby></Lobby>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
