// components/Hero.tsx
"use client";
import { Search } from 'lucide-react';

const Hero = () => {
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs-section');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#1e2875] min-h-screen">
      {/* Mobile-first design */}
      <div className="relative h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full lg:w-1/2 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              PIAZ CAPITAL CAREERS
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Tham gia vào Piaz Capital, bạn sẽ tham gia vào một hành trình đầy 
              thách thức nhưng cực kỳ hấp dẫn, nơi sự mới mẻ không bao giờ lỗi 
              thời và mỗi ngày là một dịp để dẫn đầu xu hướng toàn cầu.
            </p>

            <button
              onClick={scrollToJobs}
              className="bg-white text-[#1e2875] px-8 py-3 rounded-md font-semibold 
                       hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              View Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;