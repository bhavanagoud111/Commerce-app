import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  AlertTriangle,
  Search,
  Send,
  Bot,
  User,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  Star,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

const Support = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hello! I'm your Commerce Bank assistant. How can I help you today?", sender: "bot", timestamp: new Date() }
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const [faqCategories] = useState([
    {
      id: 1,
      name: "Account Management",
      icon: "👤",
      questions: [
        { id: 1, question: "How do I open a new account?", answer: "You can open a new account online through our website or by visiting any of our branches. The process takes about 10-15 minutes and requires valid identification." },
        { id: 2, question: "How do I close my account?", answer: "To close your account, please contact our customer service team or visit a branch. Make sure to transfer any remaining funds and cancel any automatic payments first." },
        { id: 3, question: "Can I have multiple accounts?", answer: "Yes, you can have multiple checking and savings accounts. Each account has its own account number and can be managed independently." }
      ]
    },
    {
      id: 2,
      name: "Online Banking",
      icon: "💻",
      questions: [
        { id: 4, question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email to reset your password." },
        { id: 5, question: "Is online banking secure?", answer: "Yes, we use bank-level encryption and security measures including two-factor authentication to protect your information." },
        { id: 6, question: "Can I access my account from mobile?", answer: "Yes, download our mobile banking app from the App Store or Google Play Store for secure mobile banking access." }
      ]
    },
    {
      id: 3,
      name: "Transfers & Payments",
      icon: "💸",
      questions: [
        { id: 7, question: "How do I transfer money between accounts?", answer: "Log into online banking, go to 'Transfers', select your accounts and amount, then confirm the transfer." },
        { id: 8, question: "What are the transfer limits?", answer: "Internal transfers have no limits. External transfers are limited to $5,000 per day for security purposes." },
        { id: 9, question: "How long do transfers take?", answer: "Internal transfers are instant. External transfers typically take 1-3 business days to complete." }
      ]
    },
    {
      id: 4,
      name: "Security & Fraud",
      icon: "🔒",
      questions: [
        { id: 10, question: "How do I report suspicious activity?", answer: "Contact us immediately at 1-800-COMMERCE or through our fraud reporting form. We'll investigate and protect your account." },
        { id: 11, question: "What should I do if my card is lost?", answer: "Call us immediately to freeze your card. You can also freeze it through online banking or our mobile app." },
        { id: 12, question: "How do I enable two-factor authentication?", answer: "Go to Profile & Settings > Security, then enable Two-Factor Authentication and follow the setup instructions." }
      ]
    }
  ]);

  const [supportTickets] = useState([
    { id: 1, subject: "Password Reset Issue", status: "open", priority: "high", created: "2024-01-15", lastUpdate: "2024-01-15" },
    { id: 2, subject: "Transfer Not Completed", status: "in-progress", priority: "medium", created: "2024-01-14", lastUpdate: "2024-01-15" },
    { id: 3, subject: "Account Statement Request", status: "resolved", priority: "low", created: "2024-01-10", lastUpdate: "2024-01-12" }
  ]);

  const [branches] = useState([
    { id: 1, name: "Downtown Branch", address: "123 Main St, Anytown, CA 12345", phone: "(555) 123-4567", hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM", distance: "0.5 miles" },
    { id: 2, name: "Mall Branch", address: "456 Shopping Center, Anytown, CA 12345", phone: "(555) 234-5678", hours: "Mon-Fri: 10AM-6PM, Sat-Sun: 10AM-4PM", distance: "2.1 miles" },
    { id: 3, name: "Airport Branch", address: "789 Airport Blvd, Anytown, CA 12345", phone: "(555) 345-6789", hours: "Mon-Fri: 8AM-4PM", distance: "5.3 miles" }
  ]);

  const [atms] = useState([
    { id: 1, location: "123 Main St", type: "ATM", services: ["Cash Withdrawal", "Deposit", "Balance Inquiry"], distance: "0.2 miles" },
    { id: 2, location: "456 Shopping Center", type: "ATM", services: ["Cash Withdrawal", "Deposit"], distance: "1.8 miles" },
    { id: 3, location: "789 Airport Blvd", type: "ATM", services: ["Cash Withdrawal", "Balance Inquiry"], distance: "4.9 miles" }
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        sender: "user",
        timestamp: new Date()
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: chatMessages.length + 2,
          text: "I understand you're asking about: " + chatMessage + ". Let me help you with that. Can you provide more details?",
          sender: "bot",
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-red-600 bg-red-100';
      case 'in-progress':
        return 'text-yellow-600 bg-yellow-100';
      case 'resolved':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--commerce-teal))] to-[hsl(var(--commerce-light-blue))] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Customer Support</h1>
                <p className="text-sm text-gray-600">Get help and support for your banking needs</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="help" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="help">Help Center</TabsTrigger>
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
            <TabsTrigger value="locations">Find Us</TabsTrigger>
          </TabsList>

          {/* Help Center Tab */}
          <TabsContent value="help" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Help Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Search for help topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqCategories.map((category) => (
                <Card key={category.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.questions.map((faq) => (
                        <div key={faq.id} className="border-b pb-4 last:border-b-0">
                          <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer font-medium hover:text-blue-600">
                              <span>{faq.question}</span>
                              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-2 text-sm text-gray-600">
                              {faq.answer}
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Live Chat Support
                  </CardTitle>
                  <CardDescription>Chat with our support team in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-lg p-4 space-y-4 overflow-y-auto">
                    {chatMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs p-3 rounded-lg ${
                          message.sender === 'user' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="flex items-center space-x-2 mb-1">
                            {message.sender === 'bot' && <Bot className="h-4 w-4" />}
                            {message.sender === 'user' && <User className="h-4 w-4" />}
                            <span className="text-xs opacity-75">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p>{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Input
                      placeholder="Type your message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Report Fraud
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Create Ticket
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tickets Tab */}
          <TabsContent value="tickets" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Support Tickets</CardTitle>
                  <Button>
                    <FileText className="h-4 w-4 mr-2" />
                    New Ticket
                  </Button>
                </div>
                <CardDescription>Track and manage your support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{ticket.subject}</p>
                          <p className="text-sm text-gray-600">Created: {ticket.created}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(ticket.status)}>
                          {ticket.status}
                        </Badge>
                        <Badge className={getPriorityColor(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Create New Ticket</CardTitle>
                <CardDescription>Submit a new support request</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Questions</SelectItem>
                        <SelectItem value="security">Security Concerns</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide detailed information about your issue..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Find Us Tab */}
          <TabsContent value="locations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Branch Locations
                  </CardTitle>
                  <CardDescription>Find a Commerce Bank branch near you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {branches.map((branch) => (
                      <div key={branch.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{branch.name}</h4>
                            <p className="text-sm text-gray-600">{branch.address}</p>
                            <p className="text-sm text-gray-600">{branch.phone}</p>
                            <p className="text-sm text-gray-600">{branch.hours}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{branch.distance}</Badge>
                            <Button variant="ghost" size="sm" className="mt-2">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    ATM Locations
                  </CardTitle>
                  <CardDescription>Find ATMs and self-service locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {atms.map((atm) => (
                      <div key={atm.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{atm.location}</h4>
                            <p className="text-sm text-gray-600">{atm.type}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {atm.services.map((service, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{atm.distance}</Badge>
                            <Button variant="ghost" size="sm" className="mt-2">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold">Phone Support</h4>
                    <p className="text-sm text-gray-600">1-800-COMMERCE</p>
                    <p className="text-sm text-gray-600">24/7 Support</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-sm text-gray-600">support@commercebank.com</p>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                  <div className="text-center">
                    <MessageCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h4 className="font-semibold">Live Chat</h4>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                    <p className="text-sm text-gray-600">Instant support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Support;
