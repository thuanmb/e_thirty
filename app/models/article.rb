class Article < ActiveRecord::Base
  extend Scopes

  belongs_to :user
end
