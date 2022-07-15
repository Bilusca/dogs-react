import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserStorage } from "@context/UserContext";

import { Home } from "@pages/Home";
import { Login } from "@pages/Login";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
