import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Typography
        sx={{
          position: "absolute",
          bottom: "1",
          width: "100%",
          textAlign: "center",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Kishor Kc
      </Typography>
    </div>
  );
}
