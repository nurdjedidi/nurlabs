import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";
import { AppSpotlight } from "~/components/sections/AppSpotlight";
import { Hero } from "~/components/sections/Hero";
import { Portfolio } from "~/components/sections/Portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nûr Labs - Des applications pensées pour l'utilisateur" },
    { 
      name: "description", 
      content: "Nûr Labs construit des applications mobiles centrées sur l'utilisateur, performantes et optimisées, sans toute la frustration des apps modernes." 
    },
    { property: "og:title", content: "Nûr Labs - Des applications pensées pour l'utilisateur" },
    { property: "og:description", content: "Expertise en développement mobile, UX intuitive et SEO stratégique." },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="grow">
        <Hero />
        <Portfolio />
        <AppSpotlight />
      </main>
      <div className="text-center py-10">
        <Footer />
      </div>
    </div>
  );
}


