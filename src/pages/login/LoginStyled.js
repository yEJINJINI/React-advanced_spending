import styled from "styled-components";

export const Container = styled.main`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Div = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  h1 {
    margin-bottom: 20px;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 18px;
    color: #333;
    text-align: left;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => (props.login ? "#aaaaaa" : "#777777")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.login ? "#95a7a4" : "#455e5c")};
  }
`;
