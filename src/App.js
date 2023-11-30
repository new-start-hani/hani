import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import NewFeedPage from "./pages/NewFeedPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feed/new" element={<NewFeedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
