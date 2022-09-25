import { IContextAction } from '../../types/context.types';
import { PageActions } from './page.actions.types';

export const setHello = (payload: string): IContextAction => ({
  type: PageActions.SET_HELLO,
  payload,
});
