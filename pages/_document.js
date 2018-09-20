// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";
import "./styles/style.css";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>jtest</title>
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
