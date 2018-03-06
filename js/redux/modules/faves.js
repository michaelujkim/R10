//actions

const GET_FAVES_LOADING = "GET_FAVES_LOADING";
const GET_FAVES = "GET_FAVES";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";
import { queryFaves } from "../../config/models";

//action creators
const getFavesLoading = () => ({
  type: GET_FAVES_LOADING
});

const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});

const getFavesError = error => ({
  type: GET_FAVES_ERROR,
  payload: error
});
//async action creator

export const fetchFaves = () => dispatch => {
  const data = queryFaves();
  dispatch(getFavesLoading());

  // const faves=data.map(sessionFaves => sessionFaves.id);

  dispatch(getFaves(data));
};
//reducer

export default (
  state = {
    isLoading: false,
    faves: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_FAVES: {
      return { ...state, isLoading: false, faves: action.payload, error: "" };
    }
    case GET_FAVES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
