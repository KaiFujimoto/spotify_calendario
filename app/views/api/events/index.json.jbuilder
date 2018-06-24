json.events do
  @event.each do |event|
    json.set! event.id do
      json.partial! "api/events/event", event: event
    end
  end
end
