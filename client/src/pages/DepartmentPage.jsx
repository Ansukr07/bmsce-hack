import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allDepartments, departmentData } from '../constants/departments';
import DepartmentTemplate from '../components/DepartmentTemplate';

const DepartmentPage = () => {
  const { slug }  = useParams();
  const navigate  = useNavigate();
  const meta      = allDepartments.find(d => d.slug === slug);
  const data      = departmentData[slug];

  useEffect(() => { 
    if (slug) {
      window.scrollTo(0, 0); 
    }
  }, [slug]);

  if (!meta || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-[#111111] font-sans">
        <h1 className="text-4xl font-bold">Department Not Found</h1>
        <button
          onClick={() => navigate('/departments')}
          className="flex items-center gap-2 text-[#FB6D39] font-medium hover:underline"
        >
          Back to Departments
        </button>
      </div>
    );
  }

  return (
    <DepartmentTemplate 
      meta={meta} 
      data={data} 
      onBack={() => navigate('/departments')}
    />
  );
};

export default DepartmentPage;
