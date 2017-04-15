import React, { PropTypes, PureComponent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from 'CommonComponents';
import ArticleItem from './article-item';

class ArticleList extends PureComponent {
  static propTypes = {
    articles: PropTypes.object,
    articleIds: PropTypes.array,
    fetchArticlesDispatcher: PropTypes.func,
    hasMore: PropTypes.bool,
    query: PropTypes.string,
    children: PropTypes.object,
  };

  loadMoreArticles(page, query) {
    this.props.fetchArticlesDispatcher(page, query);
  }

  render() {
    const { articles, articleIds, hasMore, query, children } = this.props;

    return (
      <div className="col-xs-8 col-xs-offset-2 home__feed-container">
        {children}
        <InfiniteScroll
          pageStart={1}
          loadMore={(page) => { this.loadMoreArticles(page, query); }}
          hasMore={hasMore}
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

export default ArticleList;
