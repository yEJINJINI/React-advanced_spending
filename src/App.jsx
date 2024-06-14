import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import MyPage from "./pages/MyPage";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);

  console.log("로그인 된 유저 :", user);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header user={user} setUser={setUser} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/mypage"
              element={<MyPage user={user} setUser={setUser} />}
            />
          </Route>

          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
