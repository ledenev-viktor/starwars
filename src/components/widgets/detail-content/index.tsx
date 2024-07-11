import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Flex, Spin } from 'antd';
import { Input, Modal, FormEdits, NavLink } from '../../ui';
import { EditOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useFetchPeopleDetail } from '../../../api/hooks/useFetchPeopleDetail';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';
import { COLORS } from '../../../styles/variables';

type DetailInfo = {
  [key: string]: string;
};

const detailSchema: DetailInfo = {
  name: 'name',
  mass: 'mass',
  hair_color: 'hair color',
  skin_color: 'skin color',
  birth_year: 'birth year',
  gender: 'gender',
};

const DetailContentBase = ({ className }: { className?: string }) => {
  const { id } = useParams();

  const { data: detailData, isLoading: isLoadingDetail } =
    useFetchPeopleDetail(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [detailDataState, setDetailDataState] =
    useLocalStorageState<DetailInfo | null>(id!, null);

  const [editData, setEditData] = useState<DetailInfo | null>(null);

  useEffect(() => {
    if (detailDataState) return;
    if (!detailData) return;

    setDetailDataState(detailData);
  }, [isLoadingDetail]);

  useEffect(() => {
    if (!detailDataState) return;

    setEditData(detailDataState);
  }, [detailDataState]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setDetailDataState(editData);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeDetailState = (
    event: ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    if (!detailDataState) return;
    setEditData({
      ...detailDataState,
      [key]: event.target.value,
    });
  };

  if (isLoadingDetail) {
    return <Flex justify='center'><Spin/></Flex>;
  }

  return (
    <Flex className={className} vertical>
      {detailDataState && (
        <Flex style={{paddingRight: '50px'}} vertical>
          {Object.entries(detailSchema).map(([key, value]) => (
            <div key={key} style={{ color: '#fff', fontSize: '18px' }}>
              <span>{value}: </span>
              <span>{detailDataState[key]}</span>
            </div>
          ))}
        </Flex>
      )}
      <NavLink href={'/'}>Home</NavLink>
      {editData && (
        <>
          <Button className="edit-button" onClick={showModal}>
            <EditOutlined />
          </Button>
          <Modal
            title="Edits"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <FormEdits
              items={Object.entries(detailSchema)}
              renderItem={([key, value]) => (
                <div key={key}>
                  <span>{value}: </span>
                  <Input
                    value={editData[key]}
                    onChange={event => onChangeDetailState(event, key)}
                  />
                </div>
              )}
            />
          </Modal>
        </>
      )}
    </Flex>
  );
};

export const DetailContent = styled(DetailContentBase)`
  position: relative;

  & .edit-button {
    position: absolute;
    top: 0;
    right: 0;
    background: ${COLORS.lucentBlack};
    color: ${COLORS.lucentWhite};
    border-color: ${COLORS.lucentWhite};

    &:not(:disabled):not(.ant-btn-disabled):hover {
      background: ${COLORS.lucentBlack};
      color: ${COLORS.white};
      border-color: ${COLORS.white};
    }
  }
`;
