import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";
import { AppSpotlight } from "~/components/sections/AppSpotlight";
import { Hero } from "~/components/sections/Hero";
import { Portfolio } from "~/components/sections/Portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nurslabs - Création d'Applications Mobiles Premium & SEO-First" },
    { 
      name: "description", 
      content: "Nurslabs construit des applications mobiles centrées sur l'utilisateur, performantes et optimisées pour le SEO, sans la frustration des apps modernes." 
    },
    { property: "og:title", content: "Nurslabs - Applications Mobiles d'Excellence" },
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


