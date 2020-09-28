import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  FollowAge, 
} from './styles';

const Profilepage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src='https://github.com/gabrielpdev.png' alt='gabriel' />  
      </Banner>   

      <ProfileData>
        <EditButton outlined >Editar Perfil</EditButton> 

        <h1>Gabriel Pereira</h1>
        <h2>@Gabrielp_100</h2>

        <p>
          Programador FullStack com JS, ReactJs e NodeJs.
        </p>

        <ul>
          <li>
            <LocationIcon />
            Mantena, Brasil
          </li>
          <li>
            <CakeIcon />
            Nacido(a) em 9 de abril de 1999
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>

      <Feed>
    
      </Feed>
    </Container>
  );
};

export default Profilepage;
