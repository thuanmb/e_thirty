import React, { PropTypes, PureComponent } from 'react';
import { Spinner } from 'CommonComponents';
import { connect } from 'react-redux';
import { fetchMyFavouriteArticles } from './bookmark-actions';
import ArticleList from '../article/article-list';

class Bookmark extends PureComponent {
  static propTypes = {
    articles: PropTypes.object,
    fetchMyFavouriteArticlesDispatcher: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchMyFavouriteArticlesDispatcher();
  }

  render() {
    const { articles: { isLoading, byIds: allArticles, allIds: articleIds, hasMore }, fetchMyFavouriteArticlesDispatcher } = this.props;

    return (
      <div className="home container-fluid">
        <h2>Favourite articles</h2>
        <div className="row m-t-20">
          {isLoading && allArticles.length === 0 ? (
            <Spinner />
          ) : (
            <ArticleList articles={allArticles} articleIds={articleIds} hasMore={hasMore} fetchArticlesDispatcher={fetchMyFavouriteArticlesDispatcher} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { bookmarks: articles } }) => ({
  articles,
});

export default connect(mapStateToProps, {
  fetchMyFavouriteArticlesDispatcher: fetchMyFavouriteArticles,
})(Bookmark);
