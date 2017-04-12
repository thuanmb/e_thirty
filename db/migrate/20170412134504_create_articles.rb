class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :subtitle
      t.text :content
      t.text :image_url
      t.datetime :published_at

      t.timestamps null: false
    end
  end
end
