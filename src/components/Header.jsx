import mainLogo from "../assets/home.png";
import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getUserInfo } from "../lib/api/auth";
import { useEffect } from "react";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        setUser(null);
        navigate("/login");
        localStorage.clear();
      }
    });
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      setUser(null);
      navigate("/login");
      localStorage.clear();
    }
  };

  return (
    <header>
      <HeaderWrapDiv>
        <h1>
          <Link to="/">
            <LogoImg src={mainLogo} alt="logo" />
          </Link>
        </h1>

        <nav>
          <StrNavWrapDiv>
            {user ? (
              <>
                <Link to="/mypage">
                  <UserAvatar src={user.avatar} alt="User Avatar" />
                </Link>
                <UserName>{user.nickname}</UserName>
                <StrBtn onClick={handleLogout}>Logout</StrBtn>
              </>
            ) : (
              <>
                <Link to="/login">
                  <StrBtn>Login</StrBtn>
                </Link>

                <Link to="/signup">
                  <StrBtn>Sign up</StrBtn>
                </Link>
              </>
            )}
          </StrNavWrapDiv>
        </nav>
      </HeaderWrapDiv>
      <Outlet />
    </header>
  );
};

export default Header;

const LogoImg = styled.img`
  width: 120px;
  height: auto;
  margin-right: 10px;
`;

const HeaderWrapDiv = styled.div`
  background-color: white;
  margin-bottom: 45px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StrBtn = styled.button`
  background-color: #55a87f;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 18px;
  width: 120px;
  height: 48px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #438363;
  }
`;

const StrNavWrapDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 13px;
`;

const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
`;
const UserName = styled.h4`
  color: black;
  font-weight: bolder;
  margin: 10px;
`;
