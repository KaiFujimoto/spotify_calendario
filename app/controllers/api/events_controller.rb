class EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    if @event.save
      render :index
    else
      render json: {errors: @event.errors.full_messages}, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def index
    @event = Event.all
    render :index
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
    render :show
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: {errors: @event.errors.full_messages}, status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(:start_date, :end_date, :description)
  end
end
