import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../component/Header';
import HomePage from '../component/HomePage';
import Contact from '../component/Contact';
import PortfolioPage from '../component/Portfolio';
import PortfolioItemPage from '../component/PortfolioItemPage';
import NotFoundPage from '../component/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={PortfolioPage} exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioItemPage} />
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;