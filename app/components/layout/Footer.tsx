export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Nûr Labs logo" className="w-8 h-8 opacity-80" />
            <span className="text-lg font-bold tracking-tight">Nûr Labs</span>
          </a>


          <nav className="flex items-center gap-8 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <a href="/about" className="hover:text-brand-500 transition-colors">À Propos</a>
            <a href="/mentions-legales" className="hover:text-brand-500 transition-colors">Mentions Légales</a>
            <a href="/confidentialite" className="hover:text-brand-500 transition-colors">Confidentialité</a>
          </nav>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Nûr Labs. Tous droits réservés.
          </p>

        </div>
      </div>
    </footer>
  );
}
