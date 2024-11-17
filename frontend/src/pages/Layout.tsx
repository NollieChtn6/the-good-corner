import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <main className="main-content">
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
