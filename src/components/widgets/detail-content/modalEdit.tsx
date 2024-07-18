import styled from '@emotion/styled';
import { Flex, ModalProps } from 'antd';
import { Input, Modal, AutoComplete } from '~ui';
import { HeroPropertyModal } from './hero-property-modal';
import { FC } from 'react';
import { DetailInfo } from './types';

interface ModalEditBase {
  modalProps: ModalProps;
  contentProps: {
    onChangeDetailState: (value: string, name: string) => void;
    editData: DetailInfo;
  };
  className?: string;
}

export const ModalEditBase: FC<ModalEditBase> = ({
  modalProps,
  contentProps,
  className,
}) => {
  return (
    <Modal
      title={modalProps.title}
      open={modalProps.open}
      onOk={modalProps.onOk}
      onCancel={modalProps.onCancel}
    >
      <Flex gap={20} className={className} vertical>
        <HeroPropertyModal label="name">
          <Input
            value={contentProps.editData.name}
            onChange={event =>
              contentProps.onChangeDetailState(event.target.value, 'name')
            }
          />
        </HeroPropertyModal>
        <HeroPropertyModal label="mass">
          <Input
            value={contentProps.editData.mass}
            onChange={event =>
              contentProps.onChangeDetailState(event.target.value, 'mass')
            }
          />
        </HeroPropertyModal>
        <HeroPropertyModal label="hair color">
          <Input
            value={contentProps.editData.hair_color}
            onChange={event =>
              contentProps.onChangeDetailState(event.target.value, 'hair_color')
            }
            type="color"
          />
        </HeroPropertyModal>
        <HeroPropertyModal label="skin color">
          <Input
            value={contentProps.editData.skin_color}
            onChange={event =>
              contentProps.onChangeDetailState(event.target.value, 'skin_color')
            }
            type="color"
          />
        </HeroPropertyModal>
        <HeroPropertyModal label="birth year">
          <Input
            value={contentProps.editData.birth_year}
            onChange={event =>
              contentProps.onChangeDetailState(event.target.value, 'birth_year')
            }
          />
        </HeroPropertyModal>
        <HeroPropertyModal label="gender">
          <AutoComplete
            options={[{ value: 'Male' }, { value: 'Female' }]}
            placeholder=""
            onChange={value =>
              contentProps.onChangeDetailState(value, 'gender')
            }
            filterOption={(inputValue, option) => {
              if (!option!.value || typeof option!.value === 'number')
                return false;

              return (
                option!.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              );
            }}
          />
        </HeroPropertyModal>
      </Flex>
    </Modal>
  );
};

export const ModalEdit = styled(ModalEditBase)``;
