import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from 'CommonComponents';
import ArticleItem from './article-item';
import { fetchArticles } from './home-actions';

class ArticleList extends PureComponent {
  static propTypes = {
    articles: PropTypes.object,
    articleIds: PropTypes.array,
    fetchArticlesDispatcher: PropTypes.func,
  };

  loadMoreArticles(page) {
    this.props.fetchArticlesDispatcher(page);
  }

  render() {
    const { articles, articleIds } = this.props;

    return (
      <div className="col-xs-8 col-xs-offset-2 home__feed-container">
        <InfiniteScroll
          pageStart={1}
          loadMore={(page) => { this.loadMoreArticles(page); }}
          hasMore={!(articleIds.length === 0)}
          loader={<Spinner className="small" />}
          threshold={500}
        >
          {articleIds.map((articleId) => (
            <ArticleItem data={articles[articleId]} key={`articles-item-${articleId}`} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { articles: { byIds } } }) => ({
  articles: byIds,
});

export default connect(mapStateToProps, {
  fetchArticlesDispatcher: fetchArticles,
})(ArticleList);
