import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader({ authId, search, signOut }) {
  return (
    // <div className="tabs">
      <div className="columns">
        <div className="column">
          <h3 className="logo">Varcity</h3>
          <Link to="/">
            <i className="fa fa-home fa-2x" />
          </Link>
        </div>
        <div className="column">
          <form
            onSubmit={event => {
              event.preventDefault();
              const form = event.target;
              const { searchValue } = form.elements;
              search({
                payload: { payload: searchValue.value }
              });
              form.reset();
            }}>
            <div className="control has-icons-left">
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
          </form>
        </div>

        <div className="column">
          <Link to="/about">About</Link>
        </div>

        <div className="column">
          <Link to={`/athletes/${authId}`}>My Profile</Link>
        </div>

        <div className="column">
          {authId &&
          Object.entries(authId).length !== 0 && (
            <div>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  const form = event.target;
                  signOut({
                    payload: { payload: null }
                  });
                  form.reset();
                }}>
                <button
                  className="button is-primary is-outlined"
                  type="submit"
                  name="submit">
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    // </div>

    /*{ <ul>
        <li>
          <Link to="/">
            <i className="fa fa-home fa-2x" />
          </Link>
        </li>
        <li />
        <li>
          <Link to="/about">About</Link>
        </li>

        <li />
        <li />
      </ul> }*/
    // </div>
  );
}
