import React, { memo } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from '@emotion/native';

interface IBackButtonProps {
  goBack(): void;
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: ${ `${ 10 + getStatusBarHeight() }` }px;
  left: 10px;
`;

const StyledImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const BackArrow = memo(({ goBack }: IBackButtonProps) => (
  <StyledTouchableOpacity onPress={ goBack }>
    <StyledImage source={ require('../assets/arrow_back.png') }/>
  </StyledTouchableOpacity>
));
