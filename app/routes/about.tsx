import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-8">À Propos de <span className="text-gradient">Nûr Labs</span></h1>
        
        <div className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Notre Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Nûr Labs est né d'une volonté simple : réinventer l'expérience mobile. Nous pensons que les applications ne devraient pas être une source de frustration, mais un outil fluide, intuitif et puissant pour l'utilisateur final.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Un Travail d'Indépendant</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              En tant que SaaS Builder indépendant, nous concevons, développons et monétisons nos propres solutions. Cette indépendance nous permet de ne faire aucun compromis sur la qualité, le design et le respect de l'utilisateur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Excellence Technique</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Chaque ligne de code est pensée pour la performance. Chaque pixel est placé avec intention. Nous utilisons les technologies les plus modernes (React, Tailwind, Native) pour offrir des produits qui se distinguent par leur fluidité.
            </p>
          </section>
        </div>
      </main>
      <div className="text-center py-10">
        <Footer />
      </div>
    </div>
  );
}
