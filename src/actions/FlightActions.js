import { GET_FLIGHTS_REQUEST, GET_FLIGHTS_FAILURE, GET_FLIGHTS_SUCCESS, SET_FILTER, REMOVE_FILTER } from '../constants/actionTypes';

export function getFlights() {
    return (dispatch) => {
        dispatch({
            type: GET_FLIGHTS_REQUEST
        })

        fetch('/data.json')
            .then(function(resolve) {
                  return resolve.json();
            }, function(reject) {
                dispatch({
                    type: GET_FLIGHTS_FAILURE,
                    payload: reject.error,
                    error: true
                })
            })
          .then(function(result) {
              const data = result.flights;
              let res = [];
              for (let f in data) {
                  res.push(data[f]);
              }

              dispatch({
                  type: GET_FLIGHTS_SUCCESS,
                  payload: res
              })
          });
    }
}

export function removeFilter() {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FILTER
        })
        getFlights();
    }
}

export function setFilter(data, filter) {
    return (dispatch) => {
        let res = [];
        for (d in data) {
            if (data[d].carrier == filter) res.push(data[d]);
        }
        dispatch({
            type: SET_FILTER,
            payload: res
        })
    }
}
