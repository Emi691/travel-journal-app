class JournalsController < ApplicationController
    def create
        journal = Journal.new(journal_params)
        trip = Trip.find_by(id: params[:trip][:id])
        trip.journals << journal
        if journal.save
            render json: JournalSerializer.new(journal)
        else
            render json: {alert: journal.errors.full_messages}
        end
    end

    def destroy
        journal = Journal.find_by(id: params[:id])
        journal.destroy
        render json: {message: "Journal deleted", id: "#{params[:id]}"}
    end

    private 

    def journal_params
        params.require(:journal).permit(:photo_url, :content) 
    end
end
