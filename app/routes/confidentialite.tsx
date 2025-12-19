import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";

export default function Confidentialite() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-black mb-12">Politique de Confidentialité</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Chez Nûr Labs, nous accordons une importance primordiale à la protection de votre vie privée. Cette politique a pour but de vous informer sur la manière dont nous traitons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Données collectées</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              La consultation du site est possible sans identification préalable. Nous ne collectons aucune donnée personnelle à votre insu. En cas de contact par email, nous conservons uniquement les informations nécessaires au traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Vos droits (RGPD)</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à : djedidinur@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Sécurité</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données et prévenir tout accès non autorisé.
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
