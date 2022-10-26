// Plugins
// import $ from 'jquery';

// Layout
import Nav from './Project/Layout/Nav/Nav';
import Header from './Project/Layout/Header/Header';
import Footer from './Project/Layout/Footer/Footer';
// Content
import Home from './Project/Pages/Home/Home';
// import About from './Project/Pages/About/About';
// import Contact from './Project/Pages/Contact/Contact';
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sanitize.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Nav></Nav>
            <div className="main">
                <Home></Home>
                {/* <About></About>
                <Contact></Contact> */}
            </div>
            {/* footer */}
            <Footer></Footer>
            {/* <About></About> */}

        </div>
    );
}

export default App;
