import React, { memo } from 'react';
import { Button } from '../components/button';
import { Paragraph } from '../components/paragraph';
import { Navigation } from '../types';
import { Card } from '../components/card';

interface IHomeProps {
  navigation: Navigation;
}

export const Home = memo(({ navigation }: IHomeProps) => (
  <Card headerText="Login Template">
    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={ () => navigation.navigate('Login') }>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={ () => navigation.navigate('Register') }
    >
      Sign Up
    </Button>
  </Card>
));
