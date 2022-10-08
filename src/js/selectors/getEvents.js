export const getEvents = (res) => res.data['_embedded']['events']
export const getTotalPages = (res) => res.data['page']['totalPages']