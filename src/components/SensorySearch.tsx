"use client";
import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

interface SensorySearchProps {
  onGenerate: (vibe: number, focus: number) => Promise<void>;
  loading: boolean;
}

const SensorySearch = ({ onGenerate, loading }: SensorySearchProps) => {
  const [vibe, setVibe] = useState(50);
  const [focus, setFocus] = useState(50);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-7xl w-full py-18 px-6 text-center">
        <h1 className="text-6xl font-black text-zinc-900 mb-16 tracking-tight">
          Stop searching. <span className="text-cyan-800">Start dreaming.</span>
        </h1>
        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-zinc-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-12 w-full text-left">
            <div className="space-y-6 py-4 group">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-md font-black text-indigo-600 uppercase tracking-[0.2em] mb-2">
                    Atmosphere
                  </span>
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    🌿 Quiet Retreat
                  </span>
                </div>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest text-right">
                  ⚡ Urban Energy
                </span>
              </div>

              <div className="relative flex items-center h-8">
                {" "}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={vibe}
                  onChange={(e) => setVibe(Number(e.target.value))}
                  className="w-full h-4 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-indigo-600 transition-all hover:bg-zinc-200"
                />
              </div>
            </div>

            <div className="space-y-6 py-4 group">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-md font-black text-purple-600 uppercase tracking-[0.2em] mb-2">
                    Focus
                  </span>
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    🏛️ Culture Heavy
                  </span>
                </div>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest text-right">
                  🍹 Leisure Only
                </span>
              </div>

              <div className="relative flex items-center h-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={focus}
                  onChange={(e) => setFocus(Number(e.target.value))}
                  className="w-full h-4 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-purple-600 transition-all hover:bg-zinc-200"
                />
              </div>
            </div>
          </div>

          <div className="h-32 w-px bg-zinc-100 hidden md:block" />

          <button
            onClick={() => onGenerate(vibe, focus)}
            disabled={loading}
            className="w-full md:w-auto bg-zinc-900 text-white px-16 py-8 rounded-[32px] font-black text-lg hover:bg-indigo-600 hover:scale-105 transition-all flex flex-col items-center disabled:opacity-50 min-w-[280px] shadow-xl shadow-indigo-100"
          >
            {loading ? (
              <Loader2 className="animate-spin mb-3" size={28} />
            ) : (
              <Sparkles className="mb-3" size={28} />
            )}
            <span>{loading ? "Curating..." : "Generate Reality"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SensorySearch;
