import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Button from 'react-bootstrap-button-loader';
import { bookmark } from 'Api';

import './article-style';

class Article extends Component {
  static propTypes = {
    params: PropTypes.object,
    articles: PropTypes.object,
    userAuthenticated: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      requestingBookmark: false,
      bookmarkCreated: false,
    };
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
    const { params: { id }, articles, userAuthenticated } = this.props;
    const {
      title,
      subtitle,
      imageUrl,
      content,
      publishedAt,
      bookmarked } = articles[id];
    const { requestingBookmark, bookmarkCreated } = this.state;

    return (
      <article className="post-article col-xs-12 col-sm-12 col-md-8 col-lg-8 box-view col-md-offset-2 col-lg-offset-2">
        <header className="float-right">
          <span className="post-author">Jane Hurst</span>
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
          <div className="m-t-40 float-right">
            <Button bsStyle="warning" onClick={() => this.addToMyFavourite()} loading={requestingBookmark} disabled={bookmarkCreated || bookmarked} >
              {this.getAddToFavouriteCopy(bookmarked)}
            </Button>
          </div>
        )}
      </article>
    );
  }
}

const mapStateToProps = ({ user: { authenticated: userAuthenticated }, entities: { articles: { byIds } } }) => ({
  userAuthenticated,
  articles: byIds,
});

export default connect(mapStateToProps)(Article);
