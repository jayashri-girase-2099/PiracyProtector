import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Allpages from './pages/Allpages';
import Contact from './pages/Contact';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes> 
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/allpages' element={<Allpages/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>  
      <Footer/>  
      
   
    </div>
  );
}

export default App;
