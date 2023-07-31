import { Outlet } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Container, Header, HeaderNav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container>
            <Header>
                <div>
                <Button colorScheme='teal' onClick={toggleColorMode}>
                        {colorMode === 'light' ? <FaSun/> : <FaMoon/>}
                </Button>
                </div>
                    
                <div>
                <HeaderNav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </HeaderNav>
                <HeaderNav>
                    <Link to="/registration">Register</Link>
                    <Link to="/login">Log In</Link>
                </HeaderNav>  

                </div>

            </Header>
            <Outlet />
            <footer>
                <div>
                    E-mail: <a href="mailto:golyaka.d@gmail.com">golyaka.d@gmail.com</a>
                    Mobile: <a href="tel:+380974239084">+38 (097) 423-90-84</a>
                </div>
            </footer>
        </Container>
    );
};