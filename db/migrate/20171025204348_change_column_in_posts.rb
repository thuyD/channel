class ChangeColumnInPosts < ActiveRecord::Migration[5.1]
  def change
    change_column(:posts, :claps, :integer, default: 0)
  end
end
