import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Post } from '../types';
import { MyState } from './types';

const initialState: MyState = {
  posts: null,
  isLoading: false,
  errors: null,
};

export const ADD_POSTS = 'ADD_POSTS';
export const POST_DELETE = 'POST_DELETE';
export const POSTS_FETCHING_START = 'POSTS_FETCHING_START';
export const POSTS_FETCHING_SUCCESS = 'POSTS_FETCHING_SUCCESS';
export const POSTS_FETCHING_FAIL = 'POSTS_FETCHING_FAIL';
// export const ADD_POSTS = 'ADD_POSTS';

function postsReducer(state: MyState = initialState, action: any): MyState {
  switch (action.type) {
    case POSTS_FETCHING_START:
      return {
        ...state,
        isLoading: true,
      };
    case POSTS_FETCHING_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        isLoading: false,
      };
    case POSTS_FETCHING_FAIL:
      const errors = state.errors ? state.errors : [];
      return {
        ...state,
        errors: [...errors, action.payload],
        isLoading: false,
      };
    case POST_DELETE:
      const updatedPosts = state.posts
        ? state.posts?.filter((post) => post.id !== action.payload)
        : [];
      return {
        ...state,
        posts: [...updatedPosts],
      };

    default:
      return state;
  }
}

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  postsReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);
