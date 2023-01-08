import React, { memo } from 'react';
import { theme } from '../core/theme';
import styled from '@emotion/native';

const StyledText = styled.Text`
  font-size: 26px;
  color: ${ theme.colors.primary };
  font-weight: bold;
  padding-top: 14px;
`;

export const Header = memo(StyledText);
