import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Avatar } from 'CommonComponents';

import './header-style';

class Header extends Component {
  static propTypes = {
    signOutHandler: PropTypes.func,
    userData: PropTypes.object,
  };

  static gotoSignUpPage = () => {
    window.location.href = '/users/sign_up';
  };

  static gotoLoginPage = () => {
    window.location.href = '/users/sign_in';
  };

  render() {
    const { signOutHandler, userData } = this.props;

    return (
      <div className="header">
        <Link className="header__logo" to={'/'}>
          <span className="header__image" />
        </Link>

        {userData.authenticated ? (
          <div className="header__action-btn">
            <Avatar signOutHandler={signOutHandler} />
          </div>
        ) : (
          <div className="header__action-btn">
            <div className="header__btn" onClick={this.constructor.gotoSignUpPage}>Signup</div>
            <div className="header__btn" onClick={this.constructor.gotoLoginPage}>Login</div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
