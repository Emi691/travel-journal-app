class TransportationsController < ApplicationController
    
    def create
        transportation = Transportation.new(transportation_params)
        trip = Trip.find_by(id: params[:trip][:id])
        trip.transportations << transportation
        if transportation.save
            render json: TransportationSerializer.new(transportation)
        else
            render json: {alert: transportation.errors.full_messages}
        end
    end

    def destroy
        #binding.pry
        transportation = Transportation.find_by(id: params[:id])
        transportation.destroy
        render json: {message: "transportation deleted", id: "#{params[:id]}"}
    end

    private 

    def transportation_params
        params.require(:transportation).permit(:start_location, :end_location, :mode, :arrival_date, :departure_date) 
    end
end
