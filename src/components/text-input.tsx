import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';
import styled from '@emotion/native';

type Props = React.ComponentProps<typeof Input> & { errorText?: string };

const StyledView = styled.View`
  width: 100%;
  margin-top: 12px;
`;

const StyledInput = styled(Input)`
  background-color: ${ theme.colors.surface };
`;

const StyledErrorText = styled.Text`
  font-size: 14px;
  color: ${ theme.colors.error };
  padding: 4px 4px 0 4px;
`;

export const TextInput = memo(({ errorText, ...props }: Props) => (
  <StyledView>
    <StyledInput
      selectionColor={ theme.colors.primary }
      underlineColor="transparent"
      mode="outlined"
      { ...props }
    />
    { errorText ? <StyledErrorText>{ errorText }</StyledErrorText> : null }
  </StyledView>
));
