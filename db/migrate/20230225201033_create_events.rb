class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.string :location
      t.date :date
      t.string :time
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
