class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :subtitle
      t.text :content
      t.string :cover_image
      t.datetime :published_at
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
