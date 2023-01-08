import React, { memo, useState } from 'react';
import { emailValidator } from '../core/utils';
import { TextInput } from '../components/text-input';
import { theme } from '../core/theme';
import { Button } from '../components/button';
import { Navigation } from '../types';
import { Card } from '../components/card';
import styled, { css } from '@emotion/native';

interface IForgotPasswordProps {
  navigation: Navigation;
}

const StyledBackToLoginContainer = styled.TouchableOpacity`
  width: 100%;
  margin-top: 12px;
`;

const StyledBackToLoginText = styled.Text`
  color: ${ theme.colors.secondary };
  width: 100%;
`;

export const ForgotPassword = memo(({ navigation }: IForgotPasswordProps) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <Card headerText="Restore Password" goBack={ () => navigation.navigate('Login') }>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={ email.value }
        onChangeText={ text => setEmail({ value: text, error: '' }) }
        error={ !!email.error }
        errorText={ email.error }
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={ _onSendPressed } style={ css`margin-top: 12px` }>
        Send Reset Instructions
      </Button>

      <StyledBackToLoginContainer onPress={ () => navigation.navigate('Login') }>
        <StyledBackToLoginText>← Back to login</StyledBackToLoginText>
      </StyledBackToLoginContainer>
    </Card>
  );
});
