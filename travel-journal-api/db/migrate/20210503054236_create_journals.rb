class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :content
      t.string :photo_url

      t.timestamps
    end
  end
end
