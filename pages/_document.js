// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import './styles/style.css';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>jtest</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>console.log("asassas");</script>
        </body>
      </html>
    );
  }
}
