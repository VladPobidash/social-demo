import React from "react";
import s from './Notes.module.scss';
import {FirebaseState} from "./context/firebase/FirebaseState";
import {AlertState} from "./context/alert/AlertState";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Notes = (props) => {
    return (
            <FirebaseState>
                <AlertState>
                    <BrowserRouter>
                        <Navbar/>
                        <div className='container pt-4'>
                            <Alert/>
                            <Switch>
                                <Route path={'/'} exact component={Home}/>
                                <Route path={'/about'} exact component={About}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </AlertState>
            </FirebaseState>
    );
}

export default compose(
    withAuthRedirect
)(Notes)