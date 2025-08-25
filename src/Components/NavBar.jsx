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
import { Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, InputAdornment } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";



export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


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
              mr: {xs:0,md:2},
            }}
          />
          <Box sx={{ p: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "13px", sm: "16px", md: "22px",lg:'33px' },
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
                fontSize: { xs: "10px", sm: "13px", md: "16px",lg:'24px' },
                color: "white",
                textAlign: "start",
              }}
            >
              OCEAN WAVES SECURITY SYSTEM L.L.C.
            </Typography>
          </Box>
        </Box>
            {/* Menu for Large Screens */}
            {!isMobile && !showSearch && (   // hide menu items when search bar is active
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "600px",
                  ml: "auto",
                }}
              >
                <Button sx={{ color: "white", fontSize:{sm:'10px',md:'18px'}, fontFamily: "Arial" }} onClick={() => navigate("/")}>
                  HOME
                </Button>
                <Button sx={{ color: "white", fontSize:{sm:'10px',md:'18px'}, fontFamily: "Arial" }} onClick={() => navigate("/about")}>
                  ABOUT US
                </Button>
                <Button
                  sx={{ color: "white", fontSize: {sm:'10px',md:'18px'}, fontFamily: "Arial" }}
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
                <Button sx={{ color: "white", fontSize: {sm:'10px',md:'18px'}, fontFamily: "Arial" }} onClick={() => navigate("/products")}>
                  PRODUCTS
                </Button>
                <Button sx={{ color: "white", fontSize: {sm:'10px',md:'18px'}, fontFamily: "Arial" }} onClick={() => navigate("/contact")}>
                  CONTACT
                </Button>
              </Box>
            )}


        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <>
            <Box sx={{ cursor:"pointer",color: "white", ml: "auto" }} onClick={toggleDrawer(true)}>
              <MenuIcon sx={{fontSize: 32}} />
            </Box>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250,bgcolor:"#d3d1d1ff" }} role="presentation">
                  <List>
                    {menuItems.map((item, index) =>
                      item.subItems ? (
                        <React.Fragment key={index}>
                          <ListItem button onClick={() => setOpenServices(!openServices)}
                              sx={{
                                backgroundColor: index % 2 === 0?"#e3f2fd": "#fff3e0",
                              "&:hover": {
                                backgroundColor: index % 2 === 0? "#bbdefb" : "#ffe0b2",
                              },
                            }}
                            >
                            <ListItemText primary={item.text} 
                              primaryTypographyProps={{
                                fontSize:"18px",
                                fontFamily:"Arial",
                                fontWeight:"bold",
                                color:"#395f43ff"
                              }}
                            />
                            {openServices ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>
                          <Collapse in={openServices} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {item.subItems.map((sub, i) => (
                                <ListItem
                                  button
                                  key={i}
                                  sx={{ pl: 4,
                                    backgroundColor: i % 2 === 0 ? "#d6abc8ff" : "#e0ddf0ff",
                                      "&:hover": {
                                      backgroundColor: i % 2 === 0 ? "#fbbbf0ff" : "#c3b2ffff", 
                                    },
                                  }}
                                  onClick={() => {
                                    navigate(sub.link);
                                    setDrawerOpen(false); 
                                  }}
                                >
                                  <ListItemText primary={sub.text}
                                    primaryTypographyProps={{ 
                                    fontSize: "18px", 
                                    fontFamily: "Courier New", 
                                    color: "#444" 
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
                          sx={{
                            backgroundColor: index % 2 === 0 ? "#e3f2fd" : "#fff3e0", // alternate row colors
                              "&:hover": {
                                backgroundColor: index % 2 === 0 ? "#bbdefb" : "#ffe0b2", 
                            },
                          }}
                          onClick={() => {
                            navigate(item.link);
                            setDrawerOpen(false); 
                          }}
                        >
                      <ListItemText primary={item.text}
                            primaryTypographyProps = {{ fontSize: "18px", fontFamily: "Arial", fontWeight: "bold", color: "#315c34ff" }}
                        />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              </Drawer>

          </>
        )}
        {/* Search */}
          {!isMobile && (
            <Box sx={{ ml: "auto", display:"flex", alignItems:"center" }}>
              <AnimatePresence mode="wait">
              {showSearch ? (
                <motion.div
                  key="search-bar"
                  initial={{ opacity: 0, width: 50 }}
                  animate={{ opacity: 1, width: "250px" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 ,ease:"easeInOut"}}
                  style={{ overflow:"hidden"}} // prevents weird layout shift
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
                sx={{minWidth:{xs:"120px", sm:"200px", md:"250px"}, 
                "& .MuiOutlinedInput-root":{
                  color:"white",
                  "& fieldset":{
                    borderColor:"white",
                  },
                  "&:hover fieldset":{
                    borderColor:'white',
                  },
                  "&.Mui-focused fieldset":{
                    borderColor:"white"
                  },
                },
                "& .MuiInputBase-input::placeholder":{
                  color:"white",
                  opacity:1,
                },
              
              }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon  sx={{color:"white"}}/>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowSearch(false)}>
                          <CloseIcon  sx={{color:"white"}}/>
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
                  // style={{ display: "inline-block" }}
                >
                <IconButton key="search-icon" onClick={() => setShowSearch(true)} sx={{ color: "white" }}>
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

