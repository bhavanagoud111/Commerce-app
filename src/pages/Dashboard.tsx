import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Send, 
  Download, 
  Filter,
  User,
  Settings,
  HelpCircle,
  Bell,
  LogOut,
  MapPin,
  Gift,
  Shield,
  MessageCircle,
  Eye,
  EyeOff,
  Calendar,
  Clock,
  QrCode,
  Receipt,
  Plus,
  Edit,
  Trash2
} from "lucide-react";

const Dashboard = () => {
  const [user] = useState({
    name: "John Smith",
    accountNumber: "****1234",
    balance: 12547.89,
    lastLogin: "Today at 2:30 PM"
  });

  const [accounts] = useState([
    { id: 1, name: "Checking Account", number: "****1234", balance: 8547.89, type: "checking", available: 8547.89 },
    { id: 2, name: "Savings Account", number: "****5678", balance: 4000.00, type: "savings", available: 4000.00 },
    { id: 3, name: "Credit Card", number: "****9012", balance: -1250.00, type: "credit", available: 8750.00 }
  ]);

  const [recentTransactions] = useState([
    { id: 1, description: "Grocery Store Purchase", amount: -85.50, date: "2024-01-15", type: "debit", category: "Food" },
    { id: 2, description: "Salary Deposit", amount: 3500.00, date: "2024-01-14", type: "credit", category: "Income" },
    { id: 3, description: "ATM Withdrawal", amount: -100.00, date: "2024-01-13", type: "debit", category: "Cash" },
    { id: 4, description: "Online Transfer", amount: -250.00, date: "2024-01-12", type: "debit", category: "Transfer" },
    { id: 5, description: "Bill Payment - Electric", amount: -125.75, date: "2024-01-11", type: "debit", category: "Utilities" }
  ]);

  const [beneficiaries] = useState([
    { id: 1, name: "Jane Doe", account: "****5678", bank: "Commerce Bank", type: "internal" },
    { id: 2, name: "ABC Company", account: "****1234", bank: "Other Bank", type: "external" },
    { id: 3, name: "John's Savings", account: "****9012", bank: "Commerce Bank", type: "internal" }
  ]);

  const [scheduledTransfers] = useState([
    { id: 1, to: "Savings Account", amount: 500.00, frequency: "Monthly", nextDate: "2024-02-01" },
    { id: 2, to: "Rent Payment", amount: 1200.00, frequency: "Monthly", nextDate: "2024-02-01" }
  ]);

  const [showBalance, setShowBalance] = useState(true);

  const quickActions = [
    { title: "Transfer Money", icon: Send, color: "text-blue-500", action: "transfer" },
    { title: "Pay Bills", icon: CreditCard, color: "text-green-500", action: "bills" },
    { title: "Download Statement", icon: Download, color: "text-purple-500", action: "statement" },
    { title: "Find Branch", icon: MapPin, color: "text-orange-500", action: "branch" }
  ];

  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    // Implement quick action logic
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
                <h1 className="text-2xl font-bold text-gray-900">Commerce Bank</h1>
                <p className="text-sm text-gray-600">Online Banking</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Personalized Welcome Message */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h2>
          <p className="text-gray-600">Last login: {user.lastLogin}</p>
        </div>

        {/* Account Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Account Overview
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBalance(!showBalance)}
                >
                  {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div key={account.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <h3 className="font-semibold">{account.name}</h3>
                      <p className="text-sm text-gray-600">{account.number}</p>
                      {showBalance && (
                        <p className="text-xs text-gray-500">Available: ${account.available.toLocaleString()}</p>
                      )}
                    </div>
                    <div className="text-right">
                      {showBalance ? (
                        <p className={`font-bold ${account.balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                          ${Math.abs(account.balance).toLocaleString()}
                        </p>
                      ) : (
                        <p className="font-bold text-gray-400">••••••</p>
                      )}
                      <Badge variant={account.type === 'credit' ? 'destructive' : 'secondary'}>
                        {account.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="h-20 flex flex-col items-center space-y-2"
                    onClick={() => handleQuickAction(action.action)}
                  >
                    <action.icon className={`h-6 w-6 ${action.color}`} />
                    <span className="text-xs">{action.title}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="transfers">Transfers</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Transactions</CardTitle>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="debit">Debits</SelectItem>
                        <SelectItem value="credit">Credits</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <TrendingUp className="h-5 w-5 text-green-600" />
                          ) : (
                            <CreditCard className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-600">{transaction.date}</p>
                            <Badge variant="outline" className="text-xs">{transaction.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <Button variant="ghost" size="sm">
                          <Receipt className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transfers Tab */}
          <TabsContent value="transfers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Transfer */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Transfer</CardTitle>
                  <CardDescription>Transfer money between your accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fromAccount">From Account</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                          <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="toAccount">To Account</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                          <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <Button className="w-full">Transfer Now</Button>
                  </div>
                </CardContent>
              </Card>

              {/* External Transfer */}
              <Card>
                <CardHeader>
                  <CardTitle>External Transfer</CardTitle>
                  <CardDescription>Transfer to other banks or people</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="recipient">Recipient Name</Label>
                      <Input placeholder="Enter recipient name" />
                    </div>
                    <div>
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input placeholder="Enter account number" />
                    </div>
                    <div>
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input placeholder="Enter routing number" />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <Button className="w-full">Send Transfer</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Beneficiary Management */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Beneficiaries</CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {beneficiaries.map((beneficiary) => (
                      <div key={beneficiary.id} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{beneficiary.name}</p>
                          <p className="text-sm text-gray-600">{beneficiary.account} • {beneficiary.bank}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Scheduled Transfers */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Scheduled Transfers</CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scheduledTransfers.map((transfer) => (
                      <div key={transfer.id} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{transfer.to}</p>
                          <p className="text-sm text-gray-600">${transfer.amount} • {transfer.frequency}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Next: {transfer.nextDate}</p>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bill Payments */}
            <Card>
              <CardHeader>
                <CardTitle>Bill Payments & Auto-Pay</CardTitle>
                <CardDescription>Manage your recurring bills and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Electric Bill</h4>
                    <p className="text-sm text-gray-600 mb-2">Due: Feb 15, 2024</p>
                    <p className="text-lg font-bold">$125.75</p>
                    <Button className="w-full mt-2" size="sm">Pay Now</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Internet Bill</h4>
                    <p className="text-sm text-gray-600 mb-2">Due: Feb 20, 2024</p>
                    <p className="text-lg font-bold">$89.99</p>
                    <Button className="w-full mt-2" size="sm">Pay Now</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Phone Bill</h4>
                    <p className="text-sm text-gray-600 mb-2">Due: Feb 25, 2024</p>
                    <p className="text-lg font-bold">$65.00</p>
                    <Button className="w-full mt-2" size="sm">Pay Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Code Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="h-5 w-5 mr-2" />
                  QR Code Payments
                </CardTitle>
                <CardDescription>Generate QR codes for easy payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Your Payment QR Code</h4>
                    <p className="text-sm text-gray-600 mb-4">Share this QR code to receive payments</p>
                    <div className="space-x-2">
                      <Button size="sm">Generate New</Button>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Smith" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.smith@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Address Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" defaultValue="123 Main St" />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="Anytown" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="CA" />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" defaultValue="12345" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Security Settings</h3>
                    <div className="space-y-4">
                      <Button variant="outline">Change Password</Button>
                      <Button variant="outline">Update PIN</Button>
                      <Button variant="outline">Two-Factor Authentication</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Notification Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <Label>Email notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <Label>SMS notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <Label>Push notifications</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Customer Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Report Fraud
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Find Branch/ATM
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      FAQ
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gift className="h-5 w-5 mr-2" />
                    Offers & Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">Credit Card Rewards</h4>
                      <p className="text-sm text-gray-600">Earn 2% cashback on all purchases</p>
                      <Button size="sm" className="mt-2">Learn More</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">Savings Bonus</h4>
                      <p className="text-sm text-gray-600">Get $50 bonus for opening a new savings account</p>
                      <Button size="sm" className="mt-2">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
