import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AppType, DocumentContext } from 'next/dist/next-server/lib/utils';
import { ComponentType } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(contextRef: DocumentContext) {
    const context = contextRef;
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => App,
          enhanceComponent: (Component: ComponentType) => Component,
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
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
