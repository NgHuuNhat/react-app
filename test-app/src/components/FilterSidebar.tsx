import { Button, Space } from 'antd';

interface Props {
  filter: 'all' | '<500' | '500-1000' | '>1000';
  setFilter: (value: 'all' | '<500' | '500-1000' | '>1000') => void;
}

export function FilterSidebar({ filter, setFilter }: Props) {
  return (
    <div className="">
      <Space wrap size={[12, 12]}>
        <Button
          onClick={() => setFilter('all')}
          style={{
            backgroundColor: filter === 'all' ? 'black' : undefined,
            color: filter === 'all' ? 'white' : undefined,
            borderColor: filter === 'all' ? 'black' : undefined,
          }}
          className="no-outline"
        >
          Tất cả
        </Button>
        <Button
          onClick={() => setFilter('<500')}
          style={{
            backgroundColor: filter === '<500' ? 'black' : undefined,
            color: filter === '<500' ? 'white' : undefined,
            borderColor: filter === '<500' ? 'black' : undefined,
          }}
          className="no-outline"
        >
          {'< 500k'}
        </Button>
        <Button
          onClick={() => setFilter('500-1000')}
          style={{
            backgroundColor: filter === '500-1000' ? 'black' : undefined,
            color: filter === '500-1000' ? 'white' : undefined,
            borderColor: filter === '500-1000' ? 'black' : undefined,
          }}
          className="no-outline"
        >
          500k - 1tr
        </Button>
        <Button
          onClick={() => setFilter('>1000')}
          style={{
            backgroundColor: filter === '>1000' ? 'black' : undefined,
            color: filter === '>1000' ? 'white' : undefined,
            borderColor: filter === '>1000' ? 'black' : undefined,
          }}
          className="no-outline"
        >
          {'> 1tr'}
        </Button>
        <Button
          type="dashed"
          onClick={() => alert('Đang gợi ý sản phẩm phù hợp...')}
          className="no-outline"
        >
          🧠 Gợi ý phù hợp
        </Button>
      </Space>
    </div>
  );
}
