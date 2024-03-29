import { Dispatch } from 'react';

export interface IAppState {
  page: IPageState;
}

export interface IPageState {
  hello: string;
}

// =========================

// Reducer
export type ContextReducer = (
  state: IAppState,
  action: IContextAction
) => IAppState;

// =========================

// Actions
export interface IContextAction {
  type: string;
  payload?: unknown;
}

// =========================
// CONTEXT

export interface IAppDispatchContext {
  dispatch: Dispatch<IContextAction>;
}
export interface IAppStateContext {
  state: IAppState;
}



