import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchBar({ search, setSearch }: Props) {
  return (
    <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Tìm kiếm sản phẩm..."
      prefix={<SearchOutlined />}
      allowClear
      className="mb-4"
      size="large"
      style={{ borderRadius: '8px' }}
    />
  );
}
