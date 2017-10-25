class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.text :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :claps

      t.timestamps
    end

    add_index :posts, :title
    add_index :posts, :author_id
  end
end
