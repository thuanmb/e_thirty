import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import store, { history } from 'CorePath/store';
import { CLEAR_SEARCH_RESULTS } from 'ReducersPath/search-results-reducer';
import Header from './header';
import { fetchSearchedArticles } from '../search-result/search-result-actions';

class HeaderContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    fetchSearchedArticlesDispatcher: PropTypes.func,
  };

  static submitSignOut() {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then(() => {
      window.location.href = 'users/sign_in';
    });
  }

  handleSearch(query) {
    store.dispatch({
      type: CLEAR_SEARCH_RESULTS,
    });

    this.props.fetchSearchedArticlesDispatcher(1, query);

    history.push(`/search-results/${query}`);
  }

  render() {
    return (
      <Header
        userData={this.props.user}
        signOutHandler={() => this.constructor.submitSignOut()}
        handleSearch={(query) => this.handleSearch(query)}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, {
  fetchSearchedArticlesDispatcher: fetchSearchedArticles,
})(HeaderContainer);
