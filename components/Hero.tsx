// components/Hero.tsx
"use client";


const Hero = () => {
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs-section');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          <div className="w-1/2 text-white">
            <h1 className="text-5xl font-bold mb-6">
                PIAZ CAPITAL CAREERS
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Tham gia vào Piaz Capital, bạn sẽ tham gia vào một hành trình đầy 
                thách thức nhưng cực kỳ hấp dẫn, nơi sự mới mẻ không bao giờ lỗi 
                thời và mỗi ngày là một dịp để dẫn đầu xu hướng toàn cầu.
              </p>
              <button
              onClick={scrollToJobs}
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold 
                       hover:bg-blue-100 transition-colors"
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