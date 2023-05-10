import { Routes, Route } from 'react-router-dom';
import ResetStyle from '../styles/resetStyle';
import GlobalStyle from '../styles/globalStyle';

import Header from './Header/Header'
import Home from './Home/Home'
import Housing from './Housing/Housing'
import About from './About/About'
import Footer from './Footer/Footer'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />} />
        <Route path='/housing/:id' element={<Housing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
