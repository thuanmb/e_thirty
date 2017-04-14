import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
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
        <Link className="header__logo" to={'/'}>
          <span className="header__image" />
        </Link>

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
