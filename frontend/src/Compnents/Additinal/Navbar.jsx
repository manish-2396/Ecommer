import React, { useEffect, useState } from 'react';
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
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../Redux/AuthReducer/action';
import { getData } from '../../Redux/AppReducer/action';


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

    let man = "https://www.maxpixel.net/static/photo/1x/User-Man-Head-The-Dummy-Avatar-Jacket-Tie-Foot-659652.png"

    let woman = "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png"

    let logo;


    if (user) {
        var { isAuth, token, gender, name } = JSON.parse(localStorage.getItem('user'))
    }

    let Name = name || "Profile"

    if (gender === "Male") {
        logo = man
    } else {
        logo = woman
    }

    const cart = useSelector((state) => state.appreducer.cart);
    // console.log(cart);




    let len;
    if (isAuth && cart.data) {
        len = cart.data.length

        if (len === 0) {
            len = undefined;
        }
    } else {
        len = undefined;
    }

    useEffect(() => {
        if (isAuth) {
            dispatch(getData(token))
        }
    }, [isAuth, dispatch, token])




    const handleSignIn = () => {


        if (isAuth) {
            dispatch(signout())
            len = undefined;

            localStorage.setItem("user", JSON.stringify({ isAuth: false }))
            navigate("/")
        } else {
            navigate("/signin")
        }

    }

    // console.log(len)

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
                    <Badge badgeContent={len} color="error">
                        <Link style={{ color: "#000" }} to="/cart" >
                            <ShoppingCartSharpIcon />
                        </Link>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>

            <Link to="/profile" style={{ color: "#000" , textDecoration:"none" }} >
                <MenuItem >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Box display={signin} >
                            <AccountCircle />
                        </Box>
                        <Box display={signout1} >
                            <img style={{ width: "2rem", height: "2rem" }} src={logo} alt='male' />
                        </Box>
                    </IconButton>
                    <p>
                        {/* profile */}
                        {Name}
                    </p>
                </MenuItem>
            </Link>
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
                            <NavLink id='link' to="/mens">
                                <h2> Men</h2>
                            </NavLink>
                        </Box>
                        <Box ml="2rem" >
                            <NavLink id='link' to="/womens">
                                <h2> Women</h2>
                            </NavLink>
                        </Box>
                        <Box ml="2rem" >
                            <NavLink id='link' to="/kids">
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
                            <Badge badgeContent={len} color="error">
                                <Link style={{ color: "#fff" }} to="/cart" >
                                    <ShoppingCartSharpIcon />
                                </Link>
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
                            <Link to="/profile" style={{ color: "#fff" }} >
                                <Box display={signin} >
                                    {/* /profile */}
                                    <AccountCircle />
                                </Box>
                                <Box display={signout1} >

                                    <img style={{ width: "2rem", height: "2rem" }} src={logo} alt='male' />

                                </Box>
                            </Link>
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
