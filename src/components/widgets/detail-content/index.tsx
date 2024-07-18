import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Flex } from 'antd';
import { BreadCrump, BreadCrumpLink, Spin } from '~ui';
import { EditOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useFetchPeopleDetail, useLocalStorageState } from '~hooks';
import { COLORS } from '~styles/variables';
import { ModalHero } from './modalEdit';
import { HeroProperty } from './hero-property';

type DetailInfo = {
  [key: string]: string;
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
    if (detailDataState || !detailData) return;

    setDetailDataState(detailData);
  }, [isLoadingDetail]);

  useEffect(() => {
    if (!detailDataState) return;

    setEditData(detailDataState);
  }, [detailDataState]);

  const showModal = () => {
    console.log('show', isModalOpen);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setDetailDataState(editData);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeDetailState = (value: string, key: string) => {
    if (!detailDataState) return;
    setEditData({
      ...editData,
      [key]: value,
    });
  };

  if (isLoadingDetail) {
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );
  }

  return (
    <Flex className={className} vertical>
      {detailDataState && (
        <>
          <BreadCrump
            items={[
              { title: <BreadCrumpLink href={'/'} label="Home" /> },
              { title: <BreadCrumpLink label={detailDataState.name} /> },
            ]}
          />
          <Flex className="hero-property-list" vertical>
            <HeroProperty label="name" value={detailDataState.name} />
            <HeroProperty label="mass" value={detailDataState.mass} />
            <HeroProperty
              label="hair color"
              value={detailDataState.hair_color}
            />
            <HeroProperty
              label="skin color"
              value={detailDataState.skin_color}
            />
            <HeroProperty
              label="birth year"
              value={detailDataState.birth_year}
            />
            <HeroProperty label="gender" value={detailDataState.gender} />
          </Flex>
        </>
      )}
      {editData && (
        <>
          <Button className="edit-button" onClick={showModal}>
            <EditOutlined />
          </Button>
          <ModalHero
            modalProps={{
              title: 'Edits',
              open: isModalOpen,
              onOk: handleOk,
              onCancel: handleCancel,
            }}
            contentProps={{
              onChangeDetailState,
              editData,
            }}
          />
        </>
      )}
    </Flex>
  );
};

export const DetailContent = styled(DetailContentBase)`
  position: relative;

  & .hero-property-list {
    min-width: 300px;
    margin: 15px auto 0;
    @media screen and (max-width: 767px) {
      min-width: auto;
    }
  }

  & .edit-button {
    position: absolute;
    top: -30px;
    right: -10px;
    background: ${COLORS.lucentBlack};
    color: ${COLORS.lucentWhite};
    border-color: ${COLORS.lucentWhite};
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:not(:disabled):not(.ant-btn-disabled):hover {
      background: ${COLORS.lucentBlack};
      color: ${COLORS.white};
      border-color: ${COLORS.white};
    }
  }
`;
