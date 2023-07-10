const InputRegistration = (value, setValidation, inputId) => {
  console.log("password ID", inputId);
  if (inputId === "Email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    setValidation(isValidEmail);
  } else if (inputId === "Name") {
    if (value === "") {
      setValidation(false);
    } else {
      setValidation(true);
    }
  } else if (inputId === "Address") {
  } else if (inputId === "TP") {
    const telephoneRegex = /^\d{10}$/; // Matches a 10-digit telephone number
    const isValidTelephone = telephoneRegex.test(value);
    setValidation(isValidTelephone);
  } else if (inputId === "password") {
    if (value.length >= 8) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  } else if (inputId === "cpassword") {
    if (value.length >= 8) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }

  //setValidation(value);
};

export default InputRegistration;
