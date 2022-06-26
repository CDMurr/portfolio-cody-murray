import {useState} from 'react'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';



function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe')
              
  return (
    <div className='App'>
     <Header setCurrentPage={setCurrentPage} />
     {currentPage === 'aboutMe' && <About />}
      {currentPage === 'portfolio' && <Project />}
      {currentPage === 'contact' && <Contact />}
      <Footer></Footer>
    </div>
  );
}

export default App;
