module Queries
  class BookmarkQuery
    def self.query(user_id, page_index, per_page)
      Bookmark.where(user_id: user_id).order(created_at: :desc).page(page_index).per(per_page)
    end
  end
end