import getCurrentTime from "../utils/getCurrentTime";
import * as actionTypes from "./actionTypes";

function addCurrentTime() {
  return {
    type: actionTypes.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

function clearTimes() {
  return {
    type: actionTypes.CLEAR_ALL_TIMES,
  };
}

export { addCurrentTime, clearTimes };
