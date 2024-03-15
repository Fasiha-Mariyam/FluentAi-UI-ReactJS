import * as React from "react";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import CouponWhite from "../../assets/images/Group 1171275614.png";
import CouponBlue from "../../assets/images/Group 1171275613.png";
import CustomerWhite from "../../assets/images/Group 1171275486.png";
import CustomerBlue from "../../assets/images/Group 1171275485.png";
import DashboardWhite from "../../assets/images/Group 1171275462.png";
import DashboardBlue from "../../assets/images/Group 1171275463.png";
import PartnerWhite from "../../assets/images/Vector-13.png";
import PartnerBlue from "../../assets/images/Vector-14.png";
import Logo from "../../assets/images/logo1.png";
import loggedout from "../../assets/images/loggedout.png";
import style from "../../assets/images/style=fill.png";
import Ellipse from "../../assets/images/Ellipse 9.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import SmallScreenBtn from "../Button/SmallScreenBtn";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ data }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pages = [
    {
      name: "Dashboard",
      path: "/",
      iconWhite: DashboardWhite,
      iconBlue: DashboardBlue,
    },
    {
      name: "Create Coupon",
      path: "/createcoupons",
      iconWhite: CouponWhite,
      iconBlue: CouponBlue,
    },
    {
      name: "Customers",
      path: "/all-customer",
      iconWhite: CustomerWhite,
      iconBlue: CustomerBlue,
    },
    {
      name: "Create Partner",
      path: "/createpartner",
      iconWhite: PartnerWhite,
      iconBlue: PartnerBlue,
    },
  ];

  const currentPage = pages.find((page) => page.path === location.pathname);
  const currentPageName = currentPage ? currentPage.name : "Dashboard";
  const handlePageNavigation = (path) => {
    navigate(path);
  };

  // Create custom theme with desired typography
  const customTheme = createTheme({
    typography: {
      fontFamily: "outfit", // Specify your custom font family here
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "white",
              color: "black",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                fontWeight={"bold"}
                fontFamily={"outfit"}
              >
                {currentPageName === "Customers"
                  ? "All Customers"
                  : currentPageName}
              </Typography>
            </div>

            {!isMobile && (
              <div>
                {/* Add your three icons here */}
                <IconButton color="inherit" aria-label="icon1">
                  <img src={loggedout} alt="" />
                </IconButton>
                <IconButton color="inherit" aria-label="icon2">
                  <img src={style} alt="" />
                </IconButton>
                <IconButton color="inherit" aria-label="icon3">
                  <img src={Ellipse} alt="" />
                </IconButton>
              </div>
            )}
            {isMobile && (
              <IconButton color="inherit" aria-label="small-screen-btn">
                <SmallScreenBtn />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#3F51B5",
            },
          }}
          role="presentation"
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <img src={Logo} alt="" height={40} />
            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ color: "white", fontFamily: "outfit", mx: 2 }}>
            {pages.map((page) => (
              <ListItem
                key={page.name}
                disablePadding
                sx={{
                  display: "block",
                  my: 2,
                  backgroundColor:
                    location.pathname === page.path ? "white" : "transparent",
                  color: location.pathname === page.path ? "#3F51B5" : "white",
                  boxShadow:
                    location.pathname === page.path
                      ? "5px 5px 5px 5px rgba(0, 0, 0, 0.1)" // Add shadow when active
                      : "none",
                  borderRadius:
                    location.pathname === page.path
                      ? "10px" // Add border when active
                      : "none",
                }}
                onClick={() => handlePageNavigation(page.path)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      ml: 2,
                      mr: 1,
                      color: "white",
                      justifyContent: "center",
                    }}
                  >
                    {location.pathname === page.path ? (
                      <img src={page.iconBlue} alt="" />
                    ) : (
                      <img src={page.iconWhite} alt="" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {open && isMobile ? null : (
          <Main open={open && !isMobile}>
            <DrawerHeader />
            {data}
          </Main>
        )}
      </Box>
    </ThemeProvider>
  );
}
