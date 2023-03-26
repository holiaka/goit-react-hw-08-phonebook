import { Outlet } from "react-router-dom";
import { Container, HeaderNav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <header>
                <HeaderNav>                    
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </HeaderNav>
                <div>
                    
                </div>
            </header>
            <Outlet />
            <footer>
                <div>
                    <a href="mailto:golyaka.d@gmail.com">golyaka.d@gmail.com</a>
                    <a href="tel:+380974239084">+38 (097) 423-90-84"</a>
                </div>
            </footer>
        </Container>
    );
};