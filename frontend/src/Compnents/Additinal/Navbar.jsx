import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import MoreIcon from "@mui/icons-material/MoreVert";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../Redux/AuthReducer/action";
import { getData } from "../../Redux/AppReducer/action";
import sitelogo from "../../logo.png";

const PrimarySearchAppBar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const user = JSON.parse(sessionStorage.getItem("user"));

  let man =
    "https://www.maxpixel.net/static/photo/1x/User-Man-Head-The-Dummy-Avatar-Jacket-Tie-Foot-659652.png";

  let woman =
    "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png";

  let logo;

  if (user) {
    var { isAuth, token, gender, name } = JSON.parse(
      sessionStorage.getItem("user")
    );
  }

  let Name = name || "Profile";

  if (gender === "Male") {
    logo = man;
  } else {
    logo = woman;
  }

  const cart = useSelector((state) => state.appreducer.cart);

  let len;
  if (isAuth && cart.data) {
    len = cart.data.length;

    if (len === 0) {
      len = undefined;
    }
  } else {
    len = undefined;
  }

  useEffect(() => {
    if (isAuth) {
      dispatch(getData(token));
    }
  }, [isAuth, dispatch, token]);

  const handleSignIn = () => {
    if (isAuth) {
      dispatch(signout());
      len = undefined;
      sessionStorage.removeItem("user");
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  let signin = isAuth ? "none" : "";
  let signout1 = isAuth ? "" : "none";

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink style={{ color: "#000" , textDecoration: "none" }} to="/">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Badge  color="error">
              <HomeIcon />
            </Badge>
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </NavLink>

      <NavLink style={{ color: "#000" , textDecoration: "none" }} to="/cart">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Badge badgeContent={len} color="error">
              <ShoppingCartSharpIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </NavLink>

      <NavLink to="/profile" style={{ color: "#000", textDecoration: "none" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Box display={signin}>
              <AccountCircle />
            </Box>

            <Box display={signout1}>
              <img
                style={{ width: "2rem", height: "2rem" }}
                src={logo}
                alt="male"
              />
            </Box>
          </IconButton>
          <p>{Name}</p>
        </MenuItem>
      </NavLink>

      <NavLink to="/mens" style={{ color: "#000", textDecoration: "none" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Box>
              <LocalLaundryServiceIcon />
            </Box>
          </IconButton>
          <p>Men</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/womens" style={{ color: "#000", textDecoration: "none" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Box>
              <LocalLaundryServiceIcon />
            </Box>
          </IconButton>
          <p>Women</p>
        </MenuItem>
      </NavLink>
      <NavLink to="/kids" style={{ color: "#000", textDecoration: "none" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Box>
              <LocalLaundryServiceIcon />
            </Box>
          </IconButton>
          <p>Kids</p>
        </MenuItem>
      </NavLink>
      <NavLink
        to="/home&kitchen"
        style={{ color: "#000", textDecoration: "none" }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMobileMenuClose}
          >
            <Box>
              <LocalLaundryServiceIcon />
            </Box>
          </IconButton>
          <p>Home & kitchen</p>
        </MenuItem>
      </NavLink>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMobileMenuClose}
        >
          <Box display={signin}>
            <LockOpenIcon />
          </Box>
          <Box display={signout1}>
            <LockIcon />
          </Box>
        </IconButton>

        <Box onClick={handleSignIn}>{isAuth ? "Signout" : "Signin"}</Box>
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
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <NavLink to="/">
              <img
                src={sitelogo}
                alt="log0"
                loading="lazy"
                style={{
                  maxWidth: "3rem",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                }}
              />
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box ml="9rem">
              <NavLink id="NavLink" to="/mens">
                <h2> Men</h2>
              </NavLink>
            </Box>
            <Box ml="2rem">
              <NavLink id="NavLink" to="/womens">
                <h2> Women</h2>
              </NavLink>
            </Box>
            <Box ml="2rem">
              <NavLink id="NavLink" to="/kids">
                <h2> Kids</h2>
              </NavLink>
            </Box>
            <Box ml="2rem">
              <NavLink id="NavLink" to="/home&kitchen">
                <h2> Home & kitchen</h2>
              </NavLink>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={len} color="error">
                <NavLink style={{ color: "#fff" }} to="/cart">
                  <ShoppingCartSharpIcon />
                </NavLink>
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleSignIn}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Box display={signout1}>
                <Badge color="error">
                  <LogoutIcon />
                </Badge>
              </Box>
              <Box display={signin}>
                <Badge color="error">
                  <LoginIcon />
                </Badge>
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
              <NavLink to="/profile" style={{ color: "#fff" }}>
                <Box display={signin}>
                  {/* /profile */}
                  <AccountCircle />
                </Box>
                <Box display={signout1}>
                  <img
                    style={{ width: "2rem", height: "2rem" }}
                    src={logo}
                    alt="male"
                  />
                </Box>
              </NavLink>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
};

export default PrimarySearchAppBar;
