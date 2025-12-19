import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

export function AppBar() {
  return (
    <header className="glass-header w-full">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group cursor-pointer">
          <img src="/favicon.svg" alt="Nûr Labs logo" className="w-10 h-10 drop-shadow-lg transition-transform group-hover:scale-110 duration-300" />
          <span className="text-xl font-bold tracking-tight">Nûr Labs</span>
        </a>


        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")} href="/#apps">
                Nos Apps
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  );
}
