class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :arrival_date, :departure_date
end
