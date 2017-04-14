import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import Header from './header';

class HeaderContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  static submitSignOut() {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then(() => {
      window.location.href = 'users/sign_in';
    });
  }

  static handleSearch(query) {
    window.console.log(query);
  }

  render() {
    return (
      <Header
        userData={this.props.user}
        signOutHandler={() => this.constructor.submitSignOut()}
        handleSearch={(query) => this.constructor.handleSearch(query)}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(HeaderContainer);
