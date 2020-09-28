import React from 'react';

import { 
  Container,
  Item,
  Title,
 } from './styles';

interface Porps {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Porps> = ({title, elements}) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
