import styled from "styled-components";

export const RegisterMainCntr = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #f5f5f5;
`;
export const RegisterInputCntr = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1;
  justify-content: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 40px;
  border-radius: 20px;
  background: #f8f8f8;

  button {
    margin-top: 25px;
    padding: 15px 50px;
    background: #6dabe4;
    color: #fff;
    border-radius: 10px;
  }
`;
export const RegisterInputBlck = styled.div`
  position: relative;
  margin-top: 5px;

  input {
    border-bottom: 2px solid black;
    height: 50px;
    padding: 0 85px;

    /* border: ${({ Value }) =>
      Value === false ? "2px solid red" : "2px solid green"}; */
  }

  p {
    position: absolute;
    top: -12px;
    left: 12px;
    background: white;
    padding: 0px 10px;
  }
`;

export const LeftCntr = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;

export const RightCntr = styled.div``;

export const ImageBlock = styled.div`
  width: 500px;
  height: 300px;
  margin-top: 80px;

  img {
    width: 500px;
    height: 400px;
  }
`;
