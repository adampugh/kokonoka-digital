import 'normalize.css';
import './App.scss';

import Loading from './Loading';
import Nav from './Nav';
import Hero from './Hero';
import Work from './Work';
import Brands from './Brands';
import Team from './Team';
import Careers from './Careers';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            {/* <Loading /> */}
            <Nav />
            <Hero />
            <Brands />
            <Team />
            <Careers />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
