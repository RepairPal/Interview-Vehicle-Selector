class Vehicle < ApplicationRecord
  belongs_to :vehicle_model

  validates :year, presence: true, uniqueness: { scope: :vehicle_model_id }
end
