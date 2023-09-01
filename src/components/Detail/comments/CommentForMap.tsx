import React, { useEffect, useMemo, useState } from 'react';
import { IconAddReComment, IconLiked } from 'src/components/icons';
import { styled } from 'styled-components';
import useLoginUserId from 'src/hooks/useLoginUserId';
import useCommentMutate from 'src/hooks/useCommentMutate';
import ReCommentInput from './ReCommentInput';
import CommentLikes from './CommentLikes';
import CommentInput from './CommentInput';
import ReCommentForMap from './ReCommentForMap';
import { getReCommentDataByCommentId } from 'src/api/ReComment';
import { useQuery } from '@tanstack/react-query';
import CommentUserInfo from './CommentUserInfo';
import CreatedAt from 'src/function/CreatedAt';

interface CommentDataType {
  comment: string;
  created_at: string;
  id: string;
  postId: string;
  userId: string;
  users: {
    profileImg: string;
    nickname: string;
  };
}

interface Props {
  comment: CommentDataType;
}
const CommentForMap = ({ comment }: Props) => {
  const userId = useLoginUserId();

  // 수정할수도있어서 state => memo

  // 토글 state
  const [isEditComment, setIsEditComment] = useState(false);
  const [isOpenReComment, setIsOpenReComment] = useState(false);
  const [isOpenReCommentInput, setIsOpenReCommentInput] = useState(false);

  // 삭제 뮤테이션
  const { deleteCommentButton } = useCommentMutate();

  const { data: reCommentData, isLoading: reCommentIsLoading } = useQuery({
    queryKey: ['reComment', comment.id],
    queryFn: () => getReCommentDataByCommentId(comment.id!),
    enabled: comment.id ? true : false,
    refetchOnWindowFocus: false
  });

  if (reCommentIsLoading) {
    return <>로딩중</>;
  }

  return (
    <>
      <S.CommentArea>
        <S.UpWrapper>
          {/* 유저영역 */}
          <S.UserArea>
            <CommentUserInfo users={comment.users} />
            <S.Time>·</S.Time>
            <S.Time>
              <CreatedAt createdAt={comment.created_at} />
            </S.Time>
            <S.ButtonArea>
              {reCommentData!.count !== 0 && (
                <S.ReCommentToggle onClick={() => setIsOpenReComment(!isOpenReComment)}>
                  {reCommentData!.count}개의 답글보기
                </S.ReCommentToggle>
              )}

              {/* 좋아요 컴포넌트 */}
              <CommentLikes commentId={comment.id} />
            </S.ButtonArea>
          </S.UserArea>
        </S.UpWrapper>
        <S.LowWrapper>
          <S.ReCommentAddButton
            onClick={() => {
              setIsOpenReCommentInput(!isOpenReCommentInput);
              setIsOpenReComment(!isOpenReComment);
            }}
          >
            <IconAddReComment />
          </S.ReCommentAddButton>

          {/* 수정 컴포넌트 */}
          {isEditComment ? (
            <CommentInput
              type={'edit'}
              commentId={comment.id}
              prevComment={comment.comment}
              setIsEditComment={setIsEditComment}
            />
          ) : (
            <S.CommentBody>{comment.comment}</S.CommentBody>
          )}
        </S.LowWrapper>
        {/* {isOpenReComment && <ReComment commentId={comment.id} isOpen={isOpenReComment}/>} */}

        {userId === comment.userId && (
          <S.EditButtonArea>
            <S.EditButton onClick={() => setIsEditComment(!isEditComment)}>수정</S.EditButton>|
            <S.EditButton onClick={() => deleteCommentButton(comment.id)}>삭제</S.EditButton>
          </S.EditButtonArea>
        )}
        {isOpenReCommentInput && (
          <S.ReCommentInputArea>
            <ReCommentInput type={'post'} commentId={comment.id} setIsOpenReCommentInput={setIsOpenReCommentInput} />
          </S.ReCommentInputArea>
        )}
        {isOpenReComment && (
          <S.ReCommentRenderArea>
            {reCommentData?.data?.map((reComment: CommentDataType) => {
              return (
                <ReCommentForMap key={reComment.id} parentId={comment.id} reComment={reComment as CommentDataType} />
              );
            })}
          </S.ReCommentRenderArea>
        )}
      </S.CommentArea>
    </>
  );
};

export default CommentForMap;

const S = {
  CommentArea: styled.div``,
  UpWrapper: styled.div``,
  LowWrapper: styled.div`
    display: flex;
    gap: 4px;
    margin-left: 25px;
  `,
  ButtonArea: styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
  `,
  UserArea: styled.div`
    display: flex;
    align-items: center;
  `,
  ProfileImg: styled.img`
    width: 36px;
    height: 36px;
    border-radius: 100px;
  `,
  Level: styled.div`
    border-radius: 100px;
    border: 1px solid transparent;

    background-image: linear-gradient(#fff, #fff), linear-gradient(40deg, #ffb334, #d9d9d9);
    background-origin: border-box;
    background-clip: content-box, border-box;

    margin-left: 13px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Leveltext: styled.div`
    width: 100%;
    background: #fff;
    margin: 0 12px;
    color: var(--font-black, var(--black, #242424));
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
  `,
  Nickname: styled.div`
    margin-left: 4px;
    color: var(--font-black, var(--Black, #242424));

    /* body-medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,
  Time: styled.div`
    margin-left: 4px;

    color: #737373;

    /* body-small */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  `,
  ReCommentToggle: styled.div`
    margin-right: 12px;
    color: var(--neutral-500, #667085);

    /* body-medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,
  LikeButton: styled.div``,
  LikeNum: styled.div`
    color: var(--neutral-500, #667085);
    text-align: right;

    /* body-medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,
  CommentBody: styled.div`
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid var(--neutral-100, #f2f4f7);
    width: 100%;
    background-color: white;

    color: var(--font-black, #242424);

    /* body-medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,
  ReCommentAddButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    width: 20px;
    height: 20px;
    border-radius: 125px;
    border: 0.625px solid var(--neutral-500, #667085);
    background: var(--neutral-100, #f2f4f7);
  `,
  EditButtonArea: styled.div`
    display: flex;
    justify-content: flex-end;

    align-items: center;
    text-align: center;

    /* body-small */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  `,
  EditButton: styled.div`
    display: flex;
    width: 28px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--neutral-400, var(--neutral-400, #98a2b3));
  `,
  ReCommentArea: styled.div``,
  ReCommentInputArea: styled.div``,
  ReCommentRenderArea: styled.div`
    margin-top: 24px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
};