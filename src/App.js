import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import Header from './components/Header';
import Login from "./components/Login";
import Sidebar from './components/Sidebar';
import { useStateValue } from "./datalayer/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log("sssss", user);

  return (
    <div className="app">
      {/* <h1>Slack Clone</h1> */}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              {/* <Route path="/" element={<Expenses />} /> */}
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
