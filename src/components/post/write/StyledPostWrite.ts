import styled from 'styled-components';

export const S = {
  WritePostArea: styled.div`
    margin-top: 84px;
  `,

  WriteArea: styled.div`
    width: 950px;
    margin: 0 auto;
  `,

  WriteForm: styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  AddText: styled.div`
    color: #000;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  `,

  TitleBox: styled.div`
    background: #fff;
    width: 950px;
    margin-bottom: 12px;
    padding: 9px 20px;
    gap: 20px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  CategoryText: styled.div`
    color: #000;

    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  `,

  Contour: styled.div`
    background: #f6f7f9;

    width: 2px;
    height: 18px;
    border-radius: 100px;
  `,

  Title: styled.input`
    border: none;
    outline: none;

    color: #000;
    width: 723px;

    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,

  SelectCategory: styled.div`
    gap: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  SelectIcon: styled.div`
    width: 20px;
    height: 20px;
  `,

  SelectText: styled.button`
    padding: 0px;
    color: var(--neutral-400, #98a2b3);
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  `
};
