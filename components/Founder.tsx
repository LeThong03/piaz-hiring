// components/Founder.tsx
import Image from 'next/image';

const Founder = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
          <span className="text-gray-600 mb-2 block">Founder</span>
          <h2 className="text-4xl font-bold mb-6 text-black border-b-2 border-black inline-block pb-2">
              Nguyễn Tùng Sơn
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Với việc mở rộng quan hệ đối tác quốc tế Châu Âu và Hoa Kỳ, anh Sơn không 
              chỉ khẳng định được tiềm năng to lớn của Affiliate Marketing mà còn tin tưởng 
              vào sự bùng nổ của lĩnh vực cryptocurrency và công nghệ blockchain. Sơn Piaz 
              khao khát xây dựng một công ty công nghệ có sức ảnh hưởng lớn trên thế giới, 
              mang lại giá trị đích thực thông qua đổi mới và sáng tạo.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/Founder.jpg"
              alt="Nguyễn Tùng Sơn - Founder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;