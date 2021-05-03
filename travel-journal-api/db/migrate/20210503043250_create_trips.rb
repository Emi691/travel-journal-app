class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :title
      t.string :start_date
      t.string :end_date
      t.string :photo
      t.string :blog

      t.timestamps
    end
  end
end
