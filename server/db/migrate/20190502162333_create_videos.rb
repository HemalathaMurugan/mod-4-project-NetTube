class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.belongs_to :user
      t.string :title
      t.text :description  
      t.integer :likes
      t.float :duration

      t.timestamps
    end
  end
end
