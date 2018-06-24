class EventsController < ApplicationController
  def new
  end

  def create
    @event = Event.create!(event_params)
    render :show
  end

  def show
    @event = Event.find(params[:id])
  end

  def index
    @event = Event.all
    render :index
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: {errors: @post.errors.full_messages}, status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :start_date, :end_date)
  end
end
