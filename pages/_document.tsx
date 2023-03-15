import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (

    <Html lang="en">

      <Head />

      <head>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
      
      </head>

      <body style={{backgroundColor: "black", color: "white", width: "100%"}} className="overflow-x-hidden">

        <Main />
        <NextScript />

      </body>

    </Html>

  )
  
}
