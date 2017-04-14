class Api::V1::BookmarksController < Api::V1::BaseController

  def create
    bookmark_schema = BookmarkSchema.create(params.merge(user_id: current_user.id))
    bookmark = Bookmark.create(bookmark_schema)

    authorize bookmark

    api_respond_ok(data: bookmark)
  end
end