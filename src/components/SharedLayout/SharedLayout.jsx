import { Link as ReactRouterLink, Outlet } from 'react-router-dom';
import { useColorMode, useColorModeValue, Button, Link as ChakraLink, Link } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Container, Header, HeaderNav} from './SharedLayout.styled';


export const SharedLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Container>
      <Header>
        <div>
          <Button colorScheme="teal" onClick={toggleColorMode} bg={bg} color = {color}>
            {colorMode === 'light' ? <FaSun /> : <FaMoon />}
          </Button>
        </div>

        <div>
          <HeaderNav>
            <ChakraLink as={ReactRouterLink} to="/" color = {textColor}>
              Home
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about" color = {textColor}>
              About
            </ChakraLink>
          </HeaderNav>
          <HeaderNav>
            <ChakraLink as={ReactRouterLink} to="/registration" color = {textColor}>
              Register
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/login" color = {textColor}>
              Log In
            </ChakraLink>
          </HeaderNav>
        </div>
      </Header>
      <Outlet />
      <footer>
        <div>
          E-mail: <Link href="mailto:golyaka.d@gmail.com" >golyaka.d@gmail.com</Link>
                  Mobile: <Link href="tel:+380974239084" _hover={{color: "teal.500"}}>+38 (097) 423-90-84</Link>
        </div>
      </footer>
    </Container>
  );
};
