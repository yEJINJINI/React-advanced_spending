import React, { useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

const MyPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };

  return (
    <Div>
      <Container>
        <h2>프로필 수정</h2>
        <InputGroup>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            placeholder="닉네임"
            minLength="1"
            maxLength="10"
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="avatar">아바타 이미지</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </InputGroup>
        <Button onClick={handleUpdateProfile}>프로필 업데이트</Button>
      </Container>
    </Div>
  );
};

export default MyPage;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 50%;
  height: auto;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #63ad80;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;
