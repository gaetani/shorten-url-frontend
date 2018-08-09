let nextShortenerId = 0;

function addShortenerSuccess(payload) {
    return {type: 'ADD_SHORTENER', payload: payload};
}

export function addShortener(text, dispatch) {
        console.log('fetching results from server...');

        return fetch(`http://localhost:8080/?url=${text}`, {
            method: 'PUT'
        })
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            dispatch(addShortenerSuccess(results));
        })
        .catch(console.error);
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleShortener = id => ({
  type: 'TOGGLE_SHORTERNER',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
