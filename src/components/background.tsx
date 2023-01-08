import React, { memo, PropsWithChildren } from 'react';
import styled from '@emotion/native';

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
`;

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px;
  width: 100%;
  max-width: 340px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const Background = memo(({ children }: PropsWithChildren) => (
  <StyledImageBackground
    source={ require('../assets/background_dot.png') }
    resizeMode="repeat"
  >
    <StyledKeyboardAvoidingView behavior="padding">
      { children }
    </StyledKeyboardAvoidingView>
  </StyledImageBackground>
));
