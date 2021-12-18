import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import { AnimatePresence } from 'framer-motion';

import HomePage from './HomePage';
import WorkPage from './WorkPage';
import Project1 from './Project1';
import NotFoundPage from './NotFoundPage';

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;
