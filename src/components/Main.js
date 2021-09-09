import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Blog from '../components/Blog/Blog'
import Resume from './Resume'
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import FirstEntry from './Blog/First_Entry'

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage}></Route>
                <Route exact path='/aboutme' component={AboutMe}></Route>
                <Route exact path ='/resume' component={Resume}></Route>
                <Route exact path ='/blog' component={Blog}></Route>
                <Route exact path ='/first_entry' component={FirstEntry}></Route>
            </Switch>
        </Router>
    );
}

export default Main