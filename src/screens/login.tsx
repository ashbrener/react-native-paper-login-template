import React, { memo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/button';
import { TextInput } from '../components/text-input';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import { Card } from '../components/card';

interface ILoginProps {
  navigation: Navigation;
}

export const Login = memo(({ navigation }: ILoginProps) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Card headerText="Welcome back." goBack={ () => navigation.navigate('Home') }>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={ email.value }
        onChangeText={ text => setEmail({ value: text, error: '' }) }
        error={ !!email.error }
        errorText={ email.error }
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={ password.value }
        onChangeText={ text => setPassword({ value: text, error: '' }) }
        error={ !!password.error }
        errorText={ password.error }
        secureTextEntry
      />

      <View style={ styles.forgotPassword }>
        <TouchableOpacity
          onPress={ () => navigation.navigate('ForgotPassword') }
        >
          <Text style={ styles.label }>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={ _onLoginPressed }>
        Login
      </Button>

      <View style={ styles.row }>
        <Text style={ styles.label }>Don’t have an account? </Text>
        <TouchableOpacity onPress={ () => navigation.navigate('Register') }>
          <Text style={ styles.link }>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
