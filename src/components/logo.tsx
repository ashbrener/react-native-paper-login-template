import React, { memo } from 'react';
import styled from '@emotion/native';

const StyledImage = styled.Image`
  width: 128px;
  height: 128px;
  margin-bottom: 12px;
`;

export const Logo = memo(() => (
  <StyledImage source={ require('../assets/logo.png') }/>
));
