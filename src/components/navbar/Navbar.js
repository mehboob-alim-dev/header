import React from "react";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import logo from "../logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const styles = {
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100px",
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
    padding: 15,
    display: "flex",
    alignItems: "center",
  },
};
function Navbar() {
  return (
    <div style={styles.container}>
      <Container maxWidth="lg">
        <div style={styles.wrapper}>
          <img src={logo} style={styles.logo} />
          <MenuIcon
            fontSize="large"
            sx={{ display: { xs: "block", md: "none" } }}
          />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ul style={styles.list}>
              <li style={styles.li}>
                {" "}
                <Link style={styles.link} to="/">
                  <HomeIcon color="success" /> Home
                </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <Link style={styles.link} to="/about">
                  <HomeIcon color="success" /> About
                </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <Link style={styles.link} to="/contact">
                  <HomeIcon color="success" /> Contact
                </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <Link style={styles.link} to="/services">
                  <HomeIcon color="success" /> Services
                </Link>{" "}
              </li>
            </ul>
          </Box>
        </div>
      </Container>
    </div>
  );
}
export default Navbar;
