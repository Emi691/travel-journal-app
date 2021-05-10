class Trip < ApplicationRecord
    has_many :places, :dependent => :delete_all 
    has_many :transportations, :dependent => :delete_all 
    has_many :journals, :dependent => :delete_all 
end
