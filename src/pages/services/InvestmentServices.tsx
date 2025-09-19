import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp, CheckCircle, Target, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import investmentServicesImage from "@/assets/investment-services.jpg";

const InvestmentServices = () => {
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
                  <TrendingUp className="h-10 w-10 text-white mr-4" />
                  <h1 className="text-4xl font-bold text-white">Investment Services</h1>
                </div>
                <p className="text-xl text-white/90 mb-8">
                  Build and preserve your wealth with our comprehensive investment management and retirement planning solutions designed for your future.
                </p>
                <Button variant="secondary" size="lg">
                  Schedule Consultation
                </Button>
              </div>
              <div className="lg:text-center">
                <img 
                  src={investmentServicesImage} 
                  alt="Investment Services" 
                  className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investment Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[hsl(var(--commerce-green))] mb-12">Investment Solutions</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="h-6 w-6 text-[hsl(var(--commerce-green))] mr-2" />
                    <CardTitle className="text-[hsl(var(--commerce-green))]">Portfolio Management</CardTitle>
                  </div>
                  <CardDescription>
                    Professional portfolio management tailored to your risk tolerance and financial goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Diversified investment strategies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Regular portfolio rebalancing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Risk assessment and monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Quarterly performance reviews</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--commerce-green))/10] to-[hsl(var(--commerce-teal))/10] rounded-lg">
                    <div className="text-sm text-muted-foreground">Minimum Investment</div>
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">$25,000</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <PieChart className="h-6 w-6 text-[hsl(var(--commerce-green))] mr-2" />
                    <CardTitle className="text-[hsl(var(--commerce-green))]">Retirement Planning</CardTitle>
                  </div>
                  <CardDescription>
                    Comprehensive retirement planning services including 401(k) management and IRA options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Traditional and Roth IRAs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>401(k) rollover services</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Retirement income strategies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Social Security optimization</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--commerce-green))/10] to-[hsl(var(--commerce-teal))/10] rounded-lg">
                    <div className="text-sm text-muted-foreground">Average Annual Return</div>
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">8.5%</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--commerce-green))]">Brokerage Services</CardTitle>
                  <CardDescription>
                    Full-service brokerage with access to stocks, bonds, mutual funds, and ETFs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Commission-free stock trades</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Research and market insights</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Options and futures trading</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Mobile trading platform</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--commerce-green))/10] to-[hsl(var(--commerce-teal))/10] rounded-lg">
                    <div className="text-sm text-muted-foreground">Account Minimum</div>
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">$0</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Investment Performance & Planning Tools */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>
                    Track the performance of our managed portfolios over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Conservative Portfolio</span>
                      <span className="text-[hsl(var(--commerce-green))] font-semibold">+6.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Moderate Portfolio</span>
                      <span className="text-[hsl(var(--commerce-green))] font-semibold">+8.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Aggressive Portfolio</span>
                      <span className="text-[hsl(var(--commerce-green))] font-semibold">+11.3%</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-muted-foreground mb-2">Average returns over the past 5 years</div>
                      <div className="text-xs text-muted-foreground">
                        Past performance does not guarantee future results. All investments carry risk.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Planning Tools</CardTitle>
                  <CardDescription>
                    Use our tools to plan your investment strategy and retirement goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Target className="h-4 w-4 mr-2" />
                      Retirement Calculator
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <PieChart className="h-4 w-4 mr-2" />
                      Risk Assessment Tool
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Investment Goal Planner
                    </Button>
                    <div className="pt-4">
                      <Button variant="commerce" className="w-full">
                        Schedule Financial Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Invest With Us */}
            <div className="bg-gradient-to-r from-[hsl(var(--commerce-green))/5] to-[hsl(var(--commerce-teal))/5] rounded-lg p-8">
              <h2 className="text-3xl font-bold text-[hsl(var(--commerce-green))] mb-6">Why Invest With Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Our certified financial planners and investment advisors have decades of experience 
                    helping clients achieve their financial goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Transparent Fees</h3>
                  <p className="text-muted-foreground">
                    No hidden fees or surprise charges. Our fee structure is simple, transparent, 
                    and aligned with your investment success.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    Every client receives a customized investment strategy based on their unique 
                    financial situation, goals, and risk tolerance.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="commerce" size="lg" className="text-lg px-8">
                Start Your Investment Journey
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestmentServices;