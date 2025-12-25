import { Card } from "@/components/ui/card";
import { navItems } from "../constants/index.js";
const Navbar = () => {
  return (
    <nav className="py-6 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-14 gap-8 justify-items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:-translate-y-2"
                >
                  <div className="relative">
                    <Icon className="w-8 h-8 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                    {item.badge && (
                      <span className="absolute -top-7 -right-1 text-xs bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-2 py-1 rounded-full font-bold shadow">
                        new
                      </span>
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-indigo-600 text-center">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </Card>
      </div>
    </nav>
  );
};

export default Navbar;
