import React from 'react';

import * as S from './styles';
import { Header } from '../header';
import { LayoutProp } from './types/layout-prop';

const Layout = ({ children }: LayoutProp) => (
  <S.Layout>
    <Header />
    <S.Content>{children}</S.Content>
  </S.Layout>
);

export default Layout;
