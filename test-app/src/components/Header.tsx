import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    HomeOutlined,
    HeartOutlined,
    HistoryOutlined,
} from '@ant-design/icons';
import { Badge } from 'antd';
import { useFavorites } from '../contexts/FavoritesContext';

export default function Header() {
    const { favorites } = useFavorites();
    const location = useLocation();

    const menuItems = [
        { to: '/', icon: <HomeOutlined />, label: 'Trang chủ' },
        {
            to: '/favorites',
            icon: (
                <Badge count={favorites.length || 0} showZero={true} size="small">
                    <HeartOutlined style={{ fontSize: 20 }} />
                </Badge>
            ),
            label: 'Yêu thích',
        },
        {
            to: '/histories',
            icon: <HistoryOutlined />,
            label: 'Lịch sử xem',
        },
    ];

    return (
        <nav className="p-1 shadow sticky top-0 z-50 bg-white">
            <div className="container flex justify-center gap-10">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.to;

                    return (
                        <Link
                            key={item.label}
                            to={item.to}
                            className={`
        flex items-center gap-3 py-2 px-4 rounded-lg 
        hover:bg-gray-100 transition no-underline hover:no-underline text-black
        ${isActive ? 'font-extrabold text-black' : 'text-gray-600'}
    `}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-base hidden sm:inline">{item.label}</span>
                        </Link>

                    );
                })}
            </div>
        </nav>
    );
}
