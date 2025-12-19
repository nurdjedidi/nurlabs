import { Apple, PlayCircle } from "lucide-react";
import { Button } from "~/components/ui/button";

export function AppSpotlight() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-600 dark:bg-brand-900/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-16 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold tracking-wide uppercase">
              App du moment
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Wadiah
            </h2>
            <p className="text-brand-100 text-xl leading-relaxed">
              La plateforme ultime pour maîtriser votre nutrition. Design premium, algorithmes de pointe et absence totale de frustration.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" className="rounded-2xl px-6 h-14 bg-white text-brand-600 hover:bg-slate-100 font-bold flex gap-3 shadow-xl">
                <Apple className="w-6 h-6" />
                <span>App Store</span>
              </Button>
              <Button size="lg" className="rounded-2xl px-6 h-14 bg-slate-900 text-white hover:bg-black font-bold flex gap-3 shadow-xl">
                <PlayCircle className="w-6 h-6 text-brand-400" />
                <span>Play Store</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000 delay-500">
            <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full" />
              </div>
              
              <div className="absolute inset-0 bg-slate-100 overflow-hidden">
                <img 
                  src="/screenshot.jpg" 
                  alt="Wadiah App Screenshot" 
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-50" />
            </div>

            <div className="absolute -inset-10 bg-brand-500/20 blur-[100px] -z-10 rounded-full opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
}
