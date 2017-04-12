class Api::V1::ArticlesController < Api::V1::BaseController
  skip_before_filter :authenticate!

  DEFAULT_PAGE = 1
  DEFAULT_PER_PAGE = 10

  def index
    skip_authorization

    page = if params.include?(:page)
             params.fetch(:page)
           else
             DEFAULT_PAGE
           end

    per_page = if params.include?(:per_page)
             params.fetch(:per_page)
           else
             DEFAULT_PER_PAGE
           end
    articles = Queries::ArticleQuery.query(page, per_page)
    api_respond_ok(data: articles)
  end
end