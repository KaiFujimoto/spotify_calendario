export const fetchEvents = () => {
  return $.ajax({
    url: '/api/events',
    method: 'GET'
  });
};

export const fetchEvent = (eventId) => {
  return $.ajax({
    url: `/api/events/${eventId}`,
    method: 'GET'
  });
};

export const createEvent = (data) => {
  return $.ajax({
    url: '/api/events',
    method: 'POST',
    data: {
      data
    }
  });
};

export const updateEvent = (data) => {
  return $.ajax({
    url: `/api/events/${data.id}`,
    method: 'PATCH',
    data: {
      data
    }
  });
};

export const deleteEvent = (eventId) => {
  return $.ajax({
    url: `/api/events/${eventId}`,
    method: 'DELETE'
  });
};
