class Trip < ApplicationRecord
    has_many :locations
    has_many :transportations
end
