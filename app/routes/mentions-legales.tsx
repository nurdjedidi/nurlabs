import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-black mb-12">Mentions Légales</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Éditeur</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Le site <strong>nurdjedidi.com</strong> est édité par :<br />
              <strong>Nûr Labs</strong><br />
              Contact : djedidinur@gmail.com<br />
              Directeur de la publication : Nûr Djedidi
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Hébergement</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Ce site est hébergé par :<br />
              <strong>Cloudflare Inc.</strong><br />
              101 Townsend St<br />
              San Francisco, CA 94107<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Propriété intellectuelle</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              L'intégralité du contenu de ce site (textes, logos, images, code source) est la propriété exclusive de Nûr Labs, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'éditeur, est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Limitation de responsabilité</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Nûr Labs s'efforce d'assurer l'exactitude des informations diffusées sur ce site au moment de leur mise en ligne. Toutefois, Nûr Labs ne saurait être tenu responsable des omissions ou des inexactitudes présentes dans les contenus.
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
