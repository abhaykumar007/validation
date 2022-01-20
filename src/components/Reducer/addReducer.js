import { ADD } from "../Action";
const initial = {
  information: {},
};
const reducerFun = (state = initial, action) => {
  switch (action.type) {
    case ADD: {
      return { information: { info: action.payload } };
    }
    default: {
      return state;
    }
  }
};

export default reducerFun;
