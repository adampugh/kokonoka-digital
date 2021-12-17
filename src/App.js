import { useState, useEffect } from 'react';
import 'normalize.css';
import './App.scss';

import Loading from './Loading';
import Nav from './Nav';
import Hero from './Hero';
import Brands from './Brands';
import Team from './Team';
import Careers from './Careers';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            <header className="App-header"></header>
            {/* <Loading /> */}
            {loading ? (
                <Loading />
            ) : (
                <div className="site">
                    <Nav />
                    <Hero />
                    <Brands />
                    <Team />
                    <Careers />
                    <Contact />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default App;
