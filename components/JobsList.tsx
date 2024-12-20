// components/JobsList.tsx
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface JobPosition {
    title: string;
    type: string;
    formUrl: string;
  }

  interface JobCategory {
    category: string;
    positions: JobPosition[];
  }
const JobsList = () => {
    const jobs: JobCategory[] = [
    {
      category: "Marketing",
      positions: [
        {
          title: "Head of Marketing",
          type: "Remote",
          formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpmG-cnTxNT7lUBQIcQzTBBFWkxD8rCbo6rQKkvC8CXH59Bg/viewform"
        }
      ]
    },
    {
      category: "Truyền Thông Đa Phương Tiện",
      positions: [
        {
          title: "Video Editor",
          type: "Remote",
          formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPwoXsfh65q8hAyhezDJwpWeY2hZYHOoroYk46fNyrpBdxZw/viewform" 
        }
      ]
    },
    {
        category: "Thiết Kế Đồ Hoạ",
        positions: [
          {
            title: "Designer",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd-vwGnl7WDH9yLSrcs_CDhSubqhb6ptJsG_MgEOmOAKIbTAg/viewform" 
          }
        ]
      },

      {
        category: "Quản Lý Kinh Doanh",
        positions: [
          {
            title: "Business Manager",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd-vwGnl7WDH9yLSrcs_CDhSubqhb6ptJsG_MgEOmOAKIbTAg/viewform" 
          },
          {
            title: "Trợ lý kinh doanh",
            type: "Remote",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerSnt8V4tm9I87p--cfjx8TY3RP7nXM8ibZKkWaVWsGWZM-g/viewform" 
          }
        ]
      },
      {
        category: "Pháp Lý",
        positions: [
          {
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
        {jobs.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.positions.map((job, jobIdx) => (
                <Link 
                  key={jobIdx}
                  href={job.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl text-gray-500 mb-2">
                        {job.title}
                      </h3>
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