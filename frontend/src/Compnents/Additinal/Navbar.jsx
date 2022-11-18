import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signout } from '../../Redux/AuthReducer/action';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const PrimarySearchAppBar = () => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const user = JSON.parse(localStorage.getItem('user'))


    if(user){
          var { isAuth } = JSON.parse(localStorage.getItem('user'))
    }

  

    const handleSignIn = () => {


        if (isAuth) {
            dispatch(signout())
            localStorage.setItem("user", JSON.stringify({ isAuth: false }))
            navigate("/")
        } else {
            navigate("/signin")
        }

    }

    let signin = isAuth ? "none" : ""
    let signout1 = isAuth ? "" : "none"




    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>
                    Profilet
                </p>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Box display={signin}>
                        <LockOpenIcon />
                    </Box>
                    <Box display={signout1}>
                        <LockIcon />
                    </Box>

                </IconButton>

                <Box onClick={handleSignIn} >{isAuth ? "Signout" : "Signin"}</Box>

            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }} mb="3rem">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to="/">
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmVqc3ZmAoop83D7t9qAhxaXKwSVPe0GU8ydTl3nyRj8V9Mp9UABytmzCFfDWyK-GCQU&usqp=CAU'
                                alt='log0'
                                loading="lazy"
                                style={{ maxWidth: "4rem" }}
                            />
                        </Link>

                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box ml="2rem" >
                            <NavLink id='link'  to="/mens">
                                <h2> Men</h2>
                            </NavLink>
                        </Box>
                        <Box ml="2rem" >
                            <NavLink id='link'  to="/womens">
                                <h2> Women</h2>
                            </NavLink>
                        </Box>
                        <Box ml="2rem" >
                            <NavLink  id='link' to="/kids">
                                <h2> Kids</h2>
                            </NavLink>
                        </Box>
                        <Box ml="2rem" >
                            <NavLink id='link' to="/home&kitchen">
                                <h2> Home & kitchen</h2>
                            </NavLink>
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <ShoppingCartSharpIcon />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={handleSignIn} size="large" aria-label="show 17 new notifications" color="inherit">
                            <Box display={signout1}>
                                <Badge color="error"><LogoutIcon /></Badge>
                            </Box>
                            <Box display={signin}>
                                <Badge color="error"><LoginIcon /></Badge>
                            </Box>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}

export default PrimarySearchAppBar
