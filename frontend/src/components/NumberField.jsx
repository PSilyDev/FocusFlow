export const NumberField = ({ count, color }) => {
    const colors = {
      orange: "border-orange-400 shadow-orange-500/40",
      red: "border-red-400 shadow-red-500/40",
      green: "border-emerald-400 shadow-emerald-500/40",
    };
  
    const colorClasses = colors[color] || "border-slate-500 shadow-slate-500/30";
  
    return (
      <div className="flex items-center justify-center">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full border-[6px] bg-slate-950/70 shadow-md backdrop-blur-sm sm:h-24 sm:w-24 md:h-28 md:w-28 ${colorClasses}`}
        >
          <span className="text-2xl font-semibold text-slate-50 sm:text-3xl md:text-4xl">
            {count}
          </span>
        </div>
      </div>
    );
  };
  