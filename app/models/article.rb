require 'carrierwave/orm/activerecord'

class Article < ActiveRecord::Base
  extend Scopes
  mount_uploader :cover_image, ImageUploader

  belongs_to :user
end
