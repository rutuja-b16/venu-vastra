import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/navbar/NavbarComponent.jsx'
import Home from './components/homepage/Home.jsx'
import Product from './components/productpage/Product.jsx'
import Blog from './components/blogpage/Blog.jsx'
import Contact from './components/contactpage/Contact.jsx'
import About from './components/aboutpage/About.jsx'
import Footer from './components/FooterComponent/footer.jsx'
import WhatsAppButton from './components/Whatsapp/WhatsAppButton.jsx'
import CallButton from './components/Calls/CallButton.jsx'

function App() {
  return (
   <BrowserRouter>
 <div className="App">
    <NavbarComponent/>
     <main className="content">
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
     
        </Routes>
             <WhatsAppButton/>
             <CallButton/>
        <Footer/>
        </main>
        
   </div>
   </BrowserRouter>
  )
}

export default App
