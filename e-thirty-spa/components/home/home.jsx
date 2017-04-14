import React, { PropTypes, PureComponent } from 'react';
import { Spinner } from 'CommonComponents';
import { connect } from 'react-redux';
import { fetchArticles } from './home-actions';
import ArticleList from '../article/article-list';

class Home extends PureComponent {
  static propTypes = {
    articles: PropTypes.object,
    fetchArticlesDispatcher: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchArticlesDispatcher();
  }

  render() {
    const { articles: { isLoading, byIds: allArticles, allIds: articleIds, hasMore }, fetchArticlesDispatcher } = this.props;

    return (
      <div className="home container-fluid">
        <div className="row m-t-20">
          {isLoading && allArticles.length === 0 ? (
            <Spinner />
          ) : (
            <ArticleList articles={allArticles} articleIds={articleIds} hasMore={hasMore} fetchArticlesDispatcher={fetchArticlesDispatcher} />
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
