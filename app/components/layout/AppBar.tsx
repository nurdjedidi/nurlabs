import { LayoutDashboard } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

export function AppBar() {
  return (
    <header className="glass-header w-full">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
            <LayoutDashboard className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">nurslabs</span>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Nos Apps
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Vision
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  );
}
