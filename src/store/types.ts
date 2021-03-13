import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Post } from '../types';

export interface MyState {
  posts: Post[] | null;
  isLoading: boolean;
  errors: Array<string> | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunk<ReturnType = any> = ThunkAction<ReturnType, MyState, unknown, Action<string>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = ThunkDispatch<MyState, any, AnyAction>;
