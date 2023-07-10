import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="shortcut icon" href="/icon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7915805381655628" crossorigin="anonymous"></script>
      </Head>
          <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-K0TY06F5S8"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-K0TY06F5S8');
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
