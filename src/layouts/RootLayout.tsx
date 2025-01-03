import { Outlet, useLocation } from "react-router-dom";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";
import { Footer } from "../components/shared/Footer";
import { Navbar } from "../components/shared/Navbar";

export const RootLayout = () => {
    const { pathname } = useLocation();

    return (
    <div className="h-screen flex flex-col font-montserrat">
        <Navbar />

        {pathname === "/" && <Banner />}

        <main className="container my-8 flex-1">
        <Outlet />
        </main>

        {pathname === "/" && <Newsletter />}

        <Footer />
    </div>
    );
};
