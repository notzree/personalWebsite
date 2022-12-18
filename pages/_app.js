import '../styles/globals.css'
document.documentElement.classList.add("dark"); // dark mode on scroll 
function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}

export default MyApp
