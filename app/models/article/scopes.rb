class Article < ActiveRecord::Base
  module Scopes
    def search(query)
      where("title like ? OR concat(COALESCE(subtitle,''),' ',COALESCE(content,'')) like ?", "%#{query}%", "%#{query}%")
    end

    def published
      where.not(published_at: nil)
    end
  end
end
