import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>
        
      <StickBox>
        <Body>
          <List 
          title='Talvez você curta'
          elements={[
              <FollowSuggestion
                name='Gabriel Pereira'
                nickname='@Gabrielp_100'
              />,
              <FollowSuggestion
                name='Gabriel Pereira'
                nickname='@Gabrielp_100'
              />,
              <FollowSuggestion
                name='Gabriel Pereira'
                nickname='@Gabrielp_100'
              />,
            ]}
          />
          
          <List 
          title='Talvez você curta'
          elements={[
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
