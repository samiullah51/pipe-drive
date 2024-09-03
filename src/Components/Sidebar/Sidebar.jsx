import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  MyLocation as MyLocationIcon,
  MonetizationOn as MonetizationOnIcon,
  CheckCircle as CheckCircleIcon,
  Campaign as CampaignIcon,
  MailOutline as MailOutlineIcon,
  CalendarToday as CalendarTodayIcon,
  ContactMail as ContactMailIcon,
  Insights as InsightsIcon,
  Category as CategoryIcon,
  Storefront as StorefrontIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";

const drawerWidth = 60;

const sidebarItems = [
  { icon: <MyLocationIcon />, label: "My Location", link: "/location" },
  {
    icon: <MonetizationOnIcon />,
    label: "Monetization",
    link: "/monetization",
  },
  { icon: <CheckCircleIcon />, label: "Check Circle", link: "/verification" },
  { icon: <CampaignIcon />, label: "Campaign", link: "/campaign" },
  { icon: <MailOutlineIcon />, label: "Mail", link: "/mail" },
  { icon: <CalendarTodayIcon />, label: "Calendar", link: "/calendar" },
  { icon: <ContactMailIcon />, label: "Contact", link: "/contact" },
  { icon: <InsightsIcon />, label: "Insights", link: "/insights" },
  { icon: <CategoryIcon />, label: "Category", link: "/category" },
  { icon: <StorefrontIcon />, label: "Storefront", link: "/storefront" },
  { icon: <MoreHorizIcon />, label: "More", link: "/more" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#211c52",
          color: "#fff",
        },
      }}
    >
      <List style={{ padding: "7px" }}>
        <ListItem
          disablePadding
          style={{ padding: "0px", borderRadius: "5px" }}
        >
          <ListItemButton
            component="a"
            href="/home"
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 0, margin: "3px 0" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M20.05 9.61c0 3.93-2.53 6.62-6.15 6.62-1.73 0-3.15-.71-3.68-1.6l.03.91v5.63h-3.7V6.62c0-.2-.05-.25-.28-.25H5v-3.1h3.1c1.41 0 1.77 1.23 1.87 1.76.56-.94 2.02-2.03 4.1-2.03 3.58 0 5.98 2.66 5.98 6.61Zm-3.77.03c0-2.1-1.37-3.55-3.1-3.55-1.41 0-3.01.94-3.01 3.58 0 1.72.96 3.52 2.96 3.52 1.48 0 3.15-1.07 3.15-3.55Z"
                  fill="#fff"
                />
              </svg>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {sidebarItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component="a"
              href={item.link}
              sx={{
                justifyContent: "center",
                backgroundColor:
                  location.pathname === item.link ? "#6962f2" : "inherit",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#6962f2",
                },
                margin: "3px 0",
              }}
            >
              <ListItemIcon
                sx={{ color: "#fff", minWidth: 0, margin: "5px 0" }}
              >
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
