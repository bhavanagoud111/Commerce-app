import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, Home, TrendingUp, Shield, PiggyBank, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Banking & Cards",
      description: "Checking accounts, savings, credit cards, and debit cards designed for your needs.",
      features: ["Interest checking", "High-yield savings", "Rewards credit cards"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Mortgages & Loans", 
      description: "Home loans, personal loans, and auto financing with competitive rates.",
      features: ["Home mortgages", "Personal loans", "Auto financing"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investment Services",
      description: "Grow your wealth with our investment and retirement planning solutions.",
      features: ["Investment management", "Retirement planning", "Brokerage services"]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Banking",
      description: "Complete banking solutions for businesses of all sizes.",
      features: ["Business checking", "Commercial loans", "Treasury services"]
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Wealth Management",
      description: "Personalized wealth management and trust services.",
      features: ["Trust services", "Estate planning", "Private banking"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Digital Security",
      description: "Advanced security features to protect your financial information.",
      features: ["Fraud protection", "Secure banking", "Identity monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--commerce-green))] mb-4">
            You have questions, and we have answers.
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Whether you need help setting short-term goals or planning for your future, our Ideas & Tips page offers simple solutions to complex financial challenges. 
            Explore our articles when you have financial questions to help you make informed decisions, and then get back to what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border-0 shadow-[var(--shadow-card)]">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--commerce-green))] to-[hsl(var(--commerce-teal))] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[hsl(var(--commerce-teal))] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}>
                  <Button variant="ghost" className="text-[hsl(var(--commerce-green))] hover:text-[hsl(var(--commerce-teal))] p-0 h-auto font-semibold group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="commerce" size="lg" className="text-lg px-8">
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;