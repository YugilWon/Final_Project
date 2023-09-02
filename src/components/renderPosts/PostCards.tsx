import React from 'react';
import { Post } from 'src/types/types';
import { styled } from 'styled-components';
import CommonPost from './CommonPost';

interface PostListProps {
  posts: Post[];
}

const PostCards = ({ posts }: PostListProps) => {
  return (
    <S.Area>
      {posts &&
        posts?.map((item: Post) => {
          return <CommonPost key={item.id} item={item} />;
        })}
    </S.Area>
  );
};

export default PostCards;

interface ImgProps {
  $url: string;
}

const S = {
  Area: styled.div`
    margin-top: 30px;
  `
};
