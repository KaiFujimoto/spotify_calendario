class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.string :description

      t.timestamps
    end
  end
end
