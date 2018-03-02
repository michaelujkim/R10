import { formatSessionData } from "./helper.js";

//actions

const GET_SPEAKER_LOADING = "GET_SPEAKER_LOADING";
const GET_SPEAKER = "GET_SPEAKER";
const GET_SPEAKER_ERROR = "GET_SPEAKER_ERROR";
const SPEAKER_URL = "https://r10app-95fea.firebaseio.com/speakers.json";

//action creators
const getSpeakerLoading = () => ({
  type: GET_SPEAKER_LOADING
});

const getSpeaker = speakers => ({
  type: GET_SPEAKER,
  payload: speakers
});

const getSpeakerError = error => ({
  type: GET_SPEAKER_ERROR,
  payload: error
});
//async action creator
const sessions = fetch(`${SPEAKER_URL}`).then(r => r.json());

export const fetchSpeakers = speakerId => dispatch => {
  dispatch(getSpeakersLoading());
  sessions
    .then(response => {
      dispatch(getSpeaker(response));
    })
    .catch(error => dispatch(getSpeakerError(error)));
};
//reducer

export default (
  state = {
    isLoading: false,
    speakers: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SPEAKER: {
      return {
        ...state,
        isLoading: false,
        speakers: action.payload,
        error: ""
      };
    }
    case GET_SPEAKER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
