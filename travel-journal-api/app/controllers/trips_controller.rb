class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: TripSerializer.new(trips)
    end

    def create
        let trip = Trip.create(trip_params)
    end

    private

    def trip_params
        params.require(:trip).permit(:title, :start_date, :end_date, :photo_url)
    end
end
