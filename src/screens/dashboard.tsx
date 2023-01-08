import React, { memo } from 'react';
import { Paragraph } from '../components/paragraph';
import { Button } from '../components/button';
import { Navigation } from '../types';
import { Card } from '../components/card';

interface IDashboardProps {
  navigation: Navigation;
}

export const Dashboard = memo(({ navigation }: IDashboardProps) => (
  <Card headerText="Let’s start">
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={ () => navigation.navigate('Home') }>
      Logout
    </Button>
  </Card>
));
