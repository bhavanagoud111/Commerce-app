import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Registration form state
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    ssn: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    employmentStatus: "",
    annualIncome: "",
    accountType: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const bankingTopics = [
    { value: "checking-accounts", label: "Checking Accounts", description: "Manage your everyday banking needs" },
    { value: "savings-accounts", label: "Savings Accounts", description: "Grow your money with competitive rates" },
    { value: "credit-cards", label: "Credit Cards", description: "Rewards, cashback, and travel benefits" },
    { value: "mortgages", label: "Mortgages & Home Loans", description: "Buy or refinance your home" },
    { value: "auto-loans", label: "Auto Loans", description: "Finance your next vehicle" },
    { value: "personal-loans", label: "Personal Loans", description: "Consolidate debt or fund major purchases" },
    { value: "business-banking", label: "Business Banking", description: "Solutions for your business needs" },
    { value: "investment-services", label: "Investment Services", description: "Grow your wealth with professional guidance" },
    { value: "wealth-management", label: "Wealth Management", description: "Comprehensive financial planning" },
    { value: "retirement-planning", label: "Retirement Planning", description: "Secure your financial future" },
    { value: "insurance", label: "Insurance", description: "Protect what matters most" },
    { value: "digital-banking", label: "Digital Banking", description: "Banking on the go with our mobile app" },
    { value: "online-security", label: "Online Security", description: "Keep your accounts safe and secure" },
    { value: "student-banking", label: "Student Banking", description: "Special accounts and services for students" },
    { value: "senior-banking", label: "Senior Banking", description: "Tailored services for seniors" },
    { value: "international-banking", label: "International Banking", description: "Global banking solutions" },
    { value: "merchant-services", label: "Merchant Services", description: "Payment processing for businesses" },
    { value: "treasury-management", label: "Treasury Management", description: "Advanced cash management solutions" }
  ];

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setIsDropdownOpen(false);
  };

  const handleRegistrationChange = (field: string, value: string | boolean) => {
    setRegistrationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Registration data:", registrationData);
    alert("Registration submitted successfully! You will receive a confirmation email shortly.");
    setIsRegistrationOpen(false);
    // Reset form
    setRegistrationData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      ssn: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      employmentStatus: "",
      annualIncome: "",
      accountType: "",
      username: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      agreeToMarketing: false
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              <div className="relative" ref={dropdownRef}>
                <Button 
                  variant="commerce-outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[hsl(var(--commerce-green))] flex items-center"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedTopic ? bankingTopics.find(t => t.value === selectedTopic)?.label : "select a topic"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                    <div className="p-2">
                      {bankingTopics.map((topic) => (
                        <button
                          key={topic.value}
                          className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => handleTopicSelect(topic.value)}
                        >
                          <div className="font-medium text-gray-900">{topic.label}</div>
                          <div className="text-sm text-gray-600">{topic.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Password
                </label>
                <Input 
                  type="password"
                  placeholder="Enter Password" 
                  className="w-full"
                />
              </div>

              <Button 
                variant="commerce" 
                className="w-full h-12 text-lg font-semibold"
                onClick={() => window.location.href = '/dashboard'}
              >
                Log In
              </Button>

              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  New customer?{" "}
                  <button 
                    onClick={() => setIsRegistrationOpen(true)}
                    className="text-[hsl(var(--commerce-green))] hover:underline font-medium"
                  >
                    Register
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-6">
              Create Your Commerce Bank Account
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleRegistrationSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--commerce-green))] border-b pb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={registrationData.firstName}
                    onChange={(e) => handleRegistrationChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={registrationData.lastName}
                    onChange={(e) => handleRegistrationChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={registrationData.email}
                    onChange={(e) => handleRegistrationChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={registrationData.phone}
                    onChange={(e) => handleRegistrationChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={registrationData.dateOfBirth}
                    onChange={(e) => handleRegistrationChange("dateOfBirth", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="ssn">Social Security Number *</Label>
                  <Input
                    id="ssn"
                    type="password"
                    placeholder="XXX-XX-XXXX"
                    value={registrationData.ssn}
                    onChange={(e) => handleRegistrationChange("ssn", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--commerce-green))] border-b pb-2">
                Address Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={registrationData.address}
                    onChange={(e) => handleRegistrationChange("address", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={registrationData.city}
                    onChange={(e) => handleRegistrationChange("city", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select value={registrationData.state} onValueChange={(value) => handleRegistrationChange("state", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="AR">Arkansas</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="CO">Colorado</SelectItem>
                      <SelectItem value="CT">Connecticut</SelectItem>
                      <SelectItem value="DE">Delaware</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="GA">Georgia</SelectItem>
                      <SelectItem value="HI">Hawaii</SelectItem>
                      <SelectItem value="ID">Idaho</SelectItem>
                      <SelectItem value="IL">Illinois</SelectItem>
                      <SelectItem value="IN">Indiana</SelectItem>
                      <SelectItem value="IA">Iowa</SelectItem>
                      <SelectItem value="KS">Kansas</SelectItem>
                      <SelectItem value="KY">Kentucky</SelectItem>
                      <SelectItem value="LA">Louisiana</SelectItem>
                      <SelectItem value="ME">Maine</SelectItem>
                      <SelectItem value="MD">Maryland</SelectItem>
                      <SelectItem value="MA">Massachusetts</SelectItem>
                      <SelectItem value="MI">Michigan</SelectItem>
                      <SelectItem value="MN">Minnesota</SelectItem>
                      <SelectItem value="MS">Mississippi</SelectItem>
                      <SelectItem value="MO">Missouri</SelectItem>
                      <SelectItem value="MT">Montana</SelectItem>
                      <SelectItem value="NE">Nebraska</SelectItem>
                      <SelectItem value="NV">Nevada</SelectItem>
                      <SelectItem value="NH">New Hampshire</SelectItem>
                      <SelectItem value="NJ">New Jersey</SelectItem>
                      <SelectItem value="NM">New Mexico</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="NC">North Carolina</SelectItem>
                      <SelectItem value="ND">North Dakota</SelectItem>
                      <SelectItem value="OH">Ohio</SelectItem>
                      <SelectItem value="OK">Oklahoma</SelectItem>
                      <SelectItem value="OR">Oregon</SelectItem>
                      <SelectItem value="PA">Pennsylvania</SelectItem>
                      <SelectItem value="RI">Rhode Island</SelectItem>
                      <SelectItem value="SC">South Carolina</SelectItem>
                      <SelectItem value="SD">South Dakota</SelectItem>
                      <SelectItem value="TN">Tennessee</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="UT">Utah</SelectItem>
                      <SelectItem value="VT">Vermont</SelectItem>
                      <SelectItem value="VA">Virginia</SelectItem>
                      <SelectItem value="WA">Washington</SelectItem>
                      <SelectItem value="WV">West Virginia</SelectItem>
                      <SelectItem value="WI">Wisconsin</SelectItem>
                      <SelectItem value="WY">Wyoming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    value={registrationData.zipCode}
                    onChange={(e) => handleRegistrationChange("zipCode", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--commerce-green))] border-b pb-2">
                Financial Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="employmentStatus">Employment Status *</Label>
                  <Select value={registrationData.employmentStatus} onValueChange={(value) => handleRegistrationChange("employmentStatus", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Employment Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="self-employed">Self-Employed</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="annualIncome">Annual Income *</Label>
                  <Select value={registrationData.annualIncome} onValueChange={(value) => handleRegistrationChange("annualIncome", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Income Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                      <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                      <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                      <SelectItem value="150k-200k">$150,000 - $200,000</SelectItem>
                      <SelectItem value="over-200k">Over $200,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="accountType">Preferred Account Type *</Label>
                  <Select value={registrationData.accountType} onValueChange={(value) => handleRegistrationChange("accountType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Account Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Checking Account</SelectItem>
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="both">Both Checking & Savings</SelectItem>
                      <SelectItem value="business">Business Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Login Credentials */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--commerce-green))] border-b pb-2">
                Login Credentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="username">Username *</Label>
                  <Input
                    id="username"
                    value={registrationData.username}
                    onChange={(e) => handleRegistrationChange("username", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={registrationData.password}
                    onChange={(e) => handleRegistrationChange("password", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={registrationData.confirmPassword}
                    onChange={(e) => handleRegistrationChange("confirmPassword", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={registrationData.agreeToTerms}
                  onCheckedChange={(checked) => handleRegistrationChange("agreeToTerms", checked as boolean)}
                  required
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the <a href="#" className="text-[hsl(var(--commerce-green))] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[hsl(var(--commerce-green))] hover:underline">Privacy Policy</a> *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToMarketing"
                  checked={registrationData.agreeToMarketing}
                  onCheckedChange={(checked) => handleRegistrationChange("agreeToMarketing", checked as boolean)}
                />
                <Label htmlFor="agreeToMarketing" className="text-sm">
                  I would like to receive marketing communications and updates from Commerce Bank
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsRegistrationOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="commerce"
                className="px-8"
              >
                Create Account
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;