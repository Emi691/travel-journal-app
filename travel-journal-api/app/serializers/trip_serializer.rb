class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :start_date, :end_date, :locations, :transportations, :journals
end
