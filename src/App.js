import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
