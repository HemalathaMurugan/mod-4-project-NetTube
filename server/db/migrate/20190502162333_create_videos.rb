class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.text :description  
      t.integer :likes
      t.float :duration
      t.date :date_created
      t.time :time_created
      t.belongs_to :user
      t.belongs_to :comment
      t.timestamps
    end
  end
end
