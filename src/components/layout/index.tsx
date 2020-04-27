import React from 'react';

import * as S from './styles';
import { Header } from '../header';
import { LayoutProps } from './types/layout-props';

const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <Header />
    <S.Content>{children}</S.Content>
  </S.Layout>
);

export default Layout;
