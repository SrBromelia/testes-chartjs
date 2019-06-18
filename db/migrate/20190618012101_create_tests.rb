class CreateTests < ActiveRecord::Migration[5.2]
  def change
    create_table :tests do |t|
      t.string :name
      t.integer :obj_type

      t.timestamps
    end
  end
end
