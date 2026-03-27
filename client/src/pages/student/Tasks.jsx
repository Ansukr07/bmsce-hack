import React, { useState, useEffect } from 'react';
import { allTasks } from '../../lib/mockData';
import { Plus, X, Loader2 } from 'lucide-react';

const Tasks = () => {
  const [tasks, setTasks] = useState(allTasks);
  const [filter, setFilter] = useState('All tasks');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fake Loading wrapper around filter change
  const handleFilterChange = (newFilter) => {
    setIsLoading(true);
    setFilter(newFilter);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const handleStatusToggle = (taskId) => {
    setIsLoading(true);
    setTimeout(() => {
      setTasks(tasks.map(t => {
        if (t.id === taskId) {
          const nextStatus = t.status === 'To do' ? 'In progress' : t.status === 'In progress' ? 'Done' : 'To do';
          return { ...t, status: nextStatus, progress: nextStatus === 'Done' ? 100 : nextStatus === 'To do' ? 0 : 50 };
        }
        return t;
      }));
      setIsLoading(false);
    }, 500);
  };

  const filteredTasks = filter === 'All tasks' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <main className="flex-1 w-full max-w-[1150px] mx-auto animate-in fade-in duration-500 pb-12">
      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 p-8 rounded-[28px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.05)] flex-1 flex flex-col min-h-[600px]">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-[24px] font-bold text-[#111111]">My tasks</h2>
            <p className="text-[#6B6B6B] text-[14px] mt-1 font-medium">Manage and track your coursework progress.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-11 h-11 bg-[#111111] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <Plus size={20} strokeWidth={2.5} />
          </button>
        </div>
        
        {/* Filters */}
        <div className="flex gap-2 mb-8 border-b border-gray-200/50 pb-6 w-full overflow-x-auto no-scrollbar">
          {['All tasks', 'To do', 'In progress', 'Done'].map(f => (
            <button 
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${
                filter === f 
                  ? 'bg-[#111111] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-105' 
                  : 'text-[#6B6B6B] bg-white/60 border border-gray-200/50 hover:bg-white hover:text-[#111111] hover:shadow-md'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-6 flex-1 relative min-h-[300px]">
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Loader2 className="animate-spin text-[#111111]" size={32} />
            </div>
          )}

          {filteredTasks.length === 0 && !isLoading && (
            <div className="h-full flex items-center justify-center text-[#6B6B6B] font-medium mt-10">
              No tasks found in this category.
            </div>
          )}

          {filteredTasks.map((task) => (
            <div key={task.id} className={`group bg-white/40 border border-white/60 p-5 rounded-[20px] transition-all duration-300 hover:bg-white/90 hover:shadow-lg ${task.status === 'Done' ? 'opacity-70' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-semibold text-[15.5px] leading-snug max-w-[75%] transition-colors cursor-pointer ${
                  task.status === 'Done' ? 'line-through text-[#6B6B6B]' : 'text-[#111111] hover:text-[#FB6D39]'
                }`}>
                  {task.title}
                </h3>
                <button 
                  onClick={() => handleStatusToggle(task.id)}
                  title="Click to advance status"
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 shadow-sm cursor-pointer hover:scale-105 transition-all ${
                  task.status === 'To do' ? 'bg-[#8ddbfe] text-[#006e9c]' : 
                  task.status === 'In progress' ? 'bg-[#FB6D39] text-white' : 
                  'bg-[#B6FA82] text-green-950'
                }`}>
                  {task.status}
                </button>
              </div>
              <div className="flex justify-between items-center text-[13px] text-[#6B6B6B] font-medium mb-3 mt-4">
                <span className="bg-black/5 px-3 py-1 rounded-md">{task.subject}</span>
                <div className="flex items-center gap-1">
                  <span>{task.date}</span>
                  <span className={`ml-3 ${task.comments > 0 ? 'font-bold text-[#111111]' : ''}`}>
                    {task.comments > 0 ? `${task.comments} comments` : 'No comments'}
                  </span>
                </div>
              </div>
              
              {task.status === 'In progress' && (
                <div className="h-3 w-full bg-black/5 border border-black/5 rounded-full overflow-hidden flex items-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+PHBhdGggZD0iTS0yIDEwTDEwIDJaTTEwIDEwTDIgLTJaIiBzdHJva2U9IiNlN2U3ZTciIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPjwvc3ZnPg==')]">
                  <div className="h-full bg-[#FB6D39] rounded-full shadow-sm" style={{ width: `${task.progress}%` }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white/80 backdrop-blur-3xl border border-white/90 p-8 rounded-[32px] shadow-2xl w-full max-w-lg relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#111111] transition-colors">
              <X size={24} />
            </button>
            <h3 className="text-[22px] font-bold text-[#111111] mb-6">Create New Task</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#111111] mb-1.5 px-1">Task Title</label>
                <input type="text" placeholder="E.g. Study for physics midterm" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#B6FA82]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#111111] mb-1.5 px-1">Subject</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#B6FA82]">
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Biology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#111111] mb-1.5 px-1">Due Date</label>
                  <input type="date" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[#B6FA82]" />
                </div>
              </div>
            </div>

            <button onClick={() => setIsModalOpen(false)} className="w-full mt-8 py-3.5 bg-[#111111] text-white rounded-[16px] text-[15px] font-semibold hover:bg-[#222222] transition-transform hover:-translate-y-0.5 shadow-lg">
              Add Task
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Tasks;
