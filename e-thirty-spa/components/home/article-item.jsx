import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';

const ArticleItem = ({ data }) => {
  const {
    id,
    title,
    subtitle,
    imageUrl,
    publishedAt } = data;
  const link = `articles/${id}`;

  return (
    <div className="row home__feed home__feed-article" key={`article-item-${id}`} >
      <div className="col-md-4 home__feed__media">
        <Link to={link}>
          <img src={imageUrl} alt="" />
        </Link>
      </div>
      <div className="col-md-8 home__feed__content">
        <Link to={link}>
          <h3>{title}</h3>
        </Link>
        <h4>{subtitle}</h4>
        <div className="home__feed__misc-left">
          <i className="material-icons">query_builder</i>
          <Moment fromNow>{publishedAt}</Moment>
        </div>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  data: PropTypes.object,
};

export default ArticleItem;
