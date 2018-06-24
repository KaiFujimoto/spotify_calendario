class Event < ApplicationRecord
  validates :start_date, :end_date, :description, presence: true
  validate :end_after_start, on: :create

  def end_after_start
    return if end_date.blank? || start_date.blank?

    if end_date < start_date
      errors.add(:end_date, "must be after the start date")
    end
  end
end
