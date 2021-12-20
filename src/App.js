import { Route, Routes, useLocation } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import { AnimatePresence } from 'framer-motion';

import HomePage from './HomePage';
import WorkPage from './WorkPage';
import ProjectPage from './ProjectPage';
import NotFoundPage from './NotFoundPage';

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/:project" element={<ProjectPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;
