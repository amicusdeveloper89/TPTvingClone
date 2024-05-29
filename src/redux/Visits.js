const initState = {
    visits : {},
    favors : {}
  }
  
  export const increaseVisitAction = (movieId) => {
    return {
      type : 'item/increaseVisit',
      movieId : movieId
    }
  }
  
  export const increaseFavorAction = (movieId) => {
    return {
      type : 'item/increaseFavor',
      movieId : movieId
    }
  }
  
  export default function itemsReducer(state = initState, action) {
    switch (action.type) {
      case 'item/increaseVisit' :
        return {...state, visits : {
            ...state.visits, [action.movieId] : (state.visits[action.movieId] || 0) + 1
        }}
      case 'item/increaseFavor' :
        return {...state, favors : {
            ...state.favors, [action.movieId] : (state.favors[action.movieId] || 0) + 1
        }}
      default :
        return state
    }
  }
  