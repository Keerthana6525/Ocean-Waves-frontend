
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
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import { useNavigate,useLocation } from "react-router-dom";
import logo from "../assets/ocean-waves.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();

  const location = useLocation();

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "ABOUT US", link: "/about" },
    {
      text: "SERVICES",
      subItems: [
        { text: "SECURITY & SURVEILLANCE", link: "/servicecctv" },
        { text: "NETWORK SOLUTIONS", link: "/network" },
        { text: "DOOR ACCESS & BIOMETRIC TIME ATTENDANCE", link: "/door-bio" },
        { text: "SWING & SLIDING GATES", link: "/gates" },
        { text: "TENT & CAR PORCHES", link: "/porches" },
        { text: "OFFICE EQUIPMENTS AND COMPUTERS", link: "/computers" },
      ],
    },
    { text: "PRODUCTS", link: "/products" },
    { text: "CONTACT", link: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#4A6B4A", minHeight: { xs: 70, sm: 80 } }}
    >
      <Toolbar sx={{ minHeight: { xs: 70, sm: 80 }, display: "flex", pt: 1 }}>
        {/* Logo */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 40, sm: 50, md: 70 },
              mr: { xs: 0, md: 2 },
            }}
          />
          <Box sx={{ p: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "13px", sm: "16px", md: "22px", lg: "33px" },
                color: "white",
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              أمواج المحيط للأنظمة الأمنية م.م.ذ
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter',sans-serif",
                fontSize: { xs: "10px", sm: "13px", md: "16px", lg: "20px" },
                color: "white",
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              OCEAN WAVES SECURITY SYSTEM L.L.C.
            </Typography>
          </Box>
        </Box>

        {/* Desktop Menu */}
        {!isMobile && !showSearch && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexGrow: 1,
              gap: 2,
            }}
          >
            <Button sx={{ color: "white",}}
             onClick={() => navigate("/")}>
              HOME
            </Button>
            <Button sx={{ color: "white" }} onClick={() => navigate("/about")}>
              ABOUT US
            </Button>
            <Button
              sx={{ color: "white" }}
              onClick={handleOpenMenu}
              endIcon={<ArrowDropDownIcon />}
            >
              SERVICES
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {menuItems[2].subItems.map((sub, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleCloseMenu();
                    navigate(sub.link);
                  }}
                  sx={{
                    backgroundColor: i % 2 === 0 ? "#192c1cff" : "#ffffff", 
                    color: i % 2 === 0 ? "#ffffff" : "#000000",           
                    "&:hover": {
                    backgroundColor: i % 2 === 0 ? "#333333" : "#f0f0f0", 
                  },
                }}
                >
                  {sub.text}
                </MenuItem>
              ))}
            </Menu>
            <Button sx={{ color: "white" }} onClick={() => navigate("/products")}>
              PRODUCTS
            </Button>
            <Button sx={{ color: "white" }} onClick={() => navigate("/contact")}>
              CONTACT
            </Button>
          </Box>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <>
            <Box
              sx={{ cursor: "pointer", color: "white", ml: "auto" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </Box>

            <AnimatePresence>
              {drawerOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(78, 104, 79, 0.9)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2000,
                  }}
                >
                  {/* Close button */}
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{ position: "absolute", top: 20, right: 20 }}
                  >
                    <CloseIcon sx={{ fontSize: 32 }} />
                  </IconButton>

                  {/* Logo */}
                  {/* <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{ height: 60, mb: 5 }}
                  /> */}

                  {/* Menu items */}
                  <List>
                    {menuItems.map((item, index) =>
                      item.subItems ? (
                        <React.Fragment key={index}>
                          <ListItem
                            button
                            onClick={() => setOpenServices(!openServices)}
                            sx={{ justifyContent: "center",
                                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff", 
                                    "&:hover": {
                                    backgroundColor: index % 2 === 0 ? "#e0e0e0" : "#f0f0f0", 
                                },
                             }}
                          >
                            <ListItemText
                              primary={item.text}
                              primaryTypographyProps={{
                                fontSize: "22px",
                                fontWeight: "bold",
                                textAlign: "center",
                                color:'black'
                              }}
                            />
                            {openServices ? <ExpandLess sx={{ color: "black" }} /> : <ExpandMore sx={{ color: "black" }}/>}
                          </ListItem>

                          <Collapse in={openServices} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {item.subItems.map((sub, i) => (
                                <ListItem
                                  button
                                  key={i}
                                  onClick={() => {
                                    navigate(sub.link);
                                    setDrawerOpen(false);
                                  }}
                                  sx={{ justifyContent: "center",
                                        pl: 4,
                                        backgroundColor: i % 2 === 0 ? "#858282ff" : "#eaeaea", // 
                                        "&:hover": {
                                        backgroundColor: i % 2 === 0 ? "#e0e0e0" : "#d6d6d6",
                                        },
                                   }}
                                >
                                  <ListItemText
                                    primary={sub.text}
                                    primaryTypographyProps={{
                                      fontSize: "18px",
                                      textAlign: "center",
                                      color:'black'
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </React.Fragment>
                      ) : (
                        <ListItem
                          button
                          key={index}
                          onClick={() => {
                            navigate(item.link);
                            setDrawerOpen(false);
                          }}
                          sx={{ justifyContent: "center",
                                backgroundColor: index % 2 === 0 ? "#b3b0b0ff" : "#ffffff", 
                                "&:hover": {
                                backgroundColor: index % 2 === 0 ? "#e0e0e0" : "#f0f0f0",
                                },
                           }}
                        >
                          <ListItemText
                            primary={item.text}
                            primaryTypographyProps={{
                              fontSize: "22px",
                              fontWeight: "bold",
                              textAlign: "center",
                              color:'black'
                            }}
                          />
                        </ListItem>
                      )
                    )}
                  </List>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Desktop Search */}
        {!isMobile && (
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            <AnimatePresence mode="wait">
              {showSearch ? (
                <motion.div
                  key="search-bar"
                  initial={{ opacity: 0, width: 50 }}
                  animate={{ opacity: 1, width: "250px" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchTerm.trim()) {
                        navigate(`/search?q=${searchTerm}`);
                        setShowSearch(false);
                        setSearchTerm("");
                      }
                    }}
                    sx={{
                      minWidth: { xs: "120px", sm: "200px", md: "250px" },
                      "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": { borderColor: "white" },
                        "&:hover fieldset": { borderColor: "white" },
                        "&.Mui-focused fieldset": { borderColor: "white" },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "white",
                        opacity: 1,
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowSearch(false)}>
                            <CloseIcon sx={{ color: "white" }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="search-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconButton
                    key="search-icon"
                    onClick={() => setShowSearch(true)}
                    sx={{ color: "white" }}
                  >
                    <SearchIcon />
                  </IconButton>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
