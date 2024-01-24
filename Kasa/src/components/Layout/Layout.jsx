import Header from "../header/header";
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;