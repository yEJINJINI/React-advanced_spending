import React, { useState } from "react";
import {
  Container,
  Div,
  InputGroup,
  ButtonGroup,
  Button,
} from "../login/LoginStyled";
import { useNavigate } from "react-router-dom";
import { login } from "../../lib/api/auth";

const Login = ({ setUser }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIN = async () => {
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });
    alert("로그인이 되었습니다.");
    setUser({ userId, nickname, avatar });

    navigate("/");
  };

  return (
    <Container>
      <Div>
        <h1>로그인</h1>
        <InputGroup>
          <label>아이디</label>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <ButtonGroup>
          <Button login="true" onClick={handleSignIN}>
            로그인
          </Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </Button>
        </ButtonGroup>
      </Div>
    </Container>
  );
};

export default Login;
