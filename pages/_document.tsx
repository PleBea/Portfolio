import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}