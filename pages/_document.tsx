import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name="keywords" content="GameMaker2, GMS, 日本語, GameMaker Studio2" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="GameMaker Studio2 JP Club" />
          <meta property="og:url" content="https://gms.iricocco.com" />
          <meta property="og:description" content="GameMaker Studio2の日本語情報を発信するサイトです。" />
          <meta property="og:locale" content="ja_jp" />
          <meta property="og:country-name" content="Japan" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument