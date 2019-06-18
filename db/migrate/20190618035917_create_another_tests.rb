class CreateAnotherTests < ActiveRecord::Migration[5.2]
  def change
    create_table :another_tests do |t|
      t.string :address
      t.string :city

      t.timestamps
    end
  end
end
