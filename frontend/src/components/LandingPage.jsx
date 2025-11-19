export const LandingPage = () => {
    return (
      <div className="flex w-full flex-col gap-8 px-4 py-6 md:px-6 md:py-8 lg:min-h-[70vh] lg:flex-row lg:items-center lg:justify-center lg:gap-24 lg:py-12 lg:pl-10">
        {/* LEFT — App Preview */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative w-full max-w-sm rounded-3xl bg-slate-950/95 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.9)] ring-1 ring-white/10 overflow-hidden md:p-6 lg:max-w-md lg:scale-[1.1]">
            {/* Bulb core (small, bright) */}
            <div className="pointer-events-none absolute -top-10 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-indigo-400/80 blur-3xl opacity-80" />
            {/* Bulb halo spilling onto card */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[140%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.65),_rgba(15,23,42,0.92)_55%,_rgba(2,6,23,1)_90%)] opacity-90" />
  
            {/* Header */}
            <div className="relative mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/90 text-sm font-semibold text-white">
                  ✓
                </span>
                <span className="text-sm font-medium text-slate-100">
                  Today&apos;s checklist
                </span>
              </div>
              <span className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/70">
                3 tasks
              </span>
            </div>
  
            {/* Tasks */}
            <div className="relative space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-950/70 px-4 py-3 ring-1 ring-slate-700/70">
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    Morning workout
                  </p>
                  <p className="text-[11px] text-slate-400">6:30 AM · Health</p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                  High
                </span>
              </div>
  
              <div className="flex items-center justify-between rounded-xl bg-slate-950/70 px-4 py-3 ring-1 ring-slate-800">
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    Deep-work session
                  </p>
                  <p className="text-[11px] text-slate-400">11:00 AM · Focus</p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-amber-500/20 px-3 py-1 text-[11px] font-semibold text-amber-300 ring-1 ring-amber-400/50">
                  In progress
                </span>
              </div>
  
              <div className="flex items-center justify-between rounded-xl bg-slate-950/70 px-4 py-3 ring-1 ring-slate-800/70">
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    Plan tomorrow
                  </p>
                  <p className="text-[11px] text-slate-400">
                    9:30 PM · Reflection
                  </p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-300 ring-1 ring-slate-600">
                  Pending
                </span>
              </div>
            </div>
  
            {/* Footer */}
            <div className="relative mt-5 rounded-xl bg-slate-950/80 px-4 py-2 text-[11px] text-slate-400 ring-1 ring-slate-800">
              Drag priorities, mark tasks complete, and watch your progress update
              instantly.
            </div>
          </div>
        </div>
  
        {/* RIGHT — Text Content */}
        <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 text-center lg:w-1/2 lg:items-start lg:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-indigo-300 sm:text-6xl lg:text-7xl">
            FocusFlow.
          </h1>
  
          <p className="max-w-xl text-base font-medium text-slate-200 sm:text-lg">
            FocusFlow helps you keep track of your to-dos and organize your tasks
            effortlessly, so you can focus on what actually matters.
          </p>
  
          <ul className="mt-2 space-y-2 text-sm text-slate-300 sm:text-base">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Visualize your day with priorities and statuses.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Separate in-progress, completed and pending tasks clearly.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              All synced to your account, accessible from anywhere.
            </li>
          </ul>
  
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Use the <span className="font-semibold text-slate-200">Login</span> or{" "}
            <span className="font-semibold text-slate-200">Signup</span> buttons
            above to start creating your first list.
          </p>
        </div>
      </div>
    );
  };
  