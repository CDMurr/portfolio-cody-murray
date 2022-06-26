import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className='App'>
     <Header></Header>
     <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
