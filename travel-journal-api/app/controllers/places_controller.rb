class PlacesController < ApplicationController

    def create
        place = Place.new(place_params)
        trip = Trip.find_by(id: params[:trip][:id])
        trip.places << place
        if place.save
            render json: PlaceSerializer.new(place)
        else
            render json: {alert: place.errors.full_messages}
        end
    end

    def destroy
        place = Place.find_by(id: params[:id])
        place.destroy
        render json: {message: "place deleted", id: "#{params[:id]}"}
    end

    private 

    def place_params
        params.require(:place).permit(:name, :arrival_date, :departure_date) 
    end
end
