import React, { PropTypes, PureComponent } from 'react';
import { Spinner } from 'CommonComponents';
import { connect } from 'react-redux';
import { fetchArticles } from './home-actions';
import ArticleList from './article-list';

import './home-style';

class Home extends PureComponent {
  static propTypes = {
    articles: PropTypes.object,
    fetchArticlesDispatcher: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchArticlesDispatcher();
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="home container-fluid">
        <div className="row m-t-20">
          {articles.isLoading && articles.byIds.length === 0 ? (
            <Spinner />
          ) : (
            <ArticleList articleIds={articles.allIds} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { articles } }) => ({
  articles,
});

export default connect(mapStateToProps, {
  fetchArticlesDispatcher: fetchArticles,
})(Home);
