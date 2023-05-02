class VehicleModel < ApplicationRecord
  belongs_to :vehicle_make

  has_many :vehicles

  validates :name, presence: true, uniqueness: { scope: :vehicle_make_id }
end
