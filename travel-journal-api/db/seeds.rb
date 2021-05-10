# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trip = Trip.create(title: "My Philippines Adventure", photo_url: "https://images.unsplash.com/photo-1575406060917-14dfb0c961a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")

trip.places << Place.create(name: "Manila")
trip.places << Place.create(name: "Banaue")
trip.places << Place.create(name: "Panglau")

trip.transportations << Transportation.create(mode: "bus", start_location: "Manila", end_location: "Banaue")
trip.transportations << Transportation.create(mode: "ferry", start_location: "Banaue", end_location: "Panlau")
