export const VERCEL_URL = 'pyeonsik.vercel.app/';
export const LOGO_IMAGE = 'https://wwkfivwrtwucsiwsnisz.supabase.co/storage/v1/object/public/photos/logo/logo.png';
export const IMAGE_EMPTY = 'https://wwkfivwrtwucsiwsnisz.supabase.co/storage/v1/object/public/photos/image/empty.png';
export const SERVICE_PREPARING = '죄송합니다. 서비스 준비 중입니다.';

export const NON_MEMBER = '로그인 후 이용해 주세요.';
export const EMAIL_CHECK = '이메일을 확인해 주세요.';
export const NICKNAME_INPUT = '닉네임을 입력해 주세요.';
export const NICKNAME_DIGITS = '두 자 이상으로 입력해 주세요.';
export const NICKNAME_ALREADY = '이미 사용 중이 닉네임이에요. 😥';
export const NICKNAME_FORM = '영문, 한글, 숫자, _, -만 사용 가능해요. 🔧';
export const NICKNAME_SLANG = '비속어는 사용할 수 없어요. 🤬';

export const DELETE = '삭제하시겠습니까?';
export const CANCLE = '취소되었습니다.';

export const LIMIT_3MB = '3MB 이하의 .jpg, .jpeg, .png 파일을 선택해 주세요.';
export const LIMIT_10MB = '이미지 크기가 10MB를 초과합니다. 다른 이미지를 선택해 주세요.';

export const ERROR_AUTH = {
  'User already registered': '이미 사용 중인 이메일이에요.',
  'Password should be at least 6 characters': '비밀번호는 6자리 이상으로 입력해 주세요.'
};

export const MAX_NICKNAME_LENGTH = 15;

export const CORRECT_NICK_MESSAGES = [
  '아무도 생각하지 못한 멋진 닉네임이에요. 😎',
  '이런 창의적인 생각은 어떻게 하시나요. 👏',
  '이 세상에 하나뿐인 닉네임일지도 몰라요. 🥳',
  '누구나 부러워할 최고의 닉네임이에요. 🤘'
];

export const ERROR_IMG = (e: React.SyntheticEvent<HTMLImageElement, Event> | any) => {
  e.target.onerror = null;
  e.target.src = IMAGE_EMPTY;
};
