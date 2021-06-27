import { createContext, useContext } from "react";
import { GlobalContent } from "../types";

export const MyGlobalContext = createContext<GlobalContent>({
  accountInfo: null,
  setAccount: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
