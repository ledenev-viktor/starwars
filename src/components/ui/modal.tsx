import styled from '@emotion/styled';
import { Modal as ModalAntd, ModalProps } from 'antd';
import { FC, ReactNode } from 'react';
import { COLORS } from '~styles/variables';

export interface ModalBaseProps extends ModalProps {
  className?: string;
  children: ReactNode;
}

export const ModalBase: FC<ModalBaseProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <ModalAntd className={className} {...otherProps}>
      {children}
    </ModalAntd>
  );
};

export const Modal = styled(ModalBase)`
  & .ant-modal-title {
    font-size: 30px;
  }
  & .ant-modal-content {
    background: ${COLORS.strongBlack};
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

  & .ant-modal-footer {
    margin-top: 30px;
  }

  & .ant-btn {
    font-size: 18px;
    height: 40px;
  }
`;
