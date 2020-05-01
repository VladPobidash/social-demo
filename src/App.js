import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store from './redux/redux-store';
import {withSuspense} from "./hoc/withSuspense";
import Games from "./components/Games/Games";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const Notes = React.lazy(() => import("./components/Notes/Notes"));


class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some errors ocrured");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/profile"} /> }/>
                            <Route path='/profile/:userId?'
                                   render={withSuspense(ProfileContainer) }/>
                            <Route path='/dialogs'
                                   render={withSuspense(DialogsContainer) } />
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/notes'
                                   render={withSuspense(Notes) } />
                            <Route path='/games' component={Games}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            {/*<Route path='/friends'*/}
                            {/*       render={() => <FriendsContainer/>}/>*/}
                            <Route path={'/Login'} render={() => <LoginPage/>}/>
                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>} />
                        </Switch>
                    </div>
                </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
