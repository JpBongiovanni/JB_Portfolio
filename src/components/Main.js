import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Blog from './Blog'
import Resume from './Resume'
import Homepage from './Homepage';
import AboutMe from './AboutMe';

const Main = () => {
    return (
            <Switch>
                <Route exact path='/' component={Homepage}></Route>
                <Route exact path='/aboutme' component={AboutMe}></Route>
                <Route exact path ='/resume' component={Resume}></Route>
                <Route exact path ='/blog' component={Blog}></Route>
            </Switch>
    );
}

export default Main