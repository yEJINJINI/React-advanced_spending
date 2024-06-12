import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import MyPage from "./pages/MyPage";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { getUserInfo } from "./lib/api/auth";

function App() {
  const [user, setUser] = useState(null);

  console.log("로그인 된 유저 :", user);

  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header user={user} setUser={setUser} />}>
              <Route index element={<Home />} />
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
    </AuthProvider>
  );
}

export default App;
