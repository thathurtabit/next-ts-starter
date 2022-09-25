import { createContext, useMemo, useReducer } from "react";
import { initState } from "../state/initState";
import { ContextReducer, IAppContext } from "../types/context.types";
import { IAppProvider } from "./context.types";
import combineReducers from "react-combine-reducers";
import { pageReducer } from "../reducers/page/page.reducer";

// TODO: Rename me
export const NextTSAppContext = createContext<IAppContext>({
  state: initState,
  dispatch: () => null,
});

// TODO: Rename me
NextTSAppContext.displayName = "NextTSAppContext";

// TODO: Rename me
export const NextTSAppProvider = ({ children }: IAppProvider): JSX.Element => {
  const [combinedReducer, combinedInitState] = combineReducers<ContextReducer>({
    page: [pageReducer, initState.page],
  });

  const [state, dispatch] = useReducer<ContextReducer>(
    combinedReducer,
    combinedInitState
  );

  const memoizedContextValue: IAppContext = useMemo<IAppContext>(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return (
    <NextTSAppContext.Provider value={memoizedContextValue}>
      {children}
    </NextTSAppContext.Provider>
  );
};
