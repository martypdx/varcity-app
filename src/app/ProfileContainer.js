import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import SportsContainer from '../sports/SportsContainer';
import InfoContainer from '../info/InfoContainer';
import EduPages from '../edu/EduPages';
import Awards from '../profile/awards/Awards';
import MediaGallery from '../media/MediaGallery';
import Connections from '../profile/connections/Connections';
import RatingsContainer from '../profile/ratings/RatingsContainer';
import Calendar from '../profile/events/Calendar';
import FeedContainer from '../profile/feed/FeedContainer';

class ProfileContainer extends Component {
  render() {

    const id = this.props.match.params.id;
    // const id = this.props.id;
    // const id = this.props.location.pathname.split('/athletes/')[1];
    const tabs = {
      marginTop:2
    };

    return (
      <div>
        <div style={tabs} className="tabs is-centered is-medium">
          <ul>
            <li><Link to={`/athletes/${id}`}>Info</Link></li>
            <li><Link to={`/athletes/${id}/sports`}>Sports</Link></li>
            <li><Link to={`/athletes/${id}/edu`}>Education</Link></li>
            <li><Link to={`/athletes/${id}/awards`}>Awards</Link></li>
            <li><Link to={`/athletes/${id}/media`}>Media</Link></li>
            <li><Link to={`/athletes/${id}/ratings`}>Ratings</Link></li>
            <li><Link to={`/athletes/${id}/connections`}>Connections</Link></li>
            <li><Link to={`/athletes/${id}/schedule`}>Schedule</Link></li>
            <li><Link to={`/athletes/${id}/feed`}>Feed</Link></li>
          </ul>
        </div>

        <Switch>
          <div className="columns main-container">
            <div className="column"></div>
            <div className="column is-two-thirds">
              <Route exact path="/athletes/:id" component={InfoContainer} />
              <Route path="/athletes/:id/sports" component={SportsContainer} />
              <Route path="/athletes/:id/edu" component={EduPages} />
              <Route path="/athletes/:id/media" component={MediaGallery} />
              <Route path="/athletes/:id/awards" component={Awards} />
              <Route path="/athletes/:id/ratings" component={RatingsContainer} />
              <Route path="/athletes/:id/connections" component={Connections} />
              <Route path="/athletes/:id/schedule" component={Calendar} />
              <Route path="/athletes/:id/feed" component={FeedContainer} />
            </div>
            <div className="column" />
          </div>
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ id: state.id }),
  null
)(ProfileContainer);