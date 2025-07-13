import { useState } from 'react';
import { Product } from '../types/Product';
import { Button, Modal, Rate, Card } from 'antd';
import { HeartFilled, HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

interface Props {
    product: Product;
    onToggleFavorite: () => void;
    isLoading: boolean;
    isFavorite: boolean;
    onHistory: () => void;
}

export function ProductCard({ product, onToggleFavorite, isLoading, isFavorite, onHistory }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card
                hoverable
                cover={
                    <img
                        alt={product.name}
                        src={product.image || 'https://placehold.co/400x300?text=No+Image+Available'}
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                }
                actions={[
                    <Button
                        className="no-outline"
                        key="detail"
                        type="default"
                        onClick={() => {
                            showModal();
                            onHistory();
                        }}
                        style={{ borderRadius: '9999px' }}
                        icon={<SearchOutlined />}
                    >
                        Xem chi tiết
                    </Button>,
                    <Button
                        key="favorite"
                        loading={isLoading}
                        onClick={onToggleFavorite}
                        type="text"
                        className="no-outline"
                        style={{
                            fontSize: '20px',
                            color: isFavorite ? 'red' : 'gray',
                        }}
                        icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                    />,
                ]}

            >
                <Card.Meta
                    title={<span className="font-semibold">{product.name}</span>}
                    description={
                        <>
                            <p className="text-gray-500">{product.price.toLocaleString()} đ</p>
                            <p className="text-gray-400 line-clamp-2">{product.description}</p>
                        </>
                    }
                />
            </Card>

            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                width={1400}
                closable
            >
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2">
                        <img
                            src={product.image || 'https://placehold.co/400x300?text=No+Image+Available'}
                            alt={product.name}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <p className="text-red-500 text-xl">{product.price.toLocaleString()} đ</p>
                        <p className="leading-relaxed tracking-wide text-gray-700">{product.description}</p>
                        <p className="text-yellow-500 text-lg">Đánh giá: ★★★★☆</p>

                        <Button
                            size="large"
                            className="rounded-full no-outline p-5"
                            color="default"
                            variant="solid"
                            icon={<ShoppingCartOutlined />}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
