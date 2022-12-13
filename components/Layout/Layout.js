import Footer from '../../UI/Home/Footer';
import RBNavbar from "../../UI/Home/RBnavbar";

const Layout = ({ children }) => {
    return (
        <>
            <RBNavbar />
            {children}
            <Footer />

        </>
    )
}

export default Layout