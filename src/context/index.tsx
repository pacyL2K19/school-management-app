import { createContext, useContext } from "react";
import { GlobalContent } from "../types";

export const MyGlobalContext = createContext<GlobalContent>({
  accountInfo: null,
  setAccountInfo: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
