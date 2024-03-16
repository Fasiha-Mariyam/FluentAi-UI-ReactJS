import Sidebar from "../Components/Sidebar/Sidebar";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const Layout = ({ children }) => {
  const customTheme = createTheme({
    typography: {
      fontFamily: "outfit", // Specify your custom font family here
    },
  });
  return (
    
        <>
        <ThemeProvider theme={customTheme}> 
          <Sidebar data={children} />
          </ThemeProvider>
        </>
  );
};

export default Layout;