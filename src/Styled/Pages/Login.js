import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

export const LoginMainCntr = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #f5f5f5;
`;

export const LoginBlock = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1;
  padding: 100px 40px;
  background: #f8f8f8;

  button {
    margin-top: 25px;
    padding: 15px 50px;
    background: #6dabe4;
    color: #fff;
    border-radius: 10px;
    &:hover {
      background: #4292dc;
    }
  }
`;

export const LeftLogin = styled.div``;

export const RightLogin = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  h1 {
    margin-top: -20px;
  }
`;

export const InputCntr = styled.div`
  position: relative;
  margin-top: 20px;

  input {
    border-bottom: 2px solid black;
    height: 50px;
    padding: 0 85px;
  }

  /* p {
    position: absolute;
    font-size: 10px;
    top: -8px;
    left: 12px;
    background: white;
    padding: 0 5px;
    font-weight: 700;
  } */
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

export const Fb = styled(FacebookIcon)`
  color: #3b5998;
  &:hover {
    transform: scale(1.3) translateZ(0);
  }
`;

export const Tw = styled(TwitterIcon)`
  color: #1da0f2;
  &:hover {
    transform: scale(1.3) translateZ(0);
  }
`;

export const Google = styled(GoogleIcon)`
  color: #e72734;
  &:hover {
    transform: scale(1.3) translateZ(0);
  }
`;

export const ImageBlock = styled.div`
  width: 500px;
  height: 300px;

  img {
    width: 500px;
    height: 400px;
  }
`;
