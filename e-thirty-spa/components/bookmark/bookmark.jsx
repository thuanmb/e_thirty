import React, { PropTypes, PureComponent } from 'react';
import { Spinner } from 'CommonComponents';
import { connect } from 'react-redux';
import { fetchMyFavouriteArticles } from './bookmark-actions';
import ArticleList from '../article/article-list';

class Bookmark extends PureComponent {
  static propTypes = {
    allArticles: PropTypes.object,
    articles: PropTypes.object,
    fetchMyFavouriteArticlesDispatcher: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchMyFavouriteArticlesDispatcher();
  }

  render() {
    const { allArticles, articles: { isLoading, allIds: articleIds, hasMore }, fetchMyFavouriteArticlesDispatcher } = this.props;

    return (
      <div className="home container-fluid">
        <div className="row m-t-20">
          {isLoading && articleIds.length === 0 ? (
            <Spinner />
          ) : (
            articleIds.length === 0 ? (
              <div className="col-xs-8 col-xs-offset-2 home__feed-container text-center">
                <h3>You have no favourite articles yet.</h3>
              </div>
            ) : (
              <ArticleList articles={allArticles} articleIds={articleIds} hasMore={hasMore} fetchArticlesDispatcher={fetchMyFavouriteArticlesDispatcher} />
            )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { articles: { byIds: allArticles }, bookmarks: articles } }) => ({
  allArticles,
  articles,
});

export default connect(mapStateToProps, {
  fetchMyFavouriteArticlesDispatcher: fetchMyFavouriteArticles,
})(Bookmark);
