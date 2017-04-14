module Queries
  class ArticleQuery
    def self.query(page_index, per_page, query_param = nil)
      articles = Article

      if query_param
        articles = articles.search(query_param)
      end

      articles.order(published_at: :desc).page(page_index).per(per_page)
    end
  end
end