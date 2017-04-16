import React, { PropTypes, PureComponent } from 'react';
import { Spinner } from 'CommonComponents';
import { connect } from 'react-redux';
import { fetchSearchedArticles } from './search-result-actions';
import ArticleList from '../article/article-list';

class SearchResult extends PureComponent {
  static propTypes = {
    params: PropTypes.object,
    allArticles: PropTypes.object,
    articles: PropTypes.object,
    fetchSearchedArticlesDispatcher: PropTypes.func,
  };

  componentDidMount() {
    const {
      articles: { isLoading },
      fetchSearchedArticlesDispatcher,
      params: { query },
    } = this.props;

    if (!isLoading) {
      fetchSearchedArticlesDispatcher(1, query);
    }
  }

  render() {
    const {
      allArticles,
      articles: { isLoading, allIds: articleIds, hasMore },
      fetchSearchedArticlesDispatcher,
      params: { query },
    } = this.props;

    return (
      <div className="home container-fluid">
        <div className="row m-t-20">
          {isLoading && articleIds.length === 0 ? (
            <Spinner />
          ) : (
            articleIds.length === 0 ? (
              <div className="col-xs-8 col-xs-offset-2 home__feed-container text-center">
                <h3>No articles found.</h3>
              </div>
            ) : (
              <ArticleList
                articles={allArticles}
                articleIds={articleIds}
                hasMore={hasMore}
                fetchArticlesDispatcher={fetchSearchedArticlesDispatcher}
                query={query}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { articles: { byIds: allArticles }, searchResults: articles } }) => ({
  allArticles,
  articles,
});

export default connect(mapStateToProps, {
  fetchSearchedArticlesDispatcher: fetchSearchedArticles,
})(SearchResult);
