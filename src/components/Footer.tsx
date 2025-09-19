import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--commerce-green))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-[hsl(var(--commerce-green))] to-[hsl(var(--commerce-teal))] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold">Commerce Bank</h3>
            </div>
            <p className="text-white/80 mb-6">
              Your trusted financial partner for over 150 years. FDIC insured and committed to your financial success.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-[hsl(var(--commerce-teal))] hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[hsl(var(--commerce-teal))] hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[hsl(var(--commerce-teal))] hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[hsl(var(--commerce-teal))] hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[hsl(var(--commerce-teal))] hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Personal Banking */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Personal Banking</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Checking Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Savings Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mortgages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Auto Loans</a></li>
            </ul>
          </div>

          {/* Business & Investment */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business & Investment</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Business Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wealth Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retirement Planning</a></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support & Resources</h4>
            <ul className="space-y-3 text-white/80 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ideas & Tips</a></li>
            </ul>
            
            <div>
              <p className="text-sm text-white/80 mb-3">Stay updated with our newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Disclosures</a>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
            <div className="text-sm text-white/80">
              <p>© 2024 Commerce Bank. All rights reserved.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/90">
              <strong>Equal Housing Lender.</strong> Member FDIC. Commerce Bank and its affiliates do not provide tax or legal advice. 
              Please consult your tax advisor or attorney for such guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;