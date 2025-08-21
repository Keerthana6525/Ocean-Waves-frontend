import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";  //  import navigate hook
import logo from "../assets/ocean-waves.png";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate(); // create navigate function

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "ABOUT US", link: "/about" },
    {
      text: "SERVICES",
      subItems: [
        { text: "SECURITY & SURVIVALENCE", link: "/servicecctv" },
        { text: "NETWORK SOLUTIONS", link: "/network" },
        { text: "DOOR ACCESS & BIOMETRIC TIME ATTENDANCE", link: "/door-bio" },
        { text: "SWING & SLIDING GATES", link: "/gates" },
        { text: "TEND & CAR PORCHES", link: "/porches" },
        { text: "OFFICE EQUIPMENTS AND COMPUTERS", link: "/computers" },

      ],
    },
    { text: "PRODUCTS", link: "/products" },
    { text: "CONTACT", link: "/contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#4A6B4A", minHeight:{xs:70,sm:80} }}>
      <Toolbar sx={{ minHeight:{xs:70,sm:80} , display: "flex", pt: 1 }}>
        {/* Logo + Titles */}
        <Box sx={{ display: "flex", alignItems: "center", cursor:"pointer" }} onClick={() => navigate("/")}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 40, sm: 50, md: 70 },
              mr: 2,
            }}
          />
          <Box sx={{ p: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "20px", sm: "22px", md: "25px",lg:'33px' },
                color: "white",
                textAlign: "start",
              }}
            >
              أمواج المحيط للأنظمة الأمنية م.م.ذ
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter',sans-serif",
                fontSize: { xs: "14px", sm: "16px", md: "18px",lg:'25px' },
                color: "white",
                textAlign: "start",
              }}
            >
              OCEAN WAVES SECURITY SYSTEM L.L.C.
            </Typography>
          </Box>
        </Box>

        {/* Menu for Large Screens */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "600px",
              ml: "auto",
            }}
          >
            <Button sx={{ color: "white", fontSize:{sm:'10px',md:'20px'}, fontFamily: "Arial" }} onClick={() => navigate("/")}>
              HOME
            </Button>
            <Button sx={{ color: "white", fontSize:{sm:'10px',md:'20px'}, fontFamily: "Arial" }} onClick={() => navigate("/about")}>
              ABOUT US
            </Button>
            <Button
              sx={{ color: "white", fontSize: {sm:'10px',md:'20px'}, fontFamily: "Arial" }}
              onClick={handleOpenMenu}
              endIcon={<ArrowDropDownIcon />}
            >
              SERVICES
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
              {menuItems[2].subItems.map((sub, i) => (
                <MenuItem key={i} onClick={() => { handleCloseMenu(); navigate(sub.link); }}>
                  {sub.text}
                </MenuItem>
              ))}
            </Menu>
            <Button sx={{ color: "white", fontSize: {sm:'10px',md:'20px'}, fontFamily: "Arial" }} onClick={() => navigate("/products")}>
              PRODUCTS
            </Button>
            <Button sx={{ color: "white", fontSize: {sm:'10px',md:'20px'}, fontFamily: "Arial" }} onClick={() => navigate("/contact")}>
              CONTACT
            </Button>
          </Box>
        )}

        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <>
            <IconButton sx={{ color: "white", ml: "auto" }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                  {menuItems.map((item, index) =>
                    item.subItems ? (
                      <React.Fragment key={index}>
                        <ListItem>
                          <ListItemText primary={item.text} />
                        </ListItem>
                        {item.subItems.map((sub, i) => (
                          <ListItem button key={i} onClick={() => navigate(sub.link)}>
                            <ListItemText primary={`- ${sub.text}`} />
                          </ListItem>
                        ))}
                      </React.Fragment>
                    ) : (
                      <ListItem button key={index} onClick={() => navigate(item.link)}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

