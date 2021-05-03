# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trip = Trip.create(title: "My Philippines Adventure")

trip.locations << Location.create(name: "Manila", timezone: "PHT")
trip.locations << Location.create(name: "Banaue", timezone: "PHT")
trip.locations << Location.create(name: "Panglau", timezone: "PHT")

trip.transportations << Transportation.create(mode: "bus", start_location: "Manila", end_location: "Banaue")
trip.transportations << Transportation.create(mode: "ferry", start_location: "Banaue", end_location: "Panlau")
