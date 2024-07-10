import styled from '@emotion/styled';
import { Modal as ModalAntd } from 'antd';
import { COLORS } from '../../../styles/variables';

export const ModalBase = ({ className, children, ...otherProps }: any) => {
  return (
    <ModalAntd className={className} {...otherProps}>
      {children}
    </ModalAntd>
  );
};

export const Modal = styled(ModalBase)`
  & .ant-modal-content {
    background: ${COLORS.black};
  }
  & .ant-modal-header,
  & .ant-modal-title {
    color: ${COLORS.white};
    background: none;
  }
  & .ant-modal-close-icon svg {
    color: ${COLORS.lucentWhite};
    transition: color 0.3s ease;
    &:hover {
      color: ${COLORS.white};
    }
  }

  & .ant-btn-primary,
  & .ant-btn-default {
    color: ${COLORS.lucentWhite};
    border-color: ${COLORS.lucentWhite};
    background: ${COLORS.lucentBlack};
    &:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${COLORS.white};
      background: ${COLORS.lucentBlack};
      border-color: ${COLORS.white};
    }
  }
`;
