import React from "react";
import { Box, Typography, styled } from "@mui/material";

import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;
const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  marginTop: 100,
  width: 400,
});

const Title = styled(Typography)`
  font-size: 32px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty" />
        <Title>TALKative</Title>
        <SubTitle>
          Now send and receive messages without keeping your phone online.
        </SubTitle>
      </Container>
    </Component>
  );
};

export default EmptyChat;
