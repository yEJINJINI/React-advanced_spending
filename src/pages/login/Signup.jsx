import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Div,
  InputGroup,
  ButtonGroup,
  Button,
} from "../login/LoginStyled";
import { register } from "../../lib/api/auth";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자~10글자 이내로 작성해주세요");
      return;
    }

    if (password.length < 4 || password.length > 15) {
      alert("패스워드는 4글자~15글자 이내로 작성해주세요");
      return;
    }

    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자~10글자 이내로 작성해주세요");
      return;
    }

    //API 호출을 하는 부분?
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다");
      navigate("/login");
    }
  };

  return (
    <Container>
      <Div>
        <h1>회원가입</h1>
        <InputGroup>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <ButtonGroup>
          <Button login="true" onClick={handleRegister}>
            회원가입
          </Button>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </Button>
        </ButtonGroup>
      </Div>
    </Container>
  );
};

export default Signup;
