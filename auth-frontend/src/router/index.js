import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import Home from '../views/content/Home';
import About from '../views/content/About';
import Navbar from '../component/Navbar';
import Authenticated from '../middleware/Authenticated';
import Guest from '../middleware/Guest';
import NotFound from '../views/page/NotFound';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Authenticated>
                            <Navbar />
                            <Home />
                        </Authenticated>
                    </Route>
                    <Route path="/about">
                        <Authenticated>
                            <Navbar />
                            <About />
                        </Authenticated>
                    </Route>
                    <Route path="/login">
                        <Guest>
                            <Login />
                        </Guest>
                    </Route>
                    <Route path="/register">
                        <Guest>
                            <Register />
                        </Guest>
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Router;