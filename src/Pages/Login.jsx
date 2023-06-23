import { InputCntr, LoginBlock, LoginMainCntr } from "../Styled/Pages/Login";

const Login = () => {
  return (
    <LoginMainCntr>
      <h1>Login</h1>
      <LoginBlock>
        <InputCntr msg={"wrong1"}>
          <p>UserName</p>
          <input type="text" placeholder="User Name" />
        </InputCntr>
        <InputCntr>
          <p>Password</p>
          <input type="password" placeholder="Password" />
        </InputCntr>

        <button>Login</button>
      </LoginBlock>
    </LoginMainCntr>
  );
};

export default Login;
