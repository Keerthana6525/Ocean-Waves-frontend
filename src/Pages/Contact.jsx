import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import contactusimg from "../assets/phone.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <>
    <Box  sx={{backgroundColor:"#ffff"}}>
      {/* Banner */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 200, md: 350 },
          mb: 4,
          mt: 0,
          backgroundColor:"#ffff"
        }}
      >
        <img
          src={contactusimg}
          alt="Contact Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Overlay Text */}
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#000",
            fontFamily:'sans-serif',
            fontSize:{xs:30,sm:38,md:50},
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          CONTACT
        </Typography>
      </Box>

          {/* Extra Contact Info Cards */}
      <Container  sx={{ mt: 8, mb: 6,backgroundColor:"#fff" }}>
        <Grid container spacing={4} sx={{display:"flex", justifyContent:"center"}}>
          {/* Phone Card */}
          <Grid item xs={12} md={4} sx={{display:"flex", justifyContent:"center"}}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" ,minHeight:250, width:320,bgcolor:"#fff8feff"}}>
              <Phone sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Give us a call
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                0505805291
              </Typography>
              <Typography variant="body1">+971 2 67 67 921</Typography>
            </Paper>
          </Grid>

          {/* Email Card */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" ,minHeight:250, width:320,bgcolor:"#fff8feff"}}>
              <Email sx={{ fontSize: 50, color: "#ff9800", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Drop us a line
              </Typography>
              <Typography variant="body1">info@oceanwavesad.com</Typography>
              <Typography variant="body1">oceanwaves999@hotmail.com</Typography>
            </Paper>
          </Grid>

          {/* Address Card */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center",minHeight:250 , width:320,bgcolor:"#fff8feff"}}>
              <LocationOn sx={{ fontSize: 50, color: "#f44336", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Visit our office
              </Typography>
              <Typography variant="body1">
                Near Lulu Xpress Hypermarket,
                <br />
                Hamdan St. P.O Box: 107183,
                <br />
                Abu Dhabi - U.A.E
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Form & Contact Details */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 ,backgroundColor:"#ffff"}}>
        <Grid container spacing={8} sx={{display:"flex", justifyContent:"center"}}>
          {/* Left side - Form */}
          <Grid item xs={12} md={6} >
            <Paper
              elevation={3}
              sx={{ color:"#fff",p: 3, height: "100%", maxWidth: 600, margin: "0 auto",boxShadow: "2px 2px 8px rgba(24, 27, 25, 0.8)",bgcolor:"#4A6B4A"}}
            >
              <Typography  gutterBottom textAlign={"center"} sx={{fontWeight:"bold",fontSize:{xs:20,sm:25,md:30}, fontFamily:"serif,Georgia"}}>
                WRITE TO US
              </Typography>
              
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ textAlign: "center", mt: 3 }}
              >
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      required
                      InputProps={{
                          style: { color: "#fff" }  // input text color
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" }  // label color
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#fff",   // border color
                            },
                            "&:hover fieldset": {
                              borderColor: "#4e4f50ff", // hover border color
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#0a0a0aff", // focused border color
                            },
                          },
                        }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="E-mail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      InputProps={{
                        style: { color: "#fff" }  
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" }  
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#fff",   
                          },
                          "&:hover fieldset": {
                            borderColor: "#4e4f50ff", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#101111ff", 
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Contact No."
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      fullWidth
                      required
                            InputProps={{
                          style: { color: "#fff" }  
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" }  
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#fff",   
                            },
                            "&:hover fieldset": {
                              borderColor: "#4e4f50ff", 
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#0c0c0cff", 
                            },
                          },
                        }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      fullWidth
                      required
                                          InputProps={{
                        style: { color: "#fff" }  
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" }  
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#fff",   
                          },
                          "&:hover fieldset": {
                            borderColor: "#4e4f50ff", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#0a0a0aff",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                            style: { color: "#fff" }  
                          }}
                          InputLabelProps={{
                            style: { color: "#fff" }  
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#fff",   
                              },
                              "&:hover fieldset": {
                                borderColor: "#4e4f50ff", 
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#080808ff", 
                              },
                            },
                          }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                          style: { color: "#fff" }  
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" }  
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#fff",  
                            },
                            "&:hover fieldset": {
                              borderColor: "#4e4f50ff", 
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#080808ff", 
                            },
                          },
                        }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                          style: { color: "#fff" }  
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" }  
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#fff",   
                            },
                            "&:hover fieldset": {
                              borderColor: "#4e4f50ff", 
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#010408ff", 
                            },
                          },
                        }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Pin Code"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      fullWidth
                      required
                      InputProps={{
                          style: { color: "#fff" }  
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" }  
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#fff",   
                            },
                            "&:hover fieldset": {
                              borderColor: "#4e4f50ff", 
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#070707ff", 
                            },
                          },
                        }}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, backgroundColor: "#0a0a0aff" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Right side - Contact Details */}
          <Grid item xs={12} md={6} >
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>

              {/* Google Map Embed */}
              <Box sx={{ mt: 2 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.7487055930633!2d54.36493097452488!3d24.494162378170227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665dca2ff087%3A0x7bcf747a0b8431f0!2sOCEAN%20WAVES%20SECURITY%20SYSTEMS%20L.L.C!5e0!3m2!1sen!2sin!4v1755593373487!5m2!1sen!2sin"
                  width="100%"
                  height="500px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

     </Box> 
    </>
  );
}
