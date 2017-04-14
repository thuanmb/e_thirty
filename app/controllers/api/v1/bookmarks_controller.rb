class Api::V1::BookmarksController < Api::V1::BaseController
  include Pagination

  def index
    authorize Bookmark
    bookmarks = Queries::BookmarkQuery.query(current_user.id, page, per_page)
    articles = bookmarks.map(&:article)
    api_respond_ok(data: ArticleRepresenter.for_collection.prepare(
      ArticleDecorator.decorate_collection(articles, context: { current_user: current_user }))
    )
  end

  def create
    bookmark_schema = BookmarkSchema.create(params.merge(user_id: current_user.id))
    bookmark = Bookmark.create(bookmark_schema)

    authorize bookmark

    api_respond_ok(data: bookmark)
  end
end