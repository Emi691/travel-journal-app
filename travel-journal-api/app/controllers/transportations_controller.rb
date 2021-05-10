class TransportationsController < ApplicationController
    
    def create
        transportation = Transportation.new(transportation_params)
        trip = Trip.find_by(id: params[:trip][:id])
        trip.transportations << transportation
        if transportation.save
            render json: PlaceSerializer.new(transportation)
        else
            render json: {alert: transportation.errors.full_messages}
        end
    end

    def destroy
        transportation = Place.find_by(id: params[:id])
        transportation.destroy
        render json: {message: "transportation deleted", id: "#{params[:id]}"}
    end

    private 

    def place_params
        params.require(:transportation).permit(:start_location, :end_location, :mode, :arrival_date, :departure_date) 
    end
end
