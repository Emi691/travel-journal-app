class Trip < ApplicationRecord
    has_many :places
    has_many :transportations
    has_many :journals
end
