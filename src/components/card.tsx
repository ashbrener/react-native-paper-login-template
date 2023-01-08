import React, { memo, PropsWithChildren } from 'react';
import { Logo } from './logo';
import { Header } from './header';
import { Background } from './background';
import { BackArrow } from './back-arrow';

interface ICardProps {
  headerText: string;
  goBack?: () => void;
}

export const Card = memo(({ headerText, goBack, children }: PropsWithChildren<ICardProps>) => (
  <Background>
    {
      goBack
        ? <BackArrow goBack={ goBack } />
        : null
    }
    <Logo />
    <Header>{ headerText }</Header>
    { children }
  </Background>
));
