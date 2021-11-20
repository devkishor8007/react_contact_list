import axios from "axios";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListContact from "./components/ListContact";
import { Box } from "@mui/material";

export default function App() {
  const [data, setdata] = React.useState({ data: [] });
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    axios
      .get("https://dummyapi.io/data/v1/user?limit=9", {
        headers: {
          "app-id": "61975eba4e5a441f29886c1c",
        },
      })
      .then(({ data }) => setdata(data))
      .catch(console.error)
      .finally(() => setloading(false));
  }, []);

  return (
    <>
      <Header />
      {data.data.length === 5 ? (
        <Box sx={{ width: 50, height: 420, color: "green" }}></Box>
      ) : (
        <ListContact loading={loading} data={data} />
      )}

      {loading ? "" : <Footer />}
    </>
  );
}
