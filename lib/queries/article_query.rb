module Queries
  class ArticleQuery
    def self.query(page_index, per_page)
      Article.page(page_index).per(per_page)
    end
  end
end