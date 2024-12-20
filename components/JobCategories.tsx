// components/JobCategories.tsx
import { Building2, Users, GraduationCap } from 'lucide-react';

const JobCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Engineering",
      description: "Build the technology that connects billions",
      icon: <Building2 className="w-6 h-6" />,
      jobCount: 842
    },
    {
      id: 2,
      title: "Business Development",
      description: "Drive strategic partnerships and growth",
      icon: <Users className="w-6 h-6" />,
      jobCount: 156
    },
    {
      id: 3,
      title: "Research",
      description: "Shape the future of technology",
      icon: <GraduationCap className="w-6 h-6" />,
      jobCount: 234
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Find Your Next Role</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <p className="text-blue-600">{category.jobCount} open roles</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategories;