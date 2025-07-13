import { Button, Space } from 'antd';
import { getSuggestions } from '../api/suggestionApi';
import { Product } from '../types/Product';

interface Props {
  filter: 'all' | '<500' | '500-1000' | '>1000';
  setFilter: (value: 'all' | '<500' | '500-1000' | '>1000') => void;
  setProducts: (value: Product[]) => void;
  setIsSuggestion: React.Dispatch<React.SetStateAction<boolean>>;
  setSuggestedProducts: (value: Product[]) => void;
}

const FILTER_OPTIONS = [
  { label: 'Tất cả', value: 'all' },
  { label: '< 500k', value: '<500' },
  { label: '500k - 1tr', value: '500-1000' },
  { label: '> 1tr', value: '>1000' },
] as const;

export function FilterSidebar({ filter, setFilter, setIsSuggestion, setSuggestedProducts }: Props) {
  return (
    <div>
      <Space wrap size={[12, 12]}>
        {FILTER_OPTIONS.map(({ label, value }) => (
          <Button
            key={value}
            onClick={() => {
              setFilter(value);
              setIsSuggestion(false);
            }}
            style={{
              backgroundColor: filter === value ? 'black' : undefined,
              color: filter === value ? 'white' : undefined,
              borderColor: filter === value ? 'black' : undefined,
            }}
            className="no-outline"
          >
            {label}
          </Button>
        ))}
        <Button
          type="dashed"
          className="no-outline"
          onClick={async () => {
            const result = await getSuggestions('xxx');
            setSuggestedProducts(result);
            setIsSuggestion(true);
          }}
        >
          🧠 Gợi ý phù hợp
        </Button>
      </Space>
    </div>
  );
}
