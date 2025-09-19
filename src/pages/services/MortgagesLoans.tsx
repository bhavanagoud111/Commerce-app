import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, CheckCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import mortgagesLoansImage from "@/assets/mortgages-loans.jpg";

const MortgagesLoans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[hsl(var(--commerce-green))] to-[hsl(var(--commerce-teal))]">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link to="/">
                <Button variant="ghost" className="text-white hover:bg-white/20 p-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Home className="h-10 w-10 text-white mr-4" />
                  <h1 className="text-4xl font-bold text-white">Mortgages & Loans</h1>
                </div>
                <p className="text-xl text-white/90 mb-8">
                  Make your dreams come true with our competitive mortgage rates and flexible loan options. From first-time homebuyers to seasoned investors.
                </p>
                <Button variant="secondary" size="lg">
                  Apply for a Loan
                </Button>
              </div>
              <div className="lg:text-center">
                <img 
                  src={mortgagesLoansImage} 
                  alt="Mortgages and Loans Services" 
                  className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[hsl(var(--commerce-green))] mb-12">Our Loan Solutions</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--commerce-green))]">Home Mortgages</CardTitle>
                  <CardDescription>
                    Competitive rates and flexible terms for first-time buyers and refinancing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-teal))]">Starting at 6.25% APR</div>
                    <div className="text-sm text-muted-foreground">Fixed rate mortgages</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>30-year and 15-year terms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>No prepayment penalties</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>First-time buyer programs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Refinancing options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--commerce-green))]">Personal Loans</CardTitle>
                  <CardDescription>
                    Unsecured personal loans for debt consolidation, home improvements, or major purchases.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-teal))]">7.99% - 18.99% APR</div>
                    <div className="text-sm text-muted-foreground">Based on creditworthiness</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>$5,000 to $100,000 loan amounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Quick approval process</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Fixed monthly payments</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>No origination fees</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--commerce-green))]">Auto Financing</CardTitle>
                  <CardDescription>
                    Competitive auto loan rates for new and used vehicles with flexible terms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-teal))]">Starting at 5.49% APR</div>
                    <div className="text-sm text-muted-foreground">New vehicle financing</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>New and used vehicle loans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Up to 84-month terms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Pre-approval available</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Refinancing options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Loan Calculator & Process */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Calculator className="h-8 w-8 text-[hsl(var(--commerce-green))] mr-3" />
                    <CardTitle>Loan Calculator</CardTitle>
                  </div>
                  <CardDescription>
                    Estimate your monthly payments and see what you can afford.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Loan Amount</label>
                      <div className="mt-1 p-3 border rounded-md bg-muted">$250,000</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Interest Rate</label>
                      <div className="mt-1 p-3 border rounded-md bg-muted">6.25% APR</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Term</label>
                      <div className="mt-1 p-3 border rounded-md bg-muted">30 years</div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-lg font-semibold">Estimated Monthly Payment:</div>
                      <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">$1,539</div>
                    </div>
                    <Button variant="commerce" className="w-full">
                      Use Interactive Calculator
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Simple Application Process</CardTitle>
                  <CardDescription>
                    Get approved in as little as 24 hours with our streamlined process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--commerce-green))] text-white rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold">Apply Online</h4>
                        <p className="text-sm text-muted-foreground">Complete our secure online application in minutes.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--commerce-green))] text-white rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold">Get Pre-Approved</h4>
                        <p className="text-sm text-muted-foreground">Receive your pre-approval decision within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--commerce-green))] text-white rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold">Close Your Loan</h4>
                        <p className="text-sm text-muted-foreground">Work with our team to finalize your loan details.</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Start Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="commerce" size="lg" className="text-lg px-8">
                Speak with a Loan Specialist
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MortgagesLoans;