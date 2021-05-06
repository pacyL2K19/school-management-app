/* eslint-disable no-fallthrough */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// import { LocationGeocodedLocation } from "expo-location";
import { UserAction } from "../actions";
import { UserModel, UserState } from "../models";

const initialState: UserState = {
  user: {} as UserModel,
  error: undefined,
};

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case "ON_USER_LOGIN":
      console.log("User Token" + payload);

    default:
      return state;
  }
};

export { UserReducer };
