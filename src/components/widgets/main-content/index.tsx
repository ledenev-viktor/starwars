import { Flex, Typography } from 'antd';
import { Input } from '~ui';
import { useScreenDetector } from '~hooks/useScreenDetector';
import { ListDesktop } from './listDesktop';
import { ListMobile } from './listMobile';
import { useDebounceSearch } from '~hooks/useDebounceSearch';

export const MainContent = () => {
  const { isMobile } = useScreenDetector();
  const { searchValue, setSearchValue, debouncedSearchValue } =
    useDebounceSearch(300);

  return (
    <Flex vertical gap={20}>
      <Typography.Title
        style={{ color: '#fff', textAlign: 'center', margin: 0 }}
        level={1}
      >
        Stars Wars
      </Typography.Title>
      <Input
        placeholder="Who is the skywalker's father?"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
      {isMobile ? (
        <ListMobile searchValue={debouncedSearchValue} />
      ) : (
        <ListDesktop searchValue={debouncedSearchValue} />
      )}
    </Flex>
  );
};
