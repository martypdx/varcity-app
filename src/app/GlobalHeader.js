import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader({ authId, search, signOut }) {
  return (

    <div className="tabs">
      <div>
        <div>
          <ul>
            <li>
              <h3 className="logo">Varcity</h3>
            </li>
            <li>
              <Link to="/"><i className="fa fa-home fa-2x"></i></Link>
            </li>
            <li>
              <div className="control has-icons-left">
                <input className="input" placeholder="Search" />
                <span className="icon is-small is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>

            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>

              <Link to={`/athletes/${authId}`}>My Profile</Link>
            </li>
            <li>
              <div>
                {
                  (authId && Object.entries(authId).length !== 0) &&
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
                      <button className="button is-primary is-outlined" type="submit" name="submit">Logout</button>
                    </form>
                  </div>
                }
              </div>
            </li>
          </ul>
        </div>
      </div>

      <ul>
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
      </ul>
    </div>
  );
}
