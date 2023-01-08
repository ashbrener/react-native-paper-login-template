import React, { memo } from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';
import styled, { css } from '@emotion/native';

const StyledPaperButton = styled(PaperButton)`
  margin-top: 10px;
  width: 300px;
  border-radius: 5px;
  ${ ({ mode }) => mode === 'outlined' ? css`background-color: ${ theme.colors.surface }` : null };
`;

const labelStyle = css`
  font-weight: bold;
  font-size: 15px;
  line-height: 26px;
`;

export const Button = memo(({ style, children, ...props }: React.ComponentProps<typeof PaperButton>) => (
  <StyledPaperButton style={ style } labelStyle={ labelStyle } { ...props }>
    { children }
  </StyledPaperButton>
));
