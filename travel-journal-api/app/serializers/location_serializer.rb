class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :timezone, :arrival_date, :departure_date
end
