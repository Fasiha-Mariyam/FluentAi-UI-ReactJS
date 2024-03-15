import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = ({ children }) => {

  return (
        <>
          <Sidebar data={children} />
        </>
  );
};

export default Layout;