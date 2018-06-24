class Event < ApplicationRecord
  validates :start_date, :end_date, :description, presence: true
  validates :end_date, presence: true, date: { after_or_equal_to:  :start_date}
end
