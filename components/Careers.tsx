// components/Careers.tsx
const Careers = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-black mb-6">
            CAREERS
          </h2>
          
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Chúng tôi đang tìm kiếm những tài năng để cùng nhau phát triển thị trường mới. Với sự phát triển không ngừng của hệ sinh thái Piaz Capital ngày càng đa dạng sản phẩm và ngành nghề. Bạn sẽ có cơ hội tham gia vào những dự án đầy thử thách và mang tính đột phá. Chúng tôi không chỉ mang đến cho bạn thu nhập hấp dẫn mà còn là bệ phóng để bạn phát triển, để bạn toả sáng!
          </p>
        </div>

        {/* Decorative gradient line */}
        <div className="mt-20">
          <div className="h-px bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Careers;