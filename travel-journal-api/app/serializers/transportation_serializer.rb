class TransportationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :start_location, :end_location, :mode, :departure_date, :arrival_date 
end
