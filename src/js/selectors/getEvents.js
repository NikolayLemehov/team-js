export const getEvents = (res) => res.data['_embedded'] !== undefined ?
  res.data['_embedded']['events'] : [];
