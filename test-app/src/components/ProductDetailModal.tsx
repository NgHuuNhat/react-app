import { Product } from '../types/Product';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div className="modal-open fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="modal-open p-1 bg-white text-gray-800 w-[90%] max-w-5xl rounded-xl overflow-hidden shadow-xl relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black text-3xl font-light"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold">{product.name}</h2>
            <p className="text-red-500 text-xl">{product.price.toLocaleString()} đ</p>
            <p className="leading-relaxed tracking-wide text-gray-700">{product.description}</p>
            <p className="text-yellow-500 text-lg">Đánh giá: ★★★★☆</p>

            <div className="flex gap-4 pt-8">
              <button className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                Thêm vào giỏ hàng
              </button>
              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 text-gray-800 py-3 rounded-full hover:bg-gray-100 transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
