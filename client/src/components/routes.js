import React from 'react';
import  Home  from './Homepage/Homepage';
import  AboutUs  from './AboutUs/AboutUs';
import  ContactUs  from './Contact-Us/ContactUs';
import  MemberBlock  from './CommitteeMembers/MemberBlock';
import  NavBar  from './Navbar/RightNav';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
export function Routes() {
    return (
        <div>
            <NavBar/>
                <Router>
            <Switch>
                <Route exact path="/Homepage" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/AboutUs" component={AboutUs} />
               
                <Route exact path="/ContactUs" component={ContactUs} /> 
                <Route exact path="/MemberBlock" component={MemberBlock} /> 
            </Switch>
            </Router>
        </div>
    );
} 