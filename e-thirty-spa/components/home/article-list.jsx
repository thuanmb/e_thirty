import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from 'CommonComponents';
import ArticleItem from './article-item';
import { fetchArticles } from './home-actions';

class ArticleList extends PureComponent {
  static propTypes = {
    articles: PropTypes.array,
    fetchArticlesDispatcher: PropTypes.func,
  };

  loadMoreArticles(page) {
    this.props.fetchArticlesDispatcher(page);
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="col-xs-8 col-xs-offset-2 home__feed-container">
        <InfiniteScroll
          pageStart={1}
          loadMore={(page) => { this.loadMoreArticles(page); }}
          hasMore={!(articles.length === 0)}
          loader={<Spinner className="small" />}
        >
          {articles.map((data) => (
            <ArticleItem data={data} key={`articles-item-${data.id}`} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default connect(null, {
  fetchArticlesDispatcher: fetchArticles,
})(ArticleList);
