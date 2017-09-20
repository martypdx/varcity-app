import React from 'react';
import PropTypes from 'prop-types';
import { signIn, signUp } from './actions';
import { connect } from 'react-redux';

export function Home({signIn, signUp}) {

  Home.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func,
    signIn: PropTypes.func
  };

  return (
    <div>
      <div className="content">
        <h1 className="title">Varcity Network</h1>
        <p className="subtitle">Connecting student athletes to success.</p>
        <h3>Join Now! It's Free!</h3>
      </div>
      <div>
        <div> Sign Up </div>
        <form
          onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            const { email, password } = form.elements;
            signUp({
              payload: { email: email.value, password: password.value }
            });
            form.reset();
          }}>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" name="email" placeholder="email" />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="password" name="password" placeholder="password" />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <button className="button is-primary is-outlined" type="submit" name="submit">Sign Up</button>
        </form>

        <div> Sign In </div>
        <form
          onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            const { email, password } = form.elements;
            signIn({
              payload: { email: email.value, password: password.value }
            });
            form.reset();
          }}>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" name="email" placeholder="email" />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="password" name="password" placeholder="password" />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <button className="button is-primary is-outlined" type="submit" name="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password));
    },
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    }
  };
}

function mapStateToProps(state) {
  return {
    id: state.id,
    authorized: state.authorized
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
