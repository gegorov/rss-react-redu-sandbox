import { Post } from '../types';
import { POSTS_FETCHING_START, POSTS_FETCHING_SUCCESS, POSTS_FETCHING_FAIL } from './index';
import { AppThunk } from './types';

export const fetchPosts = (): AppThunk => (dispatch): void => {
  dispatch({
    type: POSTS_FETCHING_START,
  });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json: Post[]) => {
      dispatch({
        type: POSTS_FETCHING_SUCCESS,
        payload: [...json],
      });
    })
    .catch((e) => {
      dispatch({
        type: POSTS_FETCHING_FAIL,
        payload: e.message,
      });
    });
};
