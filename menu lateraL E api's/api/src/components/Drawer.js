import  styled from "styled-components";

//ICON
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

// navegação

import { useNavigate } from 'react-router-dom';


export const Drawer = ({isOpen}) => {

  const navigate = useNavigate()

  const handleMenuClick = (route) => {
    navigate(route)
  }

   



const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  position: fixed;
  top: 3rem;
  left: 0;
  width: 10%;
  height: 100vh;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
 
  
`;

const ListItem =styled.button`

display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 3rem;
margin-bottom: .2rem;
border: none;
background-color: #ffffff;


;

&:hover {
  background-color: #f2f2f2;
    cursor: pointer;
  }


`
const ListItemIcon = styled.div`

width: 35%;



`
const ListItemText = styled.div`
text-align: left;
width: auto;


`
const TitleMenu = styled.div`

text-align: center;
margin-bottom: .6rem;
`

const Title = styled.h3`
  margin: 1rem 0;
`

    return (
        <>
        <StyledMobileMenu isOpen={isOpen}>
       
      <TitleMenu>
        <Title>Users</Title>
      </TitleMenu>
        
        <ListItem  onClick={() => handleMenuClick('/')}> 
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem> 

          <ListItem  onClick={() => handleMenuClick('/user')}> 
            <ListItemIcon><GroupIcon/></ListItemIcon>
            <ListItemText>Users</ListItemText>
          </ListItem> 

          <ListItem  onClick={() => handleMenuClick('/register')}> 
            <ListItemIcon><GroupAddIcon/></ListItemIcon>
            <ListItemText>Register</ListItemText>
          </ListItem> 
          <br/>
        <hr/>

          <TitleMenu>
        <Title>API'S</Title>
      </TitleMenu>
        

      </StyledMobileMenu>
        </>
    )
}