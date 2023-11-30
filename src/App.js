import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegisterPage from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";
import Detail from "./components/detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
