import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route, Link,Switch} from 'react-router-dom';
import Albums from './components/albums/albums';
import Users from './components/users/users';
import Posts from './components/posts/posts';
import Photos from './components/photos/photos';
import Home from './components/home/home';

class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/albums">Albums</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">Posts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/photos">Photos</Link>
                                </li>
                            </ul>
                        </div>

                    </nav>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/albums' exact component={Albums} />
                        <Route path='/users' exact component={Users}/>
                        <Route path='/posts' exact component={Posts}/>
                        <Route path='/photos' exact component={Photos}/>
                    </Switch>


                </div>
            </BrowserRouter>



        );
    }
}

export default App;
