import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const PaperDetail = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] font-sans selection:bg-[#B9F600] selection:text-[#141F00]">
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
        
        <Link to="/research" className="text-[#8d9479] hover:text-[#B9F600] text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
          <span className="text-lg">‹</span> Back to Research
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-[#B9F600] text-[#141F00] px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">AI & Healthcare</span>
            <span className="text-[#c3caac] text-sm font-bold tracking-widest uppercase">OCT 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#ffffff] tracking-tight leading-[1.1] uppercase">
            AI-Driven Diagnostics in Rural Healthcare Infrastructure
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-6 border-t border-[#1c1b1b]">
            <div>
              <p className="text-[10px] text-[#8d9479] uppercase tracking-widest mb-1">Lead Author</p>
              <p className="text-[#ffffff] font-sans text-sm font-medium">Dr. Jonathan Vance</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8d9479] uppercase tracking-widest mb-1">Co-Authors</p>
              <p className="text-[#ffffff] font-sans text-sm font-medium">Elena Rostova, Dr. Samil Khan</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8d9479] uppercase tracking-widest mb-1">Department</p>
              <p className="text-[#ffffff] font-sans text-sm font-medium">Computer Science & Engg.</p>
            </div>
          </div>
        </motion.header>

        {/* Abstract */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#201F1F] p-8 md:p-12 rounded relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-[#B9F600]"></div>
          <h3 className="text-xl font-serif text-white mb-6 uppercase tracking-widest">Abstract</h3>
          <p className="text-[#c3caac] text-lg leading-[1.8] font-light">
            This paper explores the feasibility and architectural deployment of low-bandwidth Edge Computing solutions designed specifically to bring advanced AI diagnostic capabilities to remote clinical settings. By decentralizing inference and processing, the proposed framework minimizes reliance on persistent broadband connections while maintaining 94% diagnostic accuracy equivalent to cloud-based neural networks.
          </p>
        </motion.section>

        {/* Methodology & Data */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-serif text-white uppercase tracking-widest border-b border-[#1c1b1b] pb-4">1. Methodology</h3>
          <p className="text-[#8d9479] text-base leading-[1.8] font-light">
            The primary dataset comprised 124,000 anonymized radiological scans, pre-processed using contrast-limited adaptive histogram equalization (CLAHE). The neural architecture relies on a highly pruned MobileNetV3 backbone, optimized via quantization-aware training to execute strictly on sub-5W edge tensors (e.g., Coral TPUs or Nvidia Jetson Nano).
          </p>
          <p className="text-[#8d9479] text-base leading-[1.8] font-light">
            Connectivity simulations were performed using varying packet loss (10%-40%) and latency spikes to model the realities of rural clinic environments. Under these constraints, the localized network architecture demonstrated a 300% improvement in time-to-diagnosis compared to traditional centralized API architectures.
          </p>
        </motion.section>

        {/* Actions */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="pt-12 border-t border-[#1c1b1b] flex flex-wrap gap-6"
        >
          <button onClick={() => alert("Downloading PDF...")} className="bg-[#B9F600] text-[#141F00] font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity">
            Download Full PDF
          </button>
          <button onClick={() => alert("Citation copied to clipboard!")} className="border border-[#434933] text-[#ffffff] font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:border-[#B9F600] transition-colors">
            Cite this Paper
          </button>
        </motion.div>

      </main>
    </div>
  );
};

export default PaperDetail;
