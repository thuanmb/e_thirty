class BookmarkPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    @record.user.id == @user.id
  end
end