import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Info from '../info/Info';
import SportsContainer from '../sports/SportsContainer';
import EduContainer from '../edu/EduContainer';
import MediaContainer from '../media/MediaContainer';

class ProfileContainer extends Component {

  render() {
    const id = this.props.location.pathname.split('/athletes/')[1];
    console.log(3, id);
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={`/athletes/${id}`}>Info</Link></li>
            <li><Link to={`/athletes/${id}/sports`}>Sports</Link></li>
            <li><Link to={`/athletes/${id}/edu`}>Education</Link></li>
            <li><Link to={`/athletes/${id}/media`}>Media</Link></li>
          </ul>
          <Switch>
            <Route path={`/athletes/${id}`} component={Info} />
            <Route path={`/athletes/${id}/sports`} component={SportsContainer} />
            <Route path={`/athletes/${id}/edu`} component={EduContainer} />
            <Route path={`/athletes/${id}/media`} component={MediaContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(state => ({ id: state.id, authorization: state.authorization }), null)(ProfileContainer);

