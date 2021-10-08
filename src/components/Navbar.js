import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Container = styled.div`
        background-color: #fff;
        color: black;
        padding: 2em;
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Left = styled.div`
flex:1;
`

const Language = styled.span`
font-size: 14px;
cursor:pointer;
`
const SearchContainer = styled.div`
display:flex;
border: 0.5px solid lightgray`

const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.div``

const MenuItem = styled.div`
margin-right:15px`

const Right  = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                    <Left>
                        <Language>FR<br/>EN</Language>
                        <SearchContainer>
                          <SearchIcon/>
                        </SearchContainer>
                        </Left>
                    <Center><Logo>My logo name</Logo></Center>
                    <Right>
                        <MenuItem>LOGIN</MenuItem>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                    </MenuItem>
                    
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
