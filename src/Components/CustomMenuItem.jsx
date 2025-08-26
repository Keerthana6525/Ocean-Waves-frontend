import { MenuItem } from "@mui/material";

function CustomMenuItem({ children, ...props }) {
  return (
    <MenuItem
      {...props}
      sx={{
        "&:hover": {
          backgroundColor: "transparent", // remove default gray hover
          color: "#923d3dff",               // change text color on hover
          fontWeight: "bold",             // make text bold on hover
          textDecoration: "underline",    // underline effect
        },
        "&:focus": {
          outline: "none", // remove focus outline
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
    </MenuItem>
  );
}

export default CustomMenuItem;
