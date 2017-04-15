class Api::V1::ArticlesController < Api::V1::BaseController
  include Pagination

  skip_before_filter :authenticate!

  def index
    skip_authorization
    articles = Queries::ArticleQuery.query(page, per_page, query_param)

    api_respond_ok(
      data: ArticleRepresenter.for_collection.prepare(
        ArticleDecorator.decorate_collection(articles, context: { current_user: current_user }))
    )
  end

  private

  def query_param
    params.require(:query) if params.include?(:query)
  end
end