import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

import ShowUsers from './components/ShowUsers';

export default () => {

  const { navigate } = useNavigation();
  
  return (
  <Container>
    <ShowUsers text="texto teste props" name="Lucas" idade={23}  />
    <Button>
      <TextButton onPress={() => navigate('ScreenTeste')}>next page</TextButton>
    </Button>
  </Container>
)};



const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  background-color: #97c;
  padding: 20px;
  border-radius: 40px;
`;

const TextButton  = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f2f2f2;
`;