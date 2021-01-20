import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';

import styled from 'styled-components/native';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const BaseButton = styled.TouchableOpacity`
  background-color: lightskyblue;
  padding: 16px;
  margin: 4px;
`;

const Button: FunctionComponent<ButtonProps> = ({title, onClick}) => {
  return (
    <BaseButton onPress={() => onClick()}>
      <Text style={{textAlign: 'center'}}>{title}</Text>
    </BaseButton>
  );
};

export default Button;
