class UserDecorator < ApplicationDecorator
  decorates User

  def favourite_articles
    Article.joins("INNER JOIN bookmarks ON bookmarks.user_id = #{source.id}")
  end
end