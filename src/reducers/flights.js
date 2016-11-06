import * as actionTypes from '../constants/actionTypes';


const initialState = {
  flights: [],
  fetching: false,
  isGetFlights: false
}

export default function flights(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_FLIGHTS_REQUEST:
          return {
              ...state,
              fetching: true
          }

        case actionTypes.GET_FLIGHTS_SUCCESS:
          return {
              ...state,
              flights: action.payload,
              fetching: false,
              isGetFlights: true
          }

      default:
        return state;
    }
}
