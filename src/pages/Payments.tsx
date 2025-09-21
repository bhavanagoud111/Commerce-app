import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Send, 
  ArrowUpDown,
  CreditCard,
  Calendar,
  Clock,
  QrCode,
  Receipt,
  Plus,
  Edit,
  Trash2,
  DollarSign,
  User,
  Building,
  Smartphone,
  Wifi,
  Zap,
  Home,
  Car,
  ShoppingCart,
  Utensils,
  Download
} from "lucide-react";

const Payments = () => {
  const [transferType, setTransferType] = useState("internal");

  const [accounts] = useState([
    { id: 1, name: "Checking Account", number: "****1234", balance: 8547.89, type: "checking" },
    { id: 2, name: "Savings Account", number: "****5678", balance: 4000.00, type: "savings" },
    { id: 3, name: "Credit Card", number: "****9012", balance: -1250.00, type: "credit" }
  ]);

  const [beneficiaries] = useState([
    { id: 1, name: "Jane Doe", account: "****5678", bank: "Commerce Bank", type: "internal", email: "jane@email.com" },
    { id: 2, name: "ABC Company", account: "****1234", bank: "Other Bank", type: "external", email: "payments@abc.com" },
    { id: 3, name: "John's Savings", account: "****9012", bank: "Commerce Bank", type: "internal", email: "john@email.com" },
    { id: 4, name: "Electric Company", account: "****5555", bank: "Utility Bank", type: "bill", email: "billing@electric.com" }
  ]);

  const [scheduledTransfers] = useState([
    { id: 1, to: "Savings Account", amount: 500.00, frequency: "Monthly", nextDate: "2024-02-01", status: "active" },
    { id: 2, to: "Rent Payment", amount: 1200.00, frequency: "Monthly", nextDate: "2024-02-01", status: "active" },
    { id: 3, to: "Investment Account", amount: 300.00, frequency: "Bi-weekly", nextDate: "2024-01-25", status: "active" }
  ]);

  const [recentTransfers] = useState([
    { id: 1, to: "Jane Doe", amount: 150.00, date: "2024-01-15", status: "completed", type: "internal" },
    { id: 2, to: "Electric Bill", amount: 125.75, date: "2024-01-14", status: "completed", type: "bill" },
    { id: 3, to: "ABC Company", amount: 250.00, date: "2024-01-13", status: "pending", type: "external" }
  ]);

  const [bills] = useState([
    { id: 1, name: "Electric Bill", amount: 125.75, dueDate: "2024-02-15", category: "utilities", autoPay: true },
    { id: 2, name: "Internet Bill", amount: 89.99, dueDate: "2024-02-20", category: "utilities", autoPay: true },
    { id: 3, name: "Phone Bill", amount: 65.00, dueDate: "2024-02-25", category: "utilities", autoPay: false },
    { id: 4, name: "Credit Card Payment", amount: 250.00, dueDate: "2024-02-28", category: "credit", autoPay: true }
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'utilities':
        return <Zap className="h-5 w-5 text-yellow-500" />;
      case 'credit':
        return <CreditCard className="h-5 w-5 text-blue-500" />;
      case 'rent':
        return <Home className="h-5 w-5 text-green-500" />;
      case 'food':
        return <Utensils className="h-5 w-5 text-orange-500" />;
      case 'transport':
        return <Car className="h-5 w-5 text-purple-500" />;
      default:
        return <DollarSign className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
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
                <h1 className="text-2xl font-bold text-gray-900">Payments & Transfers</h1>
                <p className="text-sm text-gray-600">Manage your money transfers and bill payments</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="transfers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transfers">Transfers</TabsTrigger>
            <TabsTrigger value="bills">Bill Payments</TabsTrigger>
            <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>

          {/* Transfers Tab */}
          <TabsContent value="transfers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Internal Transfer */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ArrowUpDown className="h-5 w-5 mr-2" />
                    Internal Transfer
                  </CardTitle>
                  <CardDescription>Transfer between your Commerce Bank accounts</CardDescription>
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
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id.toString()}>
                              {account.name} ({account.number}) - ${account.balance.toFixed(2)}
                            </SelectItem>
                          ))}
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
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id.toString()}>
                              {account.name} ({account.number})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="memo">Memo (Optional)</Label>
                      <Input placeholder="Enter memo" />
                    </div>
                    <Button className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Transfer Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* External Transfer */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    External Transfer
                  </CardTitle>
                  <CardDescription>Transfer to other banks or people</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fromAccountExt">From Account</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id.toString()}>
                              {account.name} ({account.number})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="recipientName">Recipient Name</Label>
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
                      <Label htmlFor="amountExt">Amount</Label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="memoExt">Memo (Optional)</Label>
                      <Input placeholder="Enter memo" />
                    </div>
                    <Button className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Transfer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransfers.map((transfer) => (
                    <div key={transfer.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Send className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transfer.to}</p>
                          <p className="text-sm text-gray-600">{transfer.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${transfer.amount.toFixed(2)}</p>
                        <Badge className={getStatusColor(transfer.status)}>
                          {transfer.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bill Payments Tab */}
          <TabsContent value="bills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pay Bills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Pay Bills
                  </CardTitle>
                  <CardDescription>Pay your bills and manage auto-pay</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="billSelect">Select Bill</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a bill to pay" />
                        </SelectTrigger>
                        <SelectContent>
                          {bills.map((bill) => (
                            <SelectItem key={bill.id} value={bill.id.toString()}>
                              {bill.name} - ${bill.amount.toFixed(2)} (Due: {bill.dueDate})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="paymentAccount">Payment Account</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id.toString()}>
                              {account.name} ({account.number})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="paymentAmount">Payment Amount</Label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="paymentDate">Payment Date</Label>
                      <Input type="date" />
                    </div>
                    <Button className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay Bill
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bill Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Bill Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bills.map((bill) => (
                      <div key={bill.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getCategoryIcon(bill.category)}
                          <div>
                            <p className="font-medium">{bill.name}</p>
                            <p className="text-sm text-gray-600">Due: {bill.dueDate}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${bill.amount.toFixed(2)}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={bill.autoPay ? "default" : "outline"}>
                              {bill.autoPay ? "Auto-Pay" : "Manual"}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Beneficiaries Tab */}
          <TabsContent value="beneficiaries" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Beneficiaries</CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Beneficiary
                  </Button>
                </div>
                <CardDescription>Manage your saved beneficiaries for quick transfers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {beneficiaries.map((beneficiary) => (
                    <div key={beneficiary.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{beneficiary.name}</p>
                          <p className="text-sm text-gray-600">{beneficiary.account} • {beneficiary.bank}</p>
                          <p className="text-sm text-gray-500">{beneficiary.email}</p>
                        </div>
                        <Badge variant={beneficiary.type === 'internal' ? 'default' : 'outline'}>
                          {beneficiary.type}
                        </Badge>
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
          </TabsContent>

          {/* Scheduled Transfers Tab */}
          <TabsContent value="scheduled" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Scheduled Transfers</CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Transfer
                  </Button>
                </div>
                <CardDescription>Manage your recurring and scheduled transfers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledTransfers.map((transfer) => (
                    <div key={transfer.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transfer.to}</p>
                          <p className="text-sm text-gray-600">${transfer.amount.toFixed(2)} • {transfer.frequency}</p>
                          <p className="text-sm text-gray-500">Next: {transfer.nextDate}</p>
                        </div>
                        <Badge className={getStatusColor(transfer.status)}>
                          {transfer.status}
                        </Badge>
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
          </TabsContent>
        </Tabs>

        {/* QR Code Payments */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <QrCode className="h-5 w-5 mr-2" />
              QR Code Payments
            </CardTitle>
            <CardDescription>Generate QR codes for easy payments and transfers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-6">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Your Payment QR Code</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Share this QR code to receive payments instantly. Recipients can scan to send you money.
                </p>
                <div className="space-x-2">
                  <Button>
                    <QrCode className="h-4 w-4 mr-2" />
                    Generate New
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payments;
