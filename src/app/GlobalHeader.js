import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../search/Card';
import { connect } from 'react-redux';
import Search from '../search/Search';
import {withRouter} from 'react-router-dom'


export function GlobalHeader({
  authId,
  searcher,
  search,
  signOut,
  signIn,
  gotResults,
  history
}) {
  const headerStyle = {
    marginBottom: 20,
    borderBottom: '1px solid lightgrey'
  };

  const columns = {
    marginBottom: 6
  }

  return (
    <div style={headerStyle}>
      <div>
        {authId &&
        Object.entries(authId).length !== 0 && (
          <div className="columns" style={columns}>
            <div className="column is-2">
              <Link to="/">
                <h3 className="logo">Varcity</h3>
                <i className="fa fa-home fa-2x" />
              </Link>
              <Link to="/about">About</Link>
            </div>
            <div className="column is-8">
              <form
                onSubmit={event => {
                  event.preventDefault();
                  const form = event.target;
                  const searchValue = form.elements[0].value;
                  console.log(12, form.elements[0].value);
                  searcher({
                    payload: { searchValue: searchValue, authId: authId }
                  });
                  form.reset();
                  history.push('/search');
                }}>
                <div className="field has-addons">
                  <div className="control has-icons-left is-expanded">
                    <input className="input" placeholder="Search" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                  <button
                    className="button is-primary is-outlined"
                    type="submit"
                    name="submit">
                    Search{' '}
                  </button>
                </div>
              </form>
            </div>

            <div className="column is-2">
              <form
                onSubmit={event => {
                  event.preventDefault();
                  const form = event.target;
                  signOut({
                    payload: { payload: null }
                  });
                  form.reset();
                }}>
                <div className="field">
                  <button
                    className="button is-primary is-outlined"
                    type="submit"
                    name="submit">
                    Logout
                  </button>
                </div>
              </form>

              <div>
                <Link to={`/athletes/${authId}`}>My Profile</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {!authId && (
          <div className="columns level">
            <div className="column is-8 level-left">
              <Link to="/">
                <h3 className="logo">Varcity</h3>
                <i className="fa fa-home fa-2x" />
              </Link>
              <Link to="/about">About</Link>
            </div>

            <div className="column is-4 level-right">
              <p className="field-is-grouped-right level-item">
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
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        name="email"
                        placeholder="email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <button
                      className="button is-primary is-outlined"
                      type="submit"
                      name="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authId: state.authId
    };
};

export default withRouter(connect(mapStateToProps, null)(GlobalHeader));
