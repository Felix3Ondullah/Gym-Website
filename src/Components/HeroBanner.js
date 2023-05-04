import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: "70px", xs: "0px" },
      ml: { sm: "50px" },
      display: "flex",
      flexDirection: { xs: "column-reverse", lg: "row" },
      alignItems: { lg: "center" },
      justifyContent: { lg: "space-between" },
      maxWidth: { lg: "1200px", xl: "1400px" },
      margin: "auto",
      position: "relative",
    }}
    p="20px"
  >
    <Box sx={{ flex: { xs: "1 1 100%", lg: "0 1 50%" } }}>
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
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
    </Box>
    <Box
      sx={{
        flex: { xs: "1 1 100%", lg: "0 1 50%" },
        textAlign: "right",
        position: { lg: "absolute" },
        bottom: { lg: 0, xs: "-50px" },
        right: { lg: "100px", xs: 0 },
      }}
    >
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        style={{
          maxWidth: "100%",
          maxHeight: "110vh",
          margin: "5 5 5 45px",
        }}
      />
    </Box>
  </Box>
);

export default HeroBanner;
