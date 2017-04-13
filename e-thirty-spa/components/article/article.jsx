import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import './article-style';

const Article = ({ params, articles }) => {
  const id = params.id;
  const {
    title,
    subtitle,
    imageUrl,
    content,
    publishedAt } = articles[id];

  return (
    <article className="post-article col-xs-12 col-sm-12 col-md-8 col-lg-8 box-view col-md-offset-2 col-lg-offset-2">
      <header className="float-right">
        <span className="post-author">Jane Hurst</span>
        <span className="post-date">
          ,
          <Moment className="m-l-3" format="DD MMM, YYYY">{publishedAt}</Moment>
        </span>
      </header>

      <h1 className="post-title m-t-40">{title}</h1>
      <h2 className="post-subtitle">{subtitle}</h2>

      <div className="post-content">
        <img className="full-image" src={imageUrl} alt="" />
        <div className="m-t-20" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
};

Article.propTypes = {
  params: PropTypes.object,
  articles: PropTypes.object,
};

const mapStateToProps = ({ entities: { articles: { byIds } } }) => ({
  articles: byIds,
});

export default connect(mapStateToProps)(Article);
