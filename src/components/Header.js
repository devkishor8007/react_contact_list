import { Paper, Avatar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <Paper sx={{ display: "flex", margin: "10px 30px 15px", padding: 3 }}>
        <Avatar sx={{ marginRight: "7px" }}></Avatar>
        <Typography sx={{ marginTop: "10px" }}>Kishor Kc</Typography>
      </Paper>
    </>
  );
}
