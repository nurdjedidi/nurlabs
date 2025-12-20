import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-300 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-4 h-4" />
            <span>Nouveau standard en développement mobile</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Je construit des applications mobile <br />
            <span className="text-gradient">pensé pour les utilisateurs</span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Des produits indépendants, monétisés et conçus pour durer. Nous créons des expériences SaaS fluides qui résolvent de vrais problèmes sans compromis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
            <Link to="#apps">
              <Button size="lg" className="rounded-full px-8 h-12 bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-500/20">
                Découvrir nos Apps
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link to="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-slate-200 dark:border-slate-800">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
