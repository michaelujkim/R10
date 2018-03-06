import { formatSessionData } from "./helper.js";

//actions

const GET_SCHEDULE_LOADING = "GET_SCHEDULE_LOADING";
const GET_SCHEDULE = "GET_SCHEDULE";
const GET_SCHEDULE_ERROR = "GET_SCHEDULE_ERROR";
const SCHEDULE_URL = "https://r10app-95fea.firebaseio.com/sessions.json";

//action creators
const getScheduleLoading = () => ({
  type: GET_SCHEDULE_LOADING
});

const getSchedule = sessions => ({
  type: GET_SCHEDULE,
  payload: sessions
});

const getScheduleError = error => ({
  type: GET_SCHEDULE_ERROR,
  payload: error
});
//async action creator
const sessions = fetch(SCHEDULE_URL).then(r => r.json());

export const fetchSchedule = () => dispatch => {
  dispatch(getScheduleLoading());
  sessions
    .then(response => {
      dispatch(getSchedule(response));
    })
    .catch(error => dispatch(getScheduleError(error)));
};
//reducer

export default (
  state = {
    isLoading: false,
    sessions: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SCHEDULE_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SCHEDULE: {
      return {
        ...state,
        isLoading: false,
        sessions: action.payload,
        error: ""
      };
    }
    case GET_SCHEDULE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
