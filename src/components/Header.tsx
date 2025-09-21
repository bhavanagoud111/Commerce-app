import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border">
      {/* Top Navigation Bar */}
      <div className="bg-muted/50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <nav className="flex space-x-6">
            <a href="#" className="text-[hsl(var(--commerce-green))] font-medium hover:underline">Personal</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Wealth</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Business</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Corporate</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search Commerce" 
                className="pl-10 w-64 h-8 text-sm"
              />
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              Find a Branch or ATM
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--commerce-green))] to-[hsl(var(--commerce-teal))] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-[hsl(var(--commerce-green))] to-[hsl(var(--commerce-teal))] rounded-full"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-[hsl(var(--commerce-green))]">Commerce Bank</h1>
          </div>

          <nav className="flex space-x-8">
            <div className="relative group">
              <button className="text-foreground hover:text-[hsl(var(--commerce-green))] font-medium flex items-center">
                Bank
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-[hsl(var(--commerce-green))] font-medium flex items-center">
                Borrow
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-[hsl(var(--commerce-green))] font-medium flex items-center">
                Invest
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-[hsl(var(--commerce-green))] font-medium flex items-center">
                Cards
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-[hsl(var(--commerce-green))] font-medium flex items-center">
                Digital Banking
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-[hsl(var(--commerce-green))] font-medium flex items-center">
                Ideas & Tips
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* FDIC Notice */}
      <div className="bg-muted/30 py-2">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold">FDIC</span> FDIC Insured - Backed by the full faith and credit of the U.S. Government
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;