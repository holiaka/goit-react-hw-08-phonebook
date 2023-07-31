import { NavLink } from "react-router-dom";
import styled from "styled-components"


export const Container = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

`

export const HeaderNav = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid;
`

export const Link = styled(NavLink)`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    :hover{
        color: blue;
    }
`;