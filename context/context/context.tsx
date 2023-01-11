import { createContext, useMemo, useReducer } from "react";
import { initState } from "../state/initState";
import {
  ContextReducer,
  IAppStateContext,
  IAppDispatchContext,
} from "../types/context.types";
import { IAppProvider } from "./context.types";
import combineReducers from "react-combine-reducers";
import { pageReducer } from "../reducers/page/page.reducer";

// TODO: Rename me
export const NextTSAppStateContext = createContext<IAppStateContext>({
  state: initState,
});

export const NextTSAppDispatchContext = createContext<IAppDispatchContext>({
  dispatch: () => null,
});

// TODO: Rename me
NextTSAppStateContext.displayName = "NextTSAppStateContext";
NextTSAppDispatchContext.displayName = "NextTSAppDispatchContext";

// TODO: Rename me
export const NextTSAppProvider = ({ children }: IAppProvider): JSX.Element => {
  const [combinedReducer, combinedInitState] = combineReducers<ContextReducer>({
    page: [pageReducer, initState.page],
  });

  const [state, dispatch] = useReducer<ContextReducer>(
    combinedReducer,
    combinedInitState
  );

  const memoizedStateContextValue: IAppStateContext = useMemo<IAppStateContext>(
    () => ({ state }),
    [state]
  );

  const memoizedDispatchContextValue: IAppDispatchContext =
    useMemo<IAppDispatchContext>(() => ({ dispatch }), [dispatch]);

  return (
    <NextTSAppDispatchContext.Provider value={memoizedDispatchContextValue}>
      <NextTSAppStateContext.Provider value={memoizedStateContextValue}>
        {children}
      </NextTSAppStateContext.Provider>
    </NextTSAppDispatchContext.Provider>
  );
};
