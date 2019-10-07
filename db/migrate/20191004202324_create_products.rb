class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type
      t.integer :price
      t.string :description
      t.string :photo_url

      t.timestamps
    end
  end
end
