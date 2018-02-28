//actions

const GET_ABOUT_LOADING = "GET_ABOUT_LOADING";
const GET_ABOUT = "GET_ABOUT";
const GET_ABOUT_ERROR = "GET_ABOUT_ERROR";
const ABOUT_URL = "https://r10app-95fea.firebaseio.com/code_of_conduct.json";

//action creators
const getAboutLoading = () => ({
  type: GET_ABOUT_LOADING
});

const getAbout = items => ({
  type: GET_ABOUT,
  payload: items
});

const getAboutError = error => ({
  type: GET_ABOUT_ERROR,
  payload: error
});
//async action creator
const items = fetch(ABOUT_URL).then(r => r.json());

export const fetchAbout = () => dispatch => {
  dispatch(getAboutLoading());
  items.then(response => {
    dispatch(getAbout(response))
  })
    .catch(error => dispatch(getAboutError(error)));
};
//reducer

export default (
  state = {
    isLoading: false,
    items: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_ABOUT_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_ABOUT: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    case GET_ABOUT_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};