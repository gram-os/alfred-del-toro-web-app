import React, { useState } from "react";
import { AppBar, Box, Button, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";

const pages = [
    {title: "Home", url: ""},
    {title: "About", url: "about"},
    {title: "Achievements", url: "achievements"},
    {title: "Item Shop", url: "item-shop"},
    {title: "Users", url: "users"}
]

export default function NavBar() {
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setDrawerState(open);
    }


    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Typography 
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Alfred del Toro
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            open={drawerState}
                            onClose={toggleDrawer(false)}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem 
                                    key={page.title} 
                                    onClick={toggleDrawer(false)} 
                                    component={RouterLink}
                                    to={`/${page.url}`}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Alfred del Toro
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={RouterLink}
                                key={page.title}
                                onClick={toggleDrawer(false)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                to={`/${page.url}`}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}