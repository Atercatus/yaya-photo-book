import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AppType, DocumentContext } from 'next/dist/next-server/lib/utils';
import { ComponentType } from 'react';
import { GlobalStyles } from '../components/global/styles';

export default class MyDocument extends Document {
  static async getInitialProps(contextRef: DocumentContext) {
    const context = contextRef;
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props) =>
            sheet.collectStyles(
              <>
                <App {...props} />
                <GlobalStyles />
              </>,
            ),
          enhanceComponent: (Component: ComponentType) => Component,
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
