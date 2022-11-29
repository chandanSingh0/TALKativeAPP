import React from "react";
import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const Description = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    color: #8696a0;
    font-size: 13px;
  }
`;

const Image = styled("img")({
  width: 150,
  height: 150,
  borderRadius: "50%",
  padding: "25px 0",
});

const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <Description>
        <Typography>
          This name will be visible to your TALKative contacts.
        </Typography>
      </Description>
      <Description>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeat</Typography>
      </Description>
    </>
  );
};

export default Profile;
