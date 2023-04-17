import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      mt: { lg: "100px", xs: "50px" },
      mr: { sm: "50px" },
      ml: { sm: "50px" }
    }}
    position="relative"
    p="20px"
  >
    <Box sx={{ flexGrow: 1 }}>
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
    </Box>
    <Box sx={{ width: "50%", marginLeft: "auto", position: "relative" }}>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        style={{ width: "90%", marginTop: -170 }}
      />
    </Box>
  </Box>
);

export default HeroBanner;
