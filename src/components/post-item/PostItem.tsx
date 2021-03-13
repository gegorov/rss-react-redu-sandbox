import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { POST_DELETE } from '../../store';
import { Post } from '../../types';

export function PostItem({ post }: { post: Post }): JSX.Element {
  const dispatch = useDispatch();
  const deletePost = useCallback(
    (id: number) => {
      dispatch({
        type: POST_DELETE,
        payload: id,
      });
    },
    [dispatch],
  );

  return (
    <li>
      <button type="button" onClick={() => deletePost(post.id)}>Delete</button>
      {post.id}
      .&nbsp;
      {/* {' '} */}
      {post.title}
    </li>
  );
}
