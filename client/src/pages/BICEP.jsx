import FacilitiesLayout from '../layout/FacilitiesLayout';
import { Tent } from 'lucide-react';

const BICEP = () => {
  return (
    <FacilitiesLayout activeId="bicep">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tight">BICEP - Incubation Centre</h2>
        <div className="w-16 h-1 bg-[#FB6D39] rounded-full" />
      </div>

      <div className="bg-gray-50 border border-gray-100 border-dashed rounded-3xl p-16 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
          <Tent className="w-8 h-8 text-gray-300" />
        </div>
        <h3 className="text-lg font-bold text-[#111111] mb-2">Content Unavailable</h3>
        <p className="text-sm text-gray-500 max-w-sm">Detailed information for this section is currently being updated.</p>
      </div>
    </FacilitiesLayout>
  );
};

export default BICEP;
