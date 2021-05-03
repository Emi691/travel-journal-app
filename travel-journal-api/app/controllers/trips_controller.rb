class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: trips, include: [:locations, :transportations, :journals]
    end
end
