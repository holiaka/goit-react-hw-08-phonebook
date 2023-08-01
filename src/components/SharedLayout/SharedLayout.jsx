import { Link as ReactRouterLink, Outlet } from 'react-router-dom';
import {
  useColorMode,
  useColorModeValue,
  Button,
  Link as ChakraLink,
  Link,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  Container,
  Header,
  HeaderNav,
  HeaderSide,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Container>
      <Header>
        <HeaderSide>
          <HeaderNav>
            <ChakraLink as={ReactRouterLink} to="/">
              Home
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about">
              About
            </ChakraLink>
          </HeaderNav>
        </HeaderSide>
        <HeaderSide>
          <Button colorScheme="teal" onClick={toggleColorMode}>
            {colorMode === 'light' ? <FaSun /> : <FaMoon />}
          </Button>
          <HeaderNav>
            <ChakraLink as={ReactRouterLink} to="/registration" colorScheme='gray'>
              Register
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/login">
              Log In
            </ChakraLink>
          </HeaderNav>
        </HeaderSide>
      </Header>
      <Outlet />
      <footer>
        <div>
          E-mail:{' '}
          <Link href="mailto:golyaka.d@gmail.com">golyaka.d@gmail.com</Link>
          Mobile: <Link href="tel:+380974239084">+38 (097) 423-90-84</Link>
        </div>
      </footer>
    </Container>
  );
};
