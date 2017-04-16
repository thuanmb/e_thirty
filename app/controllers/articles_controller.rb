class ArticlesController < AuthenticationController
  def new
    authorize Article
    @article = Article.new
  end

  def create
    article_schema = ArticleSchema.create(params)
    article_params = article_schema[:article]
    article = Article.new(article_params)

    authorize article

    article.user = current_user
    if params.require(:article).fetch(:published_at) == 'true'
      article.published_at = Time.current
    end

    if article.save
      redirect_to "/articles/#{article.id}"
    else
      flash[:error] = article.errors.full_messages.join(', ')
      render 'new'
    end
  end
end
