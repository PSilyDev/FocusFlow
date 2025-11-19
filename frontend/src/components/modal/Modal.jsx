export const Modal = ({ trigger, setTrigger, getSelected }) => {
    if (!trigger) return null;
  
    const handleClick = (answer) => {
      if (getSelected) {
        getSelected(answer);
      }
      setTrigger(false);
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="w-full max-w-xs rounded-2xl bg-slate-900 text-slate-100 shadow-2xl ring-1 ring-white/10 sm:max-w-sm">
          {/* Icon + top padding */}
          <div className="flex flex-col items-center px-5 pt-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 text-red-400"
              >
                <path
                  fill="currentColor"
                  d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208
                   208-93.1 208-208S370.9 48 256 48zm0 96c13.3 0 24 10.7
                   24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3
                   10.7-24 24-24zm0 224a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"
                />
              </svg>
            </div>
  
            <hr className="mb-4 w-full border-slate-700/70" />
  
            <p className="mb-5 text-center text-sm text-slate-200 sm:text-base">
              Do you want to delete this todo?
            </p>
          </div>
  
          {/* Buttons */}
          <div className="flex justify-center gap-3 px-5 pb-5">
            <button
              onClick={() => handleClick("yes")}
              className="inline-flex min-w-[80px] items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:brightness-110"
            >
              Yes
            </button>
            <button
              onClick={() => handleClick("no")}
              className="inline-flex min-w-[80px] items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition hover:brightness-110"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };
  