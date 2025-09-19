import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[hsl(var(--commerce-teal))] via-[hsl(var(--commerce-light-blue))] to-[hsl(var(--commerce-yellow))]">
      {/* Organic Shapes Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--commerce-green))] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--commerce-yellow))] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[hsl(var(--commerce-teal))] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How can we help?
            </h1>
            <div className="flex items-center mb-8">
              <span className="text-xl mr-4">I want to...</span>
              <Button variant="commerce-outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[hsl(var(--commerce-green))]">
                select a topic
              </Button>
            </div>
          </div>

          {/* Right Content - Login Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-elevated)]">
            <div className="text-center mb-6">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--commerce-teal))] to-[hsl(var(--commerce-light-blue))] rounded-full flex items-center justify-center mr-3">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-[hsl(var(--commerce-green))] rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Log in to Online Banking
              </h2>
              <p className="text-muted-foreground">or select an account:</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Select your account type
                </label>
                <Select defaultValue="online-banking">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online-banking">Online Banking</SelectItem>
                    <SelectItem value="credit-cards">Credit Cards</SelectItem>
                    <SelectItem value="spending-card">mySpending Card®</SelectItem>
                    <SelectItem value="mortgage">Mortgage Loans</SelectItem>
                    <SelectItem value="health-financing">Health Services Financing</SelectItem>
                    <SelectItem value="health-payment">Health Payment Plan</SelectItem>
                    <SelectItem value="wealth-manager">Commerce Trust Wealth Manager</SelectItem>
                    <SelectItem value="brokerage">Brokerage Account</SelectItem>
                    <SelectItem value="student-loans">Student Loans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Customer ID
                </label>
                <Input 
                  placeholder="Enter Customer ID" 
                  className="w-full"
                />
              </div>

              <Button 
                variant="commerce" 
                className="w-full h-12 text-lg font-semibold"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;