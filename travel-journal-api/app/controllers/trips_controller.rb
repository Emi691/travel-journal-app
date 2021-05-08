class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: TripSerializer.new(trips)
    end

    def create
        trip = Trip.new(trip_params)
        if trip.save
            render json: TripSerializer.new(trip)
        else
            render json: {alert: trip.errors.full_messages}
        end
    end

    private

    def trip_params
        params.require(:trip).permit(:title, :start_date, :end_date, :photo_url)
    end
end
