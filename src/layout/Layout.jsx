import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
