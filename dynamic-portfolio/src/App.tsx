import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/projects/:id" component={ProjectDetail} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;