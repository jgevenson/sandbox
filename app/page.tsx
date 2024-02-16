import React from "react";
import type { NextPage } from "next";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Kitchen Management System
        </Typography>
        <Typography variant="body1">
          Manage your kitchen orders efficiently and seamlessly with our
          integrated system.
        </Typography>
        <Link href={"/orderList"}>Click here</Link>
      </Container>
    </>
  );
};

export default Home;
