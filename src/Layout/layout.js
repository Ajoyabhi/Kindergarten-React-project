import React,{useEffect} from 'react'
import Header from './header.js'
import Footer from './footer.js'
import { Helmet } from 'react-helmet'
import HeaderCarousel from './carsouel.js'
import { initScripts } from '../utils/init.js';

const Layout = ({ children, title, description, keyword, author }) => {
  useEffect(() => {
    initScripts();
  }, []);


  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <HeaderCarousel />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Ecommerce app -shop now',
  description: 'mern stack project',
  keywords: 'mern, react,node,mongodb',
  author: 'Abhishek',
}

export default Layout
