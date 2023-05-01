import { Fragment } from 'react';
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
    <Fragment>
      <ResetStyle/>
      <GlobalStyle/>
      <Routes>
        <Route element={<Header />}>
          <Route path='/about' element={<About />}/>
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/housing:id' element={<Housing />} />
        <Route element={<Footer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
