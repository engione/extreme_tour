const defaultState = {
  user_metadata: {},
};

export const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_USER_METADATA":
      return { ...state, user_metadata: { ...action.payload } };
    case "REMOVE_USER_METADATA":
      return { ...state, user_metadata: {} };
    default:
      return state;
  }
};
