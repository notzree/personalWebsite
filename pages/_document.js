import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from "react";


export default function Document() {
    const [darkMode, setDarkMode] = useState(true);
  return (
    <Html>
      <Head />
      <body  >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}