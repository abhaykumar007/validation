export const ADD = "add";

export function addFun(data) {
  // console.log("data from action", data);
  return {
    type: ADD,
    payload: data,
  };
}
