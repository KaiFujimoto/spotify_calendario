class Event < ApplicationRecord
  validates :start_date, :end_date, :description
end
