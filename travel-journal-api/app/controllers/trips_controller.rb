class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: TripSerializer.new(trips)
    end

    def create
        trip = Trip.create(trip_params)
        render json: TripSerializer.new(trip)
    end

    private

    def trip_params
        params.require(:trip).permit(:title, :start_date, :end_date, :photo_url)
    end
end
