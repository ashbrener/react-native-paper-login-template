import React, { memo } from 'react';
import { theme } from '../core/theme';
import styled from '@emotion/native';

const StyledText = styled.Text`
  font-size: 16px;
  line-height: 26px;
  color: ${ theme.colors.secondary },;
  text-align: center;
  margin-bottom: 14px;
`;

export const Paragraph = memo(StyledText);

