import supabase from 'src/lib/supabaseClient';

interface LikeType {
  id: string;
  commentId: string;
  userId: string;
}

const getLike = async () => {
  const { data } = await supabase.from('comment_likes_test').select('commentId,userId');

  return data;
};

const addLike = async ({ commentId, userId }: { commentId: string; userId: string }) => {
  await supabase.from('comment_likes_test').insert({ commentId, userId });
};

const deleteLike = async ({ commentId, userId }: { commentId: string; userId: string }) => {
  await supabase.from('comment_likes_test').delete().eq('commentId', commentId).eq('userId', userId);
};

export { getLike, addLike, deleteLike };
