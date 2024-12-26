// components/JobsList.tsx
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface JobPosition {
  id: string; // Add this
  title: string;
  type: string;
  formUrl: string;
}

interface JobCategory {
  id: string; // Add this
  category: string;
  positions: JobPosition[];
}
const JobsList = () => {
    const jobs: JobCategory[] = [
      {
        id: "marketing",
        category: "Marketing",
        positions: [
          {
            id: "head-of-marketing",
            title: "Head of Marketing",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpmG-cnTxNT7lUBQIcQzTBBFWkxD8rCbo6rQKkvC8CXH59Bg/viewform"
          }
        ]
      },
    {
      id: "multimedia",
      category: "Truyền Thông Đa Phương Tiện",
      positions: [
        {
          id: "video-editor",
          title: "Video Editor",
          type: "Remote",
          formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPwoXsfh65q8hAyhezDJwpWeY2hZYHOoroYk46fNyrpBdxZw/viewform" 
        }
      ]
    },
    {
        id: "designer",
        category: "Thiết Kế Đồ Hoạ",
        positions: [
          {
            id: "graphic-designer",
            title: "Designer",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd-vwGnl7WDH9yLSrcs_CDhSubqhb6ptJsG_MgEOmOAKIbTAg/viewform" 
          }
        ]
      },

      {
        id: "manager",
        category: "Quản Lý Kinh Doanh",
        positions: [
          {
            id:"manager",
            title: "Business Manager",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeibdHJTs_hlppC4EyxG6E4M3ccWLLeGjqaLBhj85_c233HWw/viewform" 
          },
          {
            id: "assistant-manager",
            title: "Trợ lý kinh doanh",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerSnt8V4tm9I87p--cfjx8TY3RP7nXM8ibZKkWaVWsGWZM-g/viewform" 
          }
        ]
      },
      {
        id: "law",
        category: "Pháp Lý",
        positions: [
          {
            id: "law",
            title: "Tuyển dụng team Pháp lý",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfdJn8fIIuU2RZm_Cmd86yL4f2fKxRDNuhGCxQrZXDZDIChxQ/viewform" 
          }
        ]
      },
  ];

  return (
    <div id="jobs-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {jobs.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.positions.map((job) => (
                <Link 
                  key={job.id}
                  href={`/jobs/${category.id}/${job.id}`}
                  className="block group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl text-gray-500 mb-2">
                        {job.title}
                      </h3>
                      <p className="text-black">{job.type}</p>
                    </div>
                    <ArrowRight 
                      className="text-gray-400 group-hover:text-black transition-colors"
                      size={24}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;