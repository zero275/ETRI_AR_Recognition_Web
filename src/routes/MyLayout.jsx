import Footer from "@/components/Layouts/footer";
import Header from "@/components/Layouts/header";
import { Outlet, useLocation } from "react-router-dom";
const MyLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Header />
      <Outlet />
      {pathname === "/Home" && <Footer />}
    </>
  );
};

export default MyLayout;
