const defaultState = {
  idUser: "",
};

export const userIdReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_USER_ID":
      return { ...state, idUser: action.payload };
    case "REMOVE_USER_ID":
      return { ...state, idUser: "" };
    default:
      return state;
  }
};
