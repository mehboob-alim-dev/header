import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

const styles = {
  container: {
    backgroundColor: "#800080",
    padding: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    padding: 5,
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
  },
  list: {
    display: "flex",
    listStyleType: "none",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    padding: 15,
  },
};

function Topbar() {
  return (
    <div style={styles.container}>
      <Container maxWidth="lg">
        <Box
          sx={{ justifyContent: { xs: "center", md: "space-between" } }}
          style={styles.wrapper}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <QueryBuilderOutlinedIcon
                sx={{ color: "white", marginRight: 1 }}
              />
              <Typography sx={{ color: "white" }}>
                9:30 - 6:30 Mon - Sun
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white", marginX: 1 }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ color: "white", marginRight: 1 }} />
              <Typography sx={{ color: "white" }}>+923001234567</Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white", marginX: 1 }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PlaceIcon sx={{ color: "white", marginRight: 1 }} />
              <Typography sx={{ color: "white" }}>Lahore, Pakistan</Typography>
            </Box>
          </Box>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />
            <InstagramIcon fontSize="small" sx={{ color: "#fff" }} />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />
            <YouTubeIcon fontSize="small" sx={{ color: "#fff" }} />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />
            <TwitterIcon fontSize="small" sx={{ color: "#fff" }} />

            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
export default Topbar;
