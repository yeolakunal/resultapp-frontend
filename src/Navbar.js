import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <Link
                            to="/"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            Home
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        color="inherit"
                        component="div"
                        style={{ margin: "0 10px" }}
                    >
                        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                            About
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
