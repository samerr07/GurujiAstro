import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Testimonials from './Components/Testimonial';
import Footer from './Components/Footer';
import AstrologerList from './Components/AstrologerList';


function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Testimonials/>
     <AstrologerList/>
        <Routes>
        {/* <Route path="/" element={<Header/>} /> */}
        </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
