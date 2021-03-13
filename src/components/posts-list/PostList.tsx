import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/actions';
import { MyState } from '../../store/types';
import { Post } from '../../types';
import { PostItem } from '../post-item/PostItem';

export function PostList(): JSX.Element {
  const posts = useSelector((state: MyState) => state.posts);
  const dispatch = useDispatch();

  const loadPosts = useCallback(() => { dispatch(fetchPosts()); }, [dispatch]);

  return (
    <>
      <button type="button" onClick={loadPosts}>
        Reload posts
      </button>
      <ul>
        {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
      </ul>
    </>
  );
}
