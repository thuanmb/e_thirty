class Api::V1::ArticlesController < Api::V1::BaseController
  include Pagination

  skip_before_filter :authenticate!

  def index
    skip_authorization
    articles = Queries::ArticleQuery.query(page, per_page)

    api_respond_ok(data: ArticleRepresenter.for_collection.prepare(
      ArticleDecorator.decorate_collection(articles, context: { current_user: current_user }))
    )
  end
end