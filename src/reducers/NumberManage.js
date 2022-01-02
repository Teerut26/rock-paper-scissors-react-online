let initialState = 0;

const NumberManage = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NUMBER":
      return state = action.playload;
    default:
      return state
  }
};

export { NumberManage };
