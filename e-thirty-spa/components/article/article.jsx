import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Button from 'react-bootstrap-button-loader';
import { bookmark } from 'Api';
import { Spinner } from 'CommonComponents';
import { getFullName } from 'CorePath/utils';
import { getArticle } from './article-actions';

import './article-style';

class Article extends Component {
  static propTypes = {
    params: PropTypes.object,
    articles: PropTypes.object,
    userAuthenticated: PropTypes.bool,
    getArticleDispatcher: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      requestingBookmark: false,
      bookmarkCreated: false,
    };
  }

  componentDidMount() {
    const { params: { id }, articles, getArticleDispatcher } = this.props;

    if (!articles[id]) {
      getArticleDispatcher(id);
    }
  }

  getAddToFavouriteCopy(bookmarked) {
    const { requestingBookmark, bookmarkCreated } = this.state;
    if (bookmarked || bookmarkCreated) {
      return 'Added to your favourite';
    } else if (requestingBookmark) {
      return 'Adding to your favourite';
    }

    return 'Add to your favourite';
  }

  addToMyFavourite() {
    this.setState({
      requestingBookmark: true,
    });

    bookmark(this.props.params.id).then(() => this.setState({
      requestingBookmark: false,
      bookmarkCreated: true,
    }));
  }

  render() {
    const { params: { id }, articles: { isLoading, byIds: allArticles, usersByIds }, userAuthenticated } = this.props;
    const article = allArticles[id] || {};
    const {
      title = '',
      subtitle = '',
      imageUrl = '',
      content = '',
      publishedAt = '',
      bookmarked = false,
      user,
    } = article;
    const author = usersByIds[user] || {};

    const { requestingBookmark, bookmarkCreated } = this.state;

    return (
      <article className="post-article col-xs-12 col-sm-12 col-md-8 col-lg-8 box-view col-md-offset-2 col-lg-offset-2">
        {isLoading ? (
          <Spinner />
        ) : (
          <span>
            <header className="float-right">
              <span className="post-author">{getFullName(author)}</span>
              <span className="post-date">
                ,
                <Moment className="m-l-3" format="DD MMM, YYYY">{publishedAt}</Moment>
              </span>
            </header>

            <h1 className="post-title m-t-60">{title}</h1>
            <h2 className="post-subtitle">{subtitle}</h2>

            <div className="post-content">
              <img className="full-image m-t-20" src={imageUrl} alt="" />
              <div className="m-t-40" dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {userAuthenticated && (
              <div className="m-t-40 text-right p-t-20 b-grey-t">
                <Button className="btn-no-outline" onClick={() => this.addToMyFavourite()} loading={requestingBookmark} disabled={bookmarkCreated || bookmarked} >
                  <i className="material-icons">add</i>
                  <span>{this.getAddToFavouriteCopy(bookmarked)}</span>
                </Button>
              </div>
            )}
          </span>
        )}
      </article>
    );
  }
}

const mapStateToProps = ({ user: { authenticated: userAuthenticated }, entities: { articles } }) => ({
  userAuthenticated,
  articles,
});

export default connect(mapStateToProps, {
  getArticleDispatcher: getArticle,
})(Article);
