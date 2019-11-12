import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  contentData: {},
  isFetching: false,
  hasIpData: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        hasIpData: false,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasIpData: true,
        error: "",
        contentData: { ...action.payload }
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        hasIpData: false,
        isFetching: false
      };
    default:
      return state;
  }
};
export default reducer;
