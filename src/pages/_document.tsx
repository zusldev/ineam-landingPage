import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="INEAM - Ingenieros en Electronica Aeronautica de Mexico, A.C."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
