import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* <h1>Slack Clone</h1> */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/room/:roomId" element={<Chat />} />
          {/* <Route path="/" element={<Expenses />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
