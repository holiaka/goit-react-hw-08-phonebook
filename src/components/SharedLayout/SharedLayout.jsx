import { Outlet } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import { Container, HeaderNav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container>
            <header>
                <HeaderNav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </HeaderNav>
                <div>
                    <Button colorScheme='teal' onClick={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>

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