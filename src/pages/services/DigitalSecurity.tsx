import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, CheckCircle, Lock, Eye, Smartphone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import digitalSecurityImage from "@/assets/digital-security.jpg";

const DigitalSecurity = () => {
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
                  <Shield className="h-10 w-10 text-white mr-4" />
                  <h1 className="text-4xl font-bold text-white">Digital Security</h1>
                </div>
                <p className="text-xl text-white/90 mb-8">
                  Advanced security features and fraud protection to safeguard your financial information and give you peace of mind in the digital age.
                </p>
                <Button variant="secondary" size="lg">
                  Learn About Security
                </Button>
              </div>
              <div className="lg:text-center">
                <img 
                  src={digitalSecurityImage} 
                  alt="Digital Security Services" 
                  className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[hsl(var(--commerce-green))] mb-12">Advanced Security Features</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Lock className="h-6 w-6 text-[hsl(var(--commerce-green))] mr-2" />
                    <CardTitle className="text-[hsl(var(--commerce-green))]">Multi-Factor Authentication</CardTitle>
                  </div>
                  <CardDescription>
                    Multiple layers of security to protect your accounts from unauthorized access.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Biometric authentication</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>SMS and email verification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Secure authentication apps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Device registration</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--commerce-green))/10] to-[hsl(var(--commerce-teal))/10] rounded-lg">
                    <div className="text-sm text-muted-foreground">Security Level</div>
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">Bank-Grade</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Eye className="h-6 w-6 text-[hsl(var(--commerce-green))] mr-2" />
                    <CardTitle className="text-[hsl(var(--commerce-green))]">Real-Time Monitoring</CardTitle>
                  </div>
                  <CardDescription>
                    24/7 monitoring of your accounts for suspicious activity and potential fraud.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Transaction monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Behavioral analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Instant fraud alerts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Location-based security</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--commerce-green))/10] to-[hsl(var(--commerce-teal))/10] rounded-lg">
                    <div className="text-sm text-muted-foreground">Response Time</div>
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">Instant</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Smartphone className="h-6 w-6 text-[hsl(var(--commerce-green))] mr-2" />
                    <CardTitle className="text-[hsl(var(--commerce-green))]">Mobile Security</CardTitle>
                  </div>
                  <CardDescription>
                    Advanced mobile banking security features to protect your financial data on the go.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>App-based authentication</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Encrypted data transmission</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Remote app locking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3" />
                      <span>Secure messaging</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--commerce-green))/10] to-[hsl(var(--commerce-teal))/10] rounded-lg">
                    <div className="text-sm text-muted-foreground">Encryption</div>
                    <div className="text-2xl font-bold text-[hsl(var(--commerce-green))]">256-Bit</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fraud Protection Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-[hsl(var(--commerce-green))] mb-12">Comprehensive Fraud Protection</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="h-6 w-6 text-[hsl(var(--commerce-green))] mr-2" />
                      <CardTitle>Fraud Prevention</CardTitle>
                    </div>
                    <CardDescription>
                      Proactive measures to prevent fraud before it happens.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">AI-Powered Detection</h4>
                          <p className="text-sm text-muted-foreground">Machine learning algorithms detect unusual patterns</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Transaction Limits</h4>
                          <p className="text-sm text-muted-foreground">Customizable spending limits and restrictions</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Merchant Verification</h4>
                          <p className="text-sm text-muted-foreground">Verification of legitimate merchants and transactions</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Identity Protection</CardTitle>
                    <CardDescription>
                      Comprehensive identity monitoring and protection services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Dark Web Monitoring</h4>
                          <p className="text-sm text-muted-foreground">Continuous monitoring of your personal information</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Credit Monitoring</h4>
                          <p className="text-sm text-muted-foreground">Regular credit report monitoring and alerts</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[hsl(var(--commerce-teal))] mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Identity Recovery</h4>
                          <p className="text-sm text-muted-foreground">Dedicated support for identity theft recovery</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Security Tools */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Security Control Center</CardTitle>
                  <CardDescription>
                    Manage all your security settings and preferences in one place.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Card Controls</span>
                        <div className="w-12 h-6 bg-[hsl(var(--commerce-green))] rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Lock/unlock cards instantly via mobile app</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Alert Preferences</span>
                        <div className="w-12 h-6 bg-[hsl(var(--commerce-green))] rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Customize security alerts and notifications</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Travel Notifications</span>
                        <div className="w-12 h-6 bg-muted rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Set travel dates to prevent declined transactions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Education</CardTitle>
                  <CardDescription>
                    Stay informed about the latest security threats and best practices.
                  </CardDescription>
                  </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Phishing Protection Guide</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Learn how to identify and avoid phishing emails and websites.
                      </p>
                      <Button variant="outline" size="sm">Download Guide</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Password Security Tips</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Best practices for creating and managing secure passwords.
                      </p>
                      <Button variant="outline" size="sm">View Tips</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Security Webinars</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Join our monthly security awareness webinars.
                      </p>
                      <Button variant="outline" size="sm">Register Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security Promise */}
            <div className="bg-gradient-to-r from-[hsl(var(--commerce-green))/5] to-[hsl(var(--commerce-teal))/5] rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-[hsl(var(--commerce-green))] mb-6">Our Security Promise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Zero Liability</h3>
                  <p className="text-muted-foreground">
                    You're not responsible for unauthorized transactions when you report them promptly. 
                    We'll investigate and restore your funds quickly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Our security team is available around the clock to help with any security concerns 
                    or to assist with account recovery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Continuous Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously invest in the latest security technologies and stay ahead of 
                    emerging threats to protect your financial information.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="commerce" size="lg" className="text-lg px-8">
                Review Your Security Settings
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalSecurity;