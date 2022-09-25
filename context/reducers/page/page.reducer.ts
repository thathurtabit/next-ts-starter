import { IPageState, IContextAction } from './../../types/context.types';
import { PageActions } from '../../actions/page/page.actions.types';

export const pageReducer = (
  state: IPageState,
  { type, payload }: IContextAction
): IPageState => {
  switch (type) {
    case PageActions.SET_HELLO:
      return {
        ...state,
        hello: payload as string,
      };
    default:
      return state;
  }
};
