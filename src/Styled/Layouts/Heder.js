import styled from "styled-components";

export const HederMainCntr = styled.section`
  width: 100vw;
  backdrop-filter: saturate(180%) blur(5px);
  background: hsla(0, 0%, 100%, 0.8);
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  align-items: center;
  z-index: 3000;
  box-shadow: inset 0 -1px 0 0 #fafafa;
  position: sticky;
  top: 0;
`;

export const HeaderLogo = styled.div`
  width: 10vw;
`;
export const HederRoute = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  gap: 10px;

  p {
    color: Black;
    padding: 0px 10px;
    font-weight: 400;
  }
`;

export const HederAveter = styled.div`
  margin-right: 40px;
`;
