// Plugins
// import $ from 'jquery';

// Layout
import Nav from './Project/Layout/Nav/Nav';
import Header from './Project/Layout/Header/Header';
import Footer from './Project/Layout/Footer/Footer';
// Content
import Home from './Project/Pages/Home/Home';
import About from './Project/Pages/About/About';
import Contact from './Project/Pages/Contact/Contact';
import NotFound from './Project/Pages/NotFound/NotFound';
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sanitize.css';
import './App.css';

import {Routes, Switch, Route} from 'react-router-dom';

function App() {
    return (   
        <div className="App">
            <Header />
            <Nav />

            <div className="main">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </div>

            <Footer />

        </div>
    );
}

export default App;
