import Document, { Html, Head, Main, NextScript } from 'next/document'

interface CustomDocumentInterface {
  title: string
  description: string
}

class CustomDocument extends Document implements CustomDocumentInterface {
  title = 'FizzBuzz問題でTDD'
  description = 'FizzBuzz問題をTDDで実装してみた'

  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta name="description" content={this.description} />
          <meta name="theme-color" content="#333" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="robots" content="noindex" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
