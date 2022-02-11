import Head from "next/head";
import Layout from "../components/Layout";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import router from "next/router";

const ErrorPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Container align="center" mx="auto" my={0}>
      <Typography mb={3}>そんなページない</Typography>
      <Button variant="contained" onClick={handleClick}>
        Back to HOME
      </Button>
    </Container>
  );
};
export default ErrorPage;
