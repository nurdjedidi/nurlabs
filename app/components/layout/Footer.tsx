export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight">nurslabs</span>
          </div>

          <nav className="flex items-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-brand-500 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} nurslabs. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
