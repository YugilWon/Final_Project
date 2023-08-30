import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Post } from 'src/types/types';
import PostWriteCommon from 'src/components/post/write/PostWriteCommon';
import PostWriteRecipe from 'src/components/post/PostWriteRecipe';
import OrgPostCard from 'src/components/post/detail/OrgPostCard';
import styled from 'styled-components';

const Write = () => {
  const [category, setCategory] = useState<string>('');
  const [isSelect, setIsSelect] = useState<boolean>();

  const location = useLocation();
  const orgPost = location.state as Post;
  const orgUserNickname = orgPost?.userId?.nickname;

  return (
    <S.WrtieArea>
      <PostWriteCommon orgPostId={orgPost?.id} />
      {orgPost && <OrgPostCard orgPost={orgPost} orgUserNickname={orgUserNickname} />}
      <PostWriteRecipe orgPostId={orgPost?.id} />
    </S.WrtieArea>
  );
};

export default Write;

export const S = {
  WrtieArea: styled.div`
    /* background-color: #f6f7f9;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  `
};
