import { useState } from 'react';

import  styled from "styled-components";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '../components/Drawer';

// to empacado no menu mobile


export  const Header = ({children})  => {

   // const [menuOpen, setMenuOpen] = useState(false)

   const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

const Header = styled.header `


background-color: red; 
width: 100%;
min-height: 3rem;
display: flex;
align-items:center;



    
`
const Navigation = styled.nav `

margin: 0 auto;
min-width: 98%; 
height: 2.2rem;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items:center;
text-decoration: none;


`
const StyledLink = styled(Link)`

text-decoration: none; 
color: white;
font-family: Roboto;
font-weight:bold;
font-size:17px;
`



const StyledMenuButton = styled.div`
  cursor: pointer;
  padding: 10px;
  color: white;
  
`;



    return (
        <>
        
        <Header>
            <Navigation>
                
            <StyledMenuButton onClick={handleToggleMenu}>{
              isOpen ? 'X' : <MenuIcon/> 
            }
            </StyledMenuButton>
           
            <Drawer 
            isOpen={isOpen}
            handleToggleMenu = {()=>handleToggleMenu()}
            />
     
            <StyledLink to="/login">Logar</StyledLink>
            </Navigation>
        </Header>

     


  

        {children}
        </>
    )

}