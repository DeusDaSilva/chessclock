import React from 'react';
import {Alert} from 'react-native';

import styled from 'styled-components/native';

import Button from '../Components/Button';

const MainMenuContainer = styled.SafeAreaView`
  height: 100%;
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.View`
  height: 50%;
`;

const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 16px;
`;

const MainMenu = () => {
  return (
    <>
      <MainMenuContainer>
        <Menu>
          <Title>Chess Clock!</Title>
          <Button
            title={'Start new timer.'}
            onClick={() => {
              Alert.alert('Hello there');
              console.log('Hello');
            }}></Button>
        </Menu>
      </MainMenuContainer>
    </>
  );
};

export default MainMenu;
