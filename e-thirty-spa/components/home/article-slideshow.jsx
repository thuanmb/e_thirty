import React, { PropTypes, Component } from 'react';

import './article-slideshow-style';

class ArticleSlideShow extends Component {
  static propTypes = {
    articles: PropTypes.array,
  };

  constructor() {
    super();
    this.state = { activeIndex: 0 };
  }

  jumpToSlide(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div className="slideshow col-md-10 col-md-offset-1 col-sm-12">
        <ul className="slideshow-slides">
          {
            this.props.articles.map((article, index) => (
              <li className={index === this.state.activeIndex ? 'active' : ''} key={`slideshow-item-${index}`}>
                <figure>
                  <img src={article.imageUrl} alt="" />
                  <figcaption>
                    <div className="post-title">{article.title}</div>
                    <div className="post-subtitle">{article.subtitle}</div>
                  </figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
        <ul className="slideshow-dots">
          {
            this.props.articles.map((slide, index) => (
              <li className={index === this.state.activeIndex ? 'active' : ''} key={`slideshow-item-${index}`}>
                <a onClick={() => this.jumpToSlide(index)}>{ index + 1 }</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ArticleSlideShow;
