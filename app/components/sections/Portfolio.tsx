import { Star, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

const apps = [
  {
    title: "Wadiah",
    description: "L'application de nutrition qui simplifie votre suivi alimentaire avec une interface élégante et sans friction.",
    metrics: "0 Utilisateurs",
    rating: "?/5",
    color: "bg-brand-500/10 text-brand-600 dark:text-brand-300",
  },
  {
    title: "Prochainement...",
    description: "Une nouvelle expérience SaaS en cours de conception pour révolutionner votre productivité.",
    metrics: "Bientôt disponible",
    rating: "--",
    color: "bg-slate-500/10 text-slate-400",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50" id="apps">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nos Créations</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Nous construisons des produits que nous aimons utiliser. Chaque app est une démonstration de notre savoir-faire en UX et performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <Card key={index} className="glass border-transparent hover:border-brand-500/30 transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${app.color}`}>
                  {app.title === "Wadiah" ? <Star className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                </div>
                <CardTitle className="text-2xl font-bold">{app.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed pt-2">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold">{app.metrics}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-semibold">{app.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
