class TripSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :title, :photo_url, :start_date, :end_date, :places, :transportations, :journals
end
