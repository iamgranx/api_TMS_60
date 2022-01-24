import * as Statuses from "../statuses";
import {
  SET_USERS,
  SET_USERS_REQUEST_STATUS_FAILURE,
  SET_USERS_REQUEST_STATUS_PENDING,
} from "./users.actions";

export const initialState = {
  usersRequestStatus: Statuses.UNCALLED,
  userRequestStatus: Statuses.UNCALLED,
  userCommentsRequestStatus: Statuses.UNCALLED,
  users: [],
  user: null,
};
/////////
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_REQUEST_STATUS_PENDING:
      return { ...state, usersRequestStatus: Statuses.PENDING };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        usersRequestStatus: Statuses.SUCCESS,
      };
    case SET_USERS_REQUEST_STATUS_FAILURE:
      return { ...state, usersRequestStatus: Statuses.FAILURE };

};
};
