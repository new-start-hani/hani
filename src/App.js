import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./pages/MainPage";
import Register from "./components/Register";
import Detail from "./components/detail";
import Mypage from "./components/Mypage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed/:id" element={<Detail />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
