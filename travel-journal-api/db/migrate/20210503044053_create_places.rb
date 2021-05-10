class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :name
      t.datetime :arrival_date
      t.datetime :departure_date

      t.timestamps
    end
  end
end
