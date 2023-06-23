import styled from "styled-components";

export const LoginMainCntr = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LoginBlock = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 75px 150px;

  button {
    padding: 10px 50px;
  }
`;

export const InputCntr = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding: 0 75px;
    border: ${({ msg }) =>
      msg === "wrong" ? "2px solid red" : "2px solid green"};
  }

  p {
    position: absolute;
    font-size: 10px;
    top: -8px;
    left: 12px;
    background: white;
    padding: 0 5px;
    font-weight: 700;
  }
`;
