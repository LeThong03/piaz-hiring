// components/CompanyBanner.tsx
import Image from 'next/image';

const CompanyBanner = () => {
  const companies = [
    {
      name: "Trinity Network",
      description: "Affiliate Network",
      logo: "/images/trinity.jpg"
    },
    {
      name: "Marketing66",
      description: "Marketing Network",
      logo: "/images/maketing66.jpg"
    },
    {
      name: "Chiến Binh Affiliate, MMO",
      description: "chia sẻ tất tần tật về kinh nghiệm làm Affiliate, MMO",
      logo: "/images/mmo.jpg"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg"
            >
              <div className="h-24 relative mb-4">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {company.name}
              </h3>
              <p className="text-gray-600">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyBanner;