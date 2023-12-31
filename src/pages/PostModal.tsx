import React, { useRef } from 'react';
import styled from 'styled-components';
import PostDetail from 'src/components/post/detail/PostDetail';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const PostModal = () => {
  const postBoxRef = useRef<any>(null);
  const navigate = useNavigate();

  return (
    <>
      <S.PostContainer id="postbox">
        <S.PostArea ref={postBoxRef}>
          <S.PostBox>
            <PostDetail isModal={true} />
          </S.PostBox>
        </S.PostArea>
      </S.PostContainer>
      <S.ModalBackground
        id="background"
        onWheel={(e) => {
          if (postBoxRef.current) {
            postBoxRef.current.scrollTop += e.deltaY;
          }
        }}
        onClick={() => {
          navigate(-1);
        }}
      />
    </>
  );
};

export default PostModal;

const S = {
  PostContainer: styled(motion.div)`
    width: 890px;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: calc((100vw - 890px) / 2);
  `,
  PostArea: styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  PostBox: styled.div`
    margin: 84px 0;
  `,
  ModalBackground: styled(motion.div)`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  `
};
