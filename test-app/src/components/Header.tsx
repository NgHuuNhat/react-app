import React from 'react';
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    SearchOutlined,
    CompassOutlined,
    PlaySquareOutlined,
    MessageOutlined,
    HeartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Badge } from 'antd';
import { useFavorites } from '../contexts/FavoritesContext';

export default function Header() {
    const { favorites } = useFavorites();

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
    ];

    return (
        <nav className="p-3 shadow sticky top-0 z-50 bg-white">
            <div className="container flex justify-center gap-10">
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.to}
                        className="
                            flex items-center gap-3 
                            py-2 px-4 rounded-lg 
                            hover:bg-gray-100 transition 
                            no-underline hover:no-underline 
                            text-black
                        "
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-base hidden sm:inline">{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
