import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Add as AddIcon,
  NotificationImportant,
  AccountCircle,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { TbFlagDiscount } from "react-icons/tb";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: theme.spacing(2),
  width: "100%",
}));

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between", width: "100%" }}>
        {/* Left Group */}
        <Box
          display="flex"
          alignItems="center"
          style={{
            flexBasis: "15%",
            flexShrink: 0,
          }}
        >
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Button href="#leads" color="inherit">
            Leads
          </Button>
          <Typography>/</Typography>
          <Button href="#web-forms" color="inherit">
            Web Forms
          </Button>
        </Box>

        {/* Middle Group */}
        <Box
          display="flex"
          alignItems="center"
          style={{
            flexBasis: "25%",
            justifyContent: "center",
          }}
        >
          <Search
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "30px",
              marginRight: "5px",
            }}
          >
            <StyledInputBase
              placeholder="Search Pipedrive"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "#000" }}>
              <SearchIcon />
            </IconButton>
          </Search>
          <IconButton
            color="inherit"
            style={{
              marginLeft: "10px",
              border: "1px solid #ddd",
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {/* Right Group */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          paddingRight="30px"
          style={{
            flexBasis: "25%",
            flexShrink: 0,
          }}
        >
          <IconButton color="inherit">
            <LiaInfoCircleSolid />
          </IconButton>
          <IconButton color="inherit">
            <TbFlagDiscount />
          </IconButton>
          <IconButton color="inherit">
            <NotificationImportant />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
