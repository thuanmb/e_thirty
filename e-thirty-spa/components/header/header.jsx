import React, { PropTypes, Component } from 'react';
import { Avatar } from 'CommonComponents';
import { FormGroup, FormControl } from 'react-bootstrap';

import './header-style';

class Header extends Component {
  static propTypes = {
    signOutHandler: PropTypes.func,
    userData: PropTypes.object,
    handleSearch: PropTypes.func,
  };

  static gotoSignUpPage = () => {
    window.location.href = '/users/sign_up';
  };

  static gotoLoginPage = () => {
    window.location.href = '/users/sign_in';
  };

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e) {
    const { handleSearch } = this.props;
    const { searchValue } = this.state;
    e.preventDefault();
    handleSearch(searchValue);
  }

  render() {
    const { signOutHandler, userData } = this.props;
    const { searchValue } = this.state;

    return (
      <div className="header">
        <a className="header__logo" href={'/'}>
          <span className="header__image" />
        </a>

        <div className={`header__action-btn ${userData.authenticated ? 'hasAvatar' : ''}`}>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <FormGroup controlId="searchArticle" >
              <FormControl
                type="text"
                value={searchValue}
                placeholder="Search for articles..."
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
          </form>

          {userData.authenticated ? (
            <Avatar signOutHandler={signOutHandler} />
          ) : (
            <span>
              <div className="header__btn" onClick={this.constructor.gotoSignUpPage}>Signup</div>
              <div className="header__btn" onClick={this.constructor.gotoLoginPage}>Login</div>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
