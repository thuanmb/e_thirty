module Queries
  class ArticleQuery
    def self.query(page_index, per_page)
      Article.order(published_at: :desc).page(page_index).per(per_page)
    end
  end
end