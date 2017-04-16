class ArticlePolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def new?
    user.is_admin?
  end

  def create?
    user.is_admin?
  end
end