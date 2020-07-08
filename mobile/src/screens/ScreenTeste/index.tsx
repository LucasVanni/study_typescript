import React from 'react';

import styled from 'styled-components/native';

export default () => (
  <Container>
    <Text>Página teste</Text>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;