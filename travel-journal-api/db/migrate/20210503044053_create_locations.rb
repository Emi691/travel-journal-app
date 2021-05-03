class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :name
      t.string :timezone
      t.string :arrival_date
      t.string :departure_date

      t.timestamps
    end
  end
end
