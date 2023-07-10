import React, { useState } from "react";
import {
  HeaderLogo,
  HederAveter,
  HederMainCntr,
  HederRoute,
} from "../../Styled/Layouts/Heder";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ModalCm from "../ModalCm";
import IconButton from "@mui/material/IconButton";

const Heder = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HederMainCntr>
      <HeaderLogo>Logo</HeaderLogo>
      <HederRoute>
        <p>Home</p>
        <p>Main Category</p>
        <p>Registration</p>
      </HederRoute>
      <HederAveter>
        <IconButton onClick={handleOpen}>
          <Avatar
            sx={{ bgcolor: deepPurple[500] }}
            alt="priyankara"
            src="/static/images/avatar/1.jpg"
          />
        </IconButton>
      </HederAveter>
      <ModalCm open={open} handleClose={handleClose} />
    </HederMainCntr>
  );
};

export default Heder;
