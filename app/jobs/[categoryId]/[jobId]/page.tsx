// app/jobs/[categoryId]/[jobId]/page.tsx
"use client";
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Briefcase} from 'lucide-react';

interface PageProps {
    params: Promise<{ categoryId: string; jobId: string }>
  }

  interface JobDetail {
    title: string;
    type: string;
    category: string;
    description: string[];
    responsibilities?: string[];
    requirements?: {
      professional: string[];
      soft: string[];
    } | string[];
    benefits?: string[];
    formUrl: string;
  }

const jobDetails: { [key: string]: JobDetail } = {
  'head-of-marketing': {
    title: "Head of Marketing",
    type: "Remote",
    category: "Marketing",
    description: [
      "Piaz Capital là một hệ sinh thái định hướng toàn cầu, kết nối những cá nhân tài năng và các dự án đột phá trong lĩnh vực Online Business, Affiliate Marketing. Với sự hiện diện đa quốc gia và tinh thần đổi mới, phát triển không ngừng.",
      "Là người đứng đầu bộ phận Marketing của tập đoàn, bạn sẽ chịu trách nhiệm lên kế hoạch, triển khai và quản lý tất cả các chiến dịch Marketing nhằm đạt được các mục tiêu đã đề ra. Bạn sẽ đóng vai trò quan trọng trong việc xây dựng và củng cố thương hiệu, tăng trưởng doanh số và tạo dựng mối quan hệ bền vững với khách hàng.",
    ],
    responsibilities: [
      "Lập kế hoạch Marketing: Xây dựng và triển khai chiến lược Marketing tổng thể, bao gồm cả Marketing truyền thống và Marketing kỹ thuật số.",
      "Quản lý đội ngũ Marketing: Tuyển dụng, đào tạo và quản lý đội ngũ Marketing, đảm bảo hiệu quả làm việc và đạt được mục tiêu.",
      "Quản lý ngân sách: Quản lý ngân sách Marketing hiệu quả, đảm bảo tối ưu hóa chi phí và đạt được ROI cao nhất.",
      "Nghiên cứu thị trường: Phân tích, nghiên cứu thị trường, đề xuất hướng phát triển.",
      "Phân tích và đánh giá hiệu quả: Theo dõi, phân tích và đánh giá hiệu quả của các chiến dịch Marketing, đưa ra báo cáo và đề xuất cải tiến.",
      "Xây dựng thương hiệu: Xây dựng và quản lý tất cả các thương hiệu của tập đoàn, đảm bảo nhận diện thương hiệu mạnh mẽ và nhất quán."
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Marketing, Quản trị Kinh doanh hoặc các ngành liên quan.",
      "Ít nhất 3 năm kinh nghiệm ở vị trí quản lý cấp cao trong lĩnh vực Marketing. Hiểu biết sâu rộng về các kênh Marketing truyền thống và kỹ thuật số. ",
      "Kỹ năng lãnh đạo, quản lý đội ngũ và giải quyết vấn đề.Kỹ năng phân tích dữ liệu và đưa ra quyết định.",
      "Kỹ năng giao tiếp và thuyết trình tốt.",
      "Tiếng Anh tốt, giỏi research."
    ],
    benefits: [
      "Mức lương hấp dẫn, cạnh tranh với thị trường.",
      "Nhận 100% lương trong thời gian thử việc.",
      "Thưởng theo dự án, thưởng đạt hiệu quả công việc.",
      "Làm việc remote, tự chủ không gian làm việc.",
      "Cơ hội thăng tiến và phát triển nghề nghiệp.",
      "Môi trường làm việc chuyên nghiệp, năng động và thân thiện.",
      "Các chế độ phúc lợi đầy đủ theo quy định.",
      "Luôn được học tập và đào tạo nâng cao kỹ năng.",
      "Được làm việc/hướng dẫn trực tiếp từ Son Piaz."
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpmG-cnTxNT7lUBQIcQzTBBFWkxD8rCbo6rQKkvC8CXH59Bg/viewform"
  },

  'video-editor': {
    title: "Video Editor",
    type: "Remote",
    category: "Truyền Thông Đa Phương Tiện",
    description: [
      "Piaz Capital là một hệ sinh thái định hướng toàn cầu, kết nối những cá nhân tài năng và các dự án đột phá trong lĩnh vực Online Business, Affiliate Marketing. Với sự hiện diện đa quốc gia và tinh thần đổi mới, phát triển không ngừng.",
      "Là một Video Editor, bạn sẽ chịu trách nhiệm sản xuất và chỉnh sửa video, tạo nội dung sáng tạo, quản lý dự án video để phục vụ cho các chiến dịch Marketing của công ty."
    ],
    responsibilities: [
      "Biên tập video: Cắt ghép, sắp xếp các đoạn phim, âm thanh, hình ảnh để tạo ra các video hoàn chỉnh, mạch lạc và truyền tải thông điệp hiệu quả.",
      "Thiết kế đồ họa: Tạo các hiệu ứng chuyển cảnh, đồ họa động, text motion graphics để tăng tính hấp dẫn cho video.",
      "Quản lý dự án: Lên kế hoạch, theo dõi tiến độ và đảm bảo các dự án video được hoàn thành đúng thời hạn và chất lượng.",
      "Phối hợp: Làm việc chặt chẽ với các bộ phận khác như Marketing, Sales, để đảm bảo video đáp ứng đúng yêu cầu và mục tiêu của dự án."
    ],
    requirements: {
      professional: [
        "Ngoài thành thạo các phần mềm biên tập video chuyên nghiệp. Chúng tôi cần thêm các kỹ năng sau:",
        "Nghiên cứu các kênh cùng chủ đề, đưa ra phân tích, nhận định và đề xuất.",
        "Khả năng lên kịch bản phù hợp với từng nền tảng.",
        "Có kinh nghiệm về SEO, đặt tiêu đề hấp dẫn.",
        "Có kiến thức về các định dạng video, âm thanh và kỹ thuật nén."
      ],
      soft: [
        "Có tư duy sáng tạo và khả năng nắm bắt xu hướng",
        "Có khả năng tự học, làm việc độc lập và phối hợp đội nhóm tốt.",
        "Tư duy tốt, ham học hỏi, thái độ cầu tiến",
        "Chịu được áp lực công việc, làm việc độc lập và theo nhóm.",
        "Có tinh thần trách nhiệm cao và thái độ làm việc chuyên nghiệp.",
        "Khả năng giao tiếp tốt và làm việc hiệu quả."
      ],
    },
    benefits: [
      "Mức lương hấp dẫn, cạnh tranh với thị trường.",
      "Nhận 100% lương trong thời gian thử việc.",
      "Thưởng theo dự án, thưởng đạt hiệu quả công việc.",
      "Làm việc remote, tự chủ không gian làm việc.",
      "Cơ hội thăng tiến và phát triển nghề nghiệp.",
      "Môi trường làm việc chuyên nghiệp, năng động và thân thiện.",
      "Các chế độ phúc lợi đầy đủ theo quy định.",
      "Luôn được học tập và đào tạo nâng cao kỹ năng.",
      "Được làm việc/hướng dẫn trực tiếp từ Son Piaz."
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPwoXsfh65q8hAyhezDJwpWeY2hZYHOoroYk46fNyrpBdxZw/viewform"
  },

  // Add other job details following the same pattern
  'graphic-designer': {
    title: "Graphic Designer",
    type: "Remote",
    category: "Thiết Kế Đồ Hoạ",
    description: [
      "Piaz Capital là một hệ sinh thái định hướng toàn cầu, kết nối những cá nhân tài năng và các dự án đột phá trong lĩnh vực Online Business, Affiliate Marketing. Với sự hiện diện đa quốc gia và tinh thần đổi mới, phát triển không ngừng.",
      "Là một Designer, bạn sẽ chịu trách nhiệm thiết kế các ấn phẩm truyền thông, bao gồm hình ảnh, banner, infographic, để phục vụ cho các chiến dịch Marketing của công ty."
    ],
    responsibilities: [
      "Thiết kế các ấn phẩm truyền thông như banner quảng cáo, poster, brochure, infographic.",
      "Thiết kế các ấn phẩm truyền thông trên các nền tảng mạng xã hội.",
      "Tham gia vào quá trình phát triển thương hiệu và xây dựng nhận diện thương hiệu.",
      "Phối hợp với các bộ phận khác để đảm bảo thiết kế phù hợp với chiến lược Marketing tổng thể.",
    ],
    requirements: [
      "Tối thiểu 1 năm kinh nghiệm về thiết kế.",
      "Có kinh nghiệm sử dụng thành thạo các phần mềm thiết kế đồ họa.",
      "Có khả năng sáng tạo, tư duy thẩm mỹ và khả năng nắm bắt xu hướng thiết kế.",
      "Có khả năng làm việc độc lập và theo nhóm.",
      "Chịu được áp lực công việc.",
    ],
    benefits: [
      "Mức lương hấp dẫn, cạnh tranh với thị trường.",
      "Nhận 100% lương trong thời gian thử việc.",
      "Thưởng theo dự án, thưởng đạt hiệu quả công việc.",
      "Làm việc remote, tự chủ không gian làm việc.",
      "Cơ hội thăng tiến và phát triển nghề nghiệp.",
      "Môi trường làm việc chuyên nghiệp, năng động và thân thiện.",
      "Các chế độ phúc lợi đầy đủ theo quy định.",
      "Luôn được học tập và đào tạo nâng cao kỹ năng.",
      "Được làm việc/hướng dẫn trực tiếp từ Son Piaz."
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd-vwGnl7WDH9yLSrcs_CDhSubqhb6ptJsG_MgEOmOAKIbTAg/viewform"
  },
  'manager':{
    title: "Business Manager",
    type: "Remote",
    category: "Quản Lý Kinh Doanh",
    description: [
      "Piaz Capital là một hệ sinh thái định hướng toàn cầu, kết nối những cá nhân tài năng và các dự án đột phá trong lĩnh vực Online Business, Affiliate Marketing. Với sự hiện diện đa quốc gia và tinh thần đổi mới, phát triển không ngừng.",
      "Là một Business Manager, bạn sẽ chịu trách nhiệm phát triển các cơ hội kinh doanh mới dựa trên nguồn lực của Son Piaz và Piaz Capital. Bạn sẽ đóng vai trò quan trọng trong việc mở rộng thị trường, tìm kiếm đối tác chiến lược và thúc đẩy tăng trưởng doanh thu."
    ],
    responsibilities: [
      "Xác định và phát triển các cơ hội kinh doanh mới.",
      "Tìm kiếm và xây dựng mối quan hệ với các đối tác chiến lược.",
      "Thực hiện các cuộc gặp gỡ, đàm phán và ký kết hợp đồng.",
      "Quản lý và theo dõi tiến độ của các dự án kinh doanh.",
      "Phân tích thị trường và đánh giá cơ hội kinh doanh.",
      "Quản lý đội ngũ kinh doanh."
    ],
    requirements: [
      "Ít nhất 3 năm kinh nghiệm trong lĩnh vực kinh doanh hoặc tư vấn kinh doanh.",
      "Kỹ năng giao tiếp và thuyết trình tốt.",
      "Kỹ năng đàm phán và thuyết phục.",
      "Khả năng quản lý thời gian và ưu tiên công việc.",
      "Tiếng Anh thành thạo."
    ],
    benefits: [
      "Mức lương hấp dẫn, cạnh tranh với thị trường.",
      "Nhận 100% lương trong thời gian thử việc.",
      "Thưởng theo dự án, thưởng đạt hiệu quả công việc.",
      "Làm việc remote, tự chủ không gian làm việc.",
      "Cơ hội thăng tiến và phát triển nghề nghiệp.",
      "Môi trường làm việc chuyên nghiệp, năng động và thân thiện.",
      "Các chế độ phúc lợi đầy đủ theo quy định.",
      "Luôn được học tập và đào tạo nâng cao kỹ năng.",
      "Được làm việc/hướng dẫn trực tiếp từ Son Piaz."
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeibdHJTs_hlppC4EyxG6E4M3ccWLLeGjqaLBhj85_c233HWw/viewform"
  },
  'assistant-manager': {
    title: "Trợ lý kinh doanh",
    type: "Remote",
    category: "Quản Lý Kinh Doanh",
    description: [
      "Piaz Capital là một hệ sinh thái định hướng toàn cầu, kết nối những cá nhân tài năng và các dự án đột phá trong lĩnh vực Online Business, Affiliate Marketing. Với sự hiện diện đa quốc gia và tinh thần đổi mới, phát triển không ngừng.",
      "Là một Assistant Manager, bạn sẽ chịu trách nhiệm hỗ trợ cho các hoạt động kinh doanh của Son Piaz và Piaz Capital."
    ],
    responsibilities: [
      "Hỗ trợ Business Manager trong việc lên kế hoạch và tổ chức các cuộc họp, sự kiện.",
      "Thực hiện các nhiệm vụ hành chính như sắp xếp lịch hẹn, trả lời email, chuẩn bị tài liệu.",
      "Hỗ trợ trong việc tìm kiếm và tiếp cận khách hàng tiềm năng.",
      "Theo dõi và quản lý các dự án kinh doanh.",
      "Hỗ trợ trong việc chuẩn bị các báo cáo và tài liệu kinh doanh.",
      "Đề xuất phát triển các dự án kinh doanh."
    ],
    requirements: [
      "Có kinh nghiệm làm việc trong lĩnh vực kinh doanh hoặc hỗ trợ quản lý.",
      "Kỹ năng giao tiếp và tổ chức tốt.",
      "Khả năng làm việc độc lập và theo nhóm.",
      "Chịu được áp lực công việc.",
      "Tiếng Anh tốt là một lợi thế."
    ],
    benefits: [
      "Mức lương hấp dẫn, cạnh tranh với thị trường.",
      "Nhận 100% lương trong thời gian thử việc.",
      "Thưởng theo dự án, thưởng đạt hiệu quả công việc.",
      "Làm việc remote, tự chủ không gian làm việc.",
      "Cơ hội thăng tiến và phát triển nghề nghiệp.",
      "Môi trường làm việc chuyên nghiệp, năng động và thân thiện.",
      "Các chế độ phúc lợi đầy đủ theo quy định.",
      "Luôn được học tập và đào tạo nâng cao kỹ năng.",
      "Được làm việc/hướng dẫn trực tiếp từ Son Piaz."
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerSnt8V4tm9I87p--cfjx8TY3RP7nXM8ibZKkWaVWsGWZM-g/viewform"
  },
  'law':{
    title: "Tuyển dụng team Pháp lý",
    type: "Remote",
    category: "Pháp Lý",
    description: [
      "Piaz Capital là một hệ sinh thái định hướng toàn cầu, kết nối những cá nhân tài năng và các dự án đột phá trong lĩnh vực Online Business, Affiliate Marketing. Với sự hiện diện đa quốc gia và tinh thần đổi mới, phát triển không ngừng.",
      "Chúng tôi đang tìm kiếm các chuyên gia pháp lý để xây dựng một hệ thống hỗ trợ toàn diện, giúp các thành viên hoạt động một cách hiệu quả và tuân thủ pháp luật."
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfdJn8fIIuU2RZm_Cmd86yL4f2fKxRDNuhGCxQrZXDZDIChxQ/viewform"
  }
};

export default function JobDetail({ params }: PageProps) {
    const resolvedParams = use(params);
    const job = jobDetails[resolvedParams.jobId];
    
    if (!job) return <div>Job not found</div>;
  

  return (
    <div className="text-black min-h-screen bg-gray-50 pt-20">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-black hover:text-gray-700 mb-6">
        <ArrowLeft className="mr-2" size={20} />
        View all jobs
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-black">{job.title}</h1>

      <div className="flex flex-wrap gap-4 mb-8 text-black">
        <span className="flex items-center gap-2">
          <MapPin size={18} /> {job.type}
        </span>
        <span className="flex items-center gap-2">
          <Briefcase size={18} /> {job.category} 
        </span>
      </div>

   <div className="bg-white rounded-lg p-8 shadow-sm space-y-8 text-black">
  {/* Description */}
  <div>
    {job.description.map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    ))}
  </div>

  {/* Responsibilities - only show if exists and not empty */}
  {job.responsibilities && job.responsibilities.length > 0 && (
    <div>
      <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2">
        {job.responsibilities.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
    </div>
  )}

  {/* Requirements - check if it's an object with professional/soft skills or an array */}
  {job.requirements && (
    <div>
      <h2 className="text-xl font-bold mb-4">Basic Requirements</h2>
      {/* If requirements is an object with professional/soft skills */}
      {typeof job.requirements === 'object' && !Array.isArray(job.requirements) && 'professional' in job.requirements ? (
        <>
          <div className="mb-6">
            <h3 className="font-bold mb-2">Kỹ năng chuyên môn:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {job.requirements.professional.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Kỹ năng mềm:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {job.requirements.soft.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        /* If requirements is a simple array */
        <ul className="list-disc pl-6 space-y-2">
          {Array.isArray(job.requirements) && job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      )}
    </div>
  )}

  {/* Benefits - only show if exists and not empty */}
  {job.benefits && job.benefits.length > 0 && (
    <div>
      <h2 className="text-xl font-bold mb-4">Benefits</h2>
      <ul className="list-disc pl-6 space-y-2">
        {job.benefits.map((benefit, idx) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>
    </div>
  )}

  <button 
    onClick={() => window.open(job.formUrl, '_blank', 'noopener,noreferrer')}
    className="block w-full text-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
  >
    Apply for this position
  </button>
</div>
</div>
</div>
  );
}
