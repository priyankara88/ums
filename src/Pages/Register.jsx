import { useRef, useState } from "react";
import {
  ImageBlock,
  LeftCntr,
  RegisterInputBlck,
  RegisterInputCntr,
  RegisterMainCntr,
  RightCntr,
} from "../Styled/Pages/Register";
import InputRegistration from "../Libs/InputValidation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactsIcon from "@mui/icons-material/Contacts";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Register = () => {
  const EmailInputRef = useRef();
  const NameInputRef = useRef();
  const AddressInputRef = useRef();
  const TpInputRef = useRef();
  const PasswordInputRef = useRef();
  const ConpasswordInputRef = useRef();

  const [inputValidate, setInputValidate] = useState("");
  const [Email, setEmail] = useState(false);
  const [IptName, setIptName] = useState(false);
  const [InptTel, setInptTel] = useState(false);
  const [InptPassword, setInptPassword] = useState(false);
  const [InptCpassword, setInptCpassword] = useState(false);

  const Navigte = useNavigate();

  const SaveData = () => {
    const Email = EmailInputRef.current.value;
    const Name = NameInputRef.current.value;
    const Address = AddressInputRef.current.value;
    const Tp = TpInputRef.current.value;

    const passwrd = PasswordInputRef.current.value;
    const cpsswrd = ConpasswordInputRef.current.value;
    if (passwrd === cpsswrd) {
      createUserWithEmailAndPassword(auth, Email, passwrd)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.uid);

          setDoc(doc(db, "users", user.uid), {
            Email: Email,
            Name: Name,
            Address: Address,
            Tp: Tp,
          })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });

          Navigte("/");
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    } else {
      setInptPassword(false);
      setInptCpassword(false);
    }
  };

  const InputValidation = (e) => {
    e.preventDefault();

    const emailVal = EmailInputRef.current.value;
    const nameVal = NameInputRef.current.value;
    if (emailVal.trim() === "") {
      console.log("enter Valid Email");
    } else if (nameVal === "") {
      console.log("enter Valid Name");
    }
  };

  return (
    <RegisterMainCntr>
      <RegisterInputCntr>
        <LeftCntr>
          <h1>Register</h1>
          <RegisterInputBlck Value={Email}>
            <EmailIcon />
            <input
              ref={EmailInputRef}
              name="Email"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                InputRegistration(e.target.value, setEmail, e.target.name);
              }}
            />
          </RegisterInputBlck>

          <RegisterInputBlck Value={IptName}>
            <PersonIcon />
            <input
              ref={NameInputRef}
              name="Name"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                InputRegistration(e.target.value, setIptName, e.target.name);
              }}
            />
          </RegisterInputBlck>

          {/* <RegisterInputBlck>
            <ContactsIcon />
            <input
              ref={AddressInputRef}
              name="Address"
              type="text"
              placeholder="Address"
              onChange={(e) => {
                InputRegistration(
                  e.target.value,
                  setInputValidate,
                  e.target.name
                );
              }}
            />
          </RegisterInputBlck>

          <RegisterInputBlck Value={InptTel}>
            <LocalPhoneIcon />
            <input
              ref={TpInputRef}
              type="text"
              name="TP"
              placeholder="Telephone Number"
              onChange={(e) => {
                InputRegistration(e.target.value, setInptTel, e.target.name);
              }}
            />
          </RegisterInputBlck> */}

          <RegisterInputBlck Value={InptPassword}>
            <VpnKeyIcon />
            <input
              ref={PasswordInputRef}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                InputRegistration(
                  e.target.value,
                  setInptPassword,
                  e.target.name
                );
              }}
            />
          </RegisterInputBlck>

          <RegisterInputBlck Value={InptCpassword}>
            <VpnKeyIcon />
            <input
              ref={ConpasswordInputRef}
              name="cpassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                InputRegistration(
                  e.target.value,
                  setInptCpassword,
                  e.target.name
                );
              }}
            />
          </RegisterInputBlck>
          <p>{inputValidate}</p>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree all statements in Terms of service"
            />
          </FormGroup>

          <button onClick={SaveData}>Sing Up</button>
        </LeftCntr>
        <RightCntr>
          <ImageBlock>
            <img
              src="https://www.shutterstock.com/image-illustration/ui-ux-design-concept-creating-600w-1802515372.jpg"
              alt="fffffff"
            />
          </ImageBlock>
        </RightCntr>
      </RegisterInputCntr>
    </RegisterMainCntr>
  );
};

export default Register;
