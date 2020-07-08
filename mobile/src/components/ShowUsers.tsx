import React from 'react';

import styled from 'styled-components/native';

interface Props {
  text: string,
  name: string,
  idade: number
}

const ShowUsers: React.FC<Props> = ({ text , name, idade}) => (
  <>
    <Texto>Olá, {name}</Texto>
    <Texto>O senhor tem: {idade} anos</Texto>
    <Texto>{text}</Texto>
  </>
);

export default ShowUsers;

const Texto = styled.Text`
  font-size: 20px
`;

