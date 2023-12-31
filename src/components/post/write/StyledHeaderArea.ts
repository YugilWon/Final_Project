import { FlexBoxCenter } from 'src/styles/styleBox';
import { styleFont } from 'src/styles/styleFont';
import styled from 'styled-components';

export const S = {
  WriteHeader: styled.header`
    width: 100%;
    height: 56px;
    margin-bottom: 28px;
    background-color: white;

    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
  `,

  WriteHeaderBox: styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 11px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  BackButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    color: var(--neutral-400, var(--neutral-400, #98a2b3));
    ${styleFont.buttonMedium}
  `,

  IconBox: styled(FlexBoxCenter)``,

  LogoContainer: styled.div`
    cursor: pointer;

    color: white;
    width: 80px;
    height: 22px;
  `,

  AddButton: styled.button`
    background: var(--main, #f02826);

    width: 110px;
    height: 34px;
    padding: 5px 15px;
    gap: 4px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white, #fff);

    ${styleFont.buttonMedium}
  `,

  AddIcon: styled.div`
    width: 20px;
    height: 20px;
  `
};
