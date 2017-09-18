import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from './Home';
import SearchContainer from '../search/SearchContainer';
import MediaContainer from '../media/MediaContainer';
import ProfileContainer from './ProfileContainer';
import { signIn, signUp, httpCallback } from './actions';

export function GlobalHeader({ authorized }) {
  console.log(authorized)
  return (
    <Router>
      <div>
        <div>Global header!{authorized}</div>
        <div>
          <div>{authorized}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><input placeholder="search" /></li>
              <li><Link to="/athletes">Search</Link></li>
              <li><Link to="/athletes/:id">Profile</Link></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={MediaContainer} />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/athletes" component={SearchContainer} />
            <Route exact path="/athletes/:id" component={ProfileContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     id: state.id,
//     value: 'myvalue',
//     authorized: state.authorized
//     };
// };

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password));
    },
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    },
    httpCallback: value => {
      dispatch(httpCallback(value));
    }
  };
}

 const mapStateToProps = (state) => {
  return {
    id: state.id,
    value: 'myvalue',
    authorized: state.authorized
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);

