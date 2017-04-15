class Api::V1::ArticlesController < Api::V1::BaseController
  include Pagination

  skip_before_filter :authenticate!
  before_filter :find_article, only: [:show]

  def index
    skip_authorization
    articles = Queries::ArticleQuery.query(page, per_page, query_param)

    api_respond_ok(
      data: ArticleRepresenter.for_collection.prepare(
        ArticleDecorator.decorate_collection(articles, context: { current_user: current_user }))
    )
  end

  def show
    authorize @article

    api_respond_ok(
        data: ArticleRepresenter.prepare(
            ArticleDecorator.decorate(@article, context: { current_user: current_user }))
    )
  end

  private

  def query_param
    params.require(:query) if params.include?(:query)
  end

  def find_article
    @article = Article.find(params.require(:id))
  end
end