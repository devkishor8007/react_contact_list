import { Paper, Avatar, Typography, CircularProgress } from "@mui/material";
import React from "react";

export default function ListContact({ loading, data }) {
  return (
    <>
      <Paper
        sx={{
          background: "pink",
          position: "relative",
          padding: "20px",
          margin: "20px auto",
          maxWidth: "550px",
        }}
      >
        <Typography style={{ color: "grey" }} sx={{ textAlign: "right" }}>
          Total Contacts: {data.data.length}
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          data.data.map((d) => {
            return (
              <div style={{ display: "flex", padding: "10px" }}>
                <Avatar sx={{ background: "red" }}></Avatar>
                <div style={{ margin: "0px 16px" }}>
                  <Typography>
                    {d.firstName} {d.lastName}
                  </Typography>
                  <Typography style={{ color: "grey" }}>Friend</Typography>
                </div>
              </div>
            );
          })
        )}
      </Paper>
    </>
  );
}
