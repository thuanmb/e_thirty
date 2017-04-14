class ArticleDecorator < ApplicationDecorator
  decorates Article

  def bookmarked
    current_user && Bookmark.where(article_id: source.id, user_id: current_user.id).present?
  end

  private

  def current_user
    context[:current_user]
  end
end