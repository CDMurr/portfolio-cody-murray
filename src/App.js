import {useState} from 'react'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';
import Resume from './component/Resume';



function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe')
              
  return (
    <div className='App'>
     <Header setCurrentPage={setCurrentPage} />
     {currentPage === 'aboutMe' && <About />}
      {currentPage === 'portfolio' && <Project />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'resume' && <Resume />}
      <Footer></Footer>
    </div>
  );
}

export default App;
