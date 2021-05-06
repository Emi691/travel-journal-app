class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :title
      t.string :photo_url
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
