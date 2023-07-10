import { useRef, useState } from "react";
import {
  Fb,
  Google,
  ImageBlock,
  InputCntr,
  LeftLogin,
  LoginBlock,
  LoginMainCntr,
  RightLogin,
  SocialIcon,
  Tw,
} from "../Styled/Pages/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";

const Login = () => {
  const InptUserNameRef = useRef();
  const InptPasswordRef = useRef();
  const Navigate = useNavigate();
  const [LoginErr, setLoginErr] = useState(true);

  const LoginAuth = () => {
    const UserName = InptUserNameRef.current.value;
    const Password = InptPasswordRef.current.value;

    signInWithEmailAndPassword(auth, UserName, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoginErr(true);
        Navigate("/Home");
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log("xcxczczxc");
        setLoginErr(false);
      });
  };
  return (
    <LoginMainCntr>
      <LoginBlock>
        <LeftLogin>
          <ImageBlock>
            <img
              src="https://www.shutterstock.com/image-illustration/ui-ux-design-concept-creating-600w-1802515372.jpg"
              alt="fffffff"
            />
          </ImageBlock>
        </LeftLogin>

        <RightLogin>
          <h1>Sign Up</h1>
          <InputCntr msg={LoginErr}>
            <PersonIcon />
            <input ref={InptUserNameRef} type="text" placeholder="User Name" />
          </InputCntr>
          <InputCntr msg={LoginErr}>
            <HttpsIcon />
            <input
              ref={InptPasswordRef}
              type="password"
              placeholder="Password"
            />
          </InputCntr>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </FormGroup>

          <button onClick={LoginAuth}>Login</button>

          <SocialIcon>
            <p>Or Login With</p>
            <Fb />
            <Tw />
            <Google />
          </SocialIcon>
        </RightLogin>
      </LoginBlock>
    </LoginMainCntr>
  );
};

export default Login;
