const defaultState = {
  data: {},
};

export const userMetadataReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_USER_DATA":
      return { ...state, data: { ...action.payload } };
    case "REMOVE_USER_DATA":
      return { ...state, data: {} };
    default:
      return state;
  }
};
