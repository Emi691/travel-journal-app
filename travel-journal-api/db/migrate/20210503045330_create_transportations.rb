class CreateTransportations < ActiveRecord::Migration[6.1]
  def change
    create_table :transportations do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :start_location
      t.string :end_location
      t.string :mode
      t.string :departure_date
      t.string :arrival_date

      t.timestamps
    end
  end
end
