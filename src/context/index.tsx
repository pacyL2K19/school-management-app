import { createContext, useContext } from "react";
import { GlobalContent } from "../types";

export const MyGlobalContext = createContext<GlobalContent>({
  accountInfo: {
    schoolId: "",
    teachearId: ""
  },
  setAccountInfo: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
