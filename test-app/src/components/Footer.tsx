export function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">Về chúng tôi</h3>
                        <p className="text-sm leading-6">
                            Đây là trang web demo sàn thương mại điện tử giáo dục sử dụng AI giúp bạn tìm kiếm và mua sắm sản phẩm dễ dàng hơn.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Liên hệ</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Email: nhat200901@gmail.com</li>
                            <li>Hotline: 0985 62 70 61</li>
                            <li>Địa chỉ: Quận Phú Nhuận, TP.HCM</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Kết nối</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/znmarlik" className="hover:text-blue-500">Facebook</a>
                            <a href="https://www.instagram.com/znmarlikbb/" className="hover:text-blue-500">Instagram</a>
                            <a href="#" className="hover:text-blue-500">YouTube</a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t pt-4 text-center text-xs text-gray-400">
                    © 2025 Sàn Giáo Dục AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
