import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegisterPage from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";
import Detail from "./components/detail";
import Mypage from "./components/Mypage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
