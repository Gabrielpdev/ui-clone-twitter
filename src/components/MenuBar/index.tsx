import React from 'react';

import Button from '../Button';

import { 
  Container, 
  TopSide, 
  Logo,
  MenuButtons, 
  HomeIcon, 
  BellIcon, 
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        
        <MenuButtons >
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Menssagens</span>
        </MenuButtons>
          
        <MenuButtons>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtons>

        <MenuButtons className='active' >
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtons>

        <Button>
          <span>Tweetar</span>
        </Button>

      </TopSide>

      <BotSide>
        <Avatar src='https://github.com/gabrielpdev.png' alt='gabriel' />  

        <ProfileData>
          <strong>Gabriel Pereira</strong>
          <span>@Gabrielp_100</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
