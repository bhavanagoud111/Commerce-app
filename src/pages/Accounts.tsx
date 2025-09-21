import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Download, 
  Filter,
  Eye,
  EyeOff,
  Calendar,
  CreditCard,
  PiggyBank,
  Receipt,
  FileText,
  ArrowUpDown,
  Plus,
  Settings
} from "lucide-react";

const Accounts = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState(1);

  const [accounts] = useState([
    { 
      id: 1, 
      name: "Checking Account", 
      number: "****1234", 
      balance: 8547.89, 
      available: 8547.89,
      type: "checking",
      interestRate: 0.01,
      lastActivity: "2024-01-15"
    },
    { 
      id: 2, 
      name: "Savings Account", 
      number: "****5678", 
      balance: 4000.00, 
      available: 4000.00,
      type: "savings",
      interestRate: 2.5,
      lastActivity: "2024-01-14"
    },
    { 
      id: 3, 
      name: "Credit Card", 
      number: "****9012", 
      balance: -1250.00, 
      available: 8750.00,
      type: "credit",
      interestRate: 18.99,
      lastActivity: "2024-01-13"
    }
  ]);

  const [transactions] = useState([
    { id: 1, description: "Grocery Store Purchase", amount: -85.50, date: "2024-01-15", type: "debit", category: "Food", balance: 8547.89 },
    { id: 2, description: "Salary Deposit", amount: 3500.00, date: "2024-01-14", type: "credit", category: "Income", balance: 8633.39 },
    { id: 3, description: "ATM Withdrawal", amount: -100.00, date: "2024-01-13", type: "debit", category: "Cash", balance: 5133.39 },
    { id: 4, description: "Online Transfer", amount: -250.00, date: "2024-01-12", type: "debit", category: "Transfer", balance: 5233.39 },
    { id: 5, description: "Interest Payment", amount: 8.50, date: "2024-01-11", type: "credit", category: "Interest", balance: 5483.39 },
    { id: 6, description: "Bill Payment - Electric", amount: -125.75, date: "2024-01-10", type: "debit", category: "Utilities", balance: 5474.89 },
    { id: 7, description: "Direct Deposit", amount: 2500.00, date: "2024-01-09", type: "credit", category: "Income", balance: 5600.64 },
    { id: 8, description: "Coffee Shop", amount: -4.75, date: "2024-01-08", type: "debit", category: "Food", balance: 3100.64 }
  ]);

  const [statements] = useState([
    { id: 1, month: "January 2024", startDate: "2024-01-01", endDate: "2024-01-31", transactions: 15, balance: 8547.89 },
    { id: 2, month: "December 2023", startDate: "2023-12-01", endDate: "2023-12-31", transactions: 22, balance: 7234.56 },
    { id: 3, month: "November 2023", startDate: "2023-11-01", endDate: "2023-11-30", transactions: 18, balance: 6891.23 }
  ]);

  const currentAccount = accounts.find(acc => acc.id === selectedAccount);

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'checking':
        return <CreditCard className="h-6 w-6" />;
      case 'savings':
        return <PiggyBank className="h-6 w-6" />;
      case 'credit':
        return <CreditCard className="h-6 w-6" />;
      default:
        return <DollarSign className="h-6 w-6" />;
    }
  };

  const getAccountColor = (type: string) => {
    switch (type) {
      case 'checking':
        return 'text-blue-600';
      case 'savings':
        return 'text-green-600';
      case 'credit':
        return 'text-red-600';
      default:
        return 'text-gray-600';
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
                <h1 className="text-2xl font-bold text-gray-900">Account Management</h1>
                <p className="text-sm text-gray-600">View and manage your accounts</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showBalance ? 'Hide' : 'Show'} Balance
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Account Selection */}
        <div className="mb-6">
          <Label htmlFor="accountSelect">Select Account</Label>
          <Select value={selectedAccount.toString()} onValueChange={(value) => setSelectedAccount(parseInt(value))}>
            <SelectTrigger className="w-full">
              <SelectValue />
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

        {/* Account Overview */}
        {currentAccount && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getAccountColor(currentAccount.type).replace('text-', 'bg-').replace('-600', '-100')}`}>
                      {getAccountIcon(currentAccount.type)}
                    </div>
                    <div>
                      <CardTitle>{currentAccount.name}</CardTitle>
                      <CardDescription>{currentAccount.number}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={currentAccount.type === 'credit' ? 'destructive' : 'secondary'}>
                    {currentAccount.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Current Balance</p>
                    {showBalance ? (
                      <p className={`text-2xl font-bold ${currentAccount.balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        ${Math.abs(currentAccount.balance).toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-2xl font-bold text-gray-400">••••••</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Available Balance</p>
                    {showBalance ? (
                      <p className="text-2xl font-bold text-blue-600">
                        ${currentAccount.available.toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-2xl font-bold text-gray-400">••••••</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Interest Rate</p>
                    <p className="text-lg font-semibold">{currentAccount.interestRate}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Last Activity</p>
                    <p className="text-lg font-semibold">{currentAccount.lastActivity}</p>
                  </div>
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
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    Transfer Money
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Statement
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Open New Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Transaction Details */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="statements">Statements</TabsTrigger>
            <TabsTrigger value="details">Account Details</TabsTrigger>
          </TabsList>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Transaction History</CardTitle>
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
                        <SelectItem value="transfer">Transfers</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <TrendingUp className="h-5 w-5 text-green-600" />
                          ) : (
                            <TrendingDown className="h-5 w-5 text-red-600" />
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
                        <p className="text-sm text-gray-600">Balance: ${transaction.balance.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statements Tab */}
          <TabsContent value="statements" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Account Statements</CardTitle>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statements.map((statement) => (
                    <div key={statement.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{statement.month}</p>
                          <p className="text-sm text-gray-600">
                            {statement.startDate} - {statement.endDate}
                          </p>
                          <p className="text-sm text-gray-500">
                            {statement.transactions} transactions
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${statement.balance.toFixed(2)}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            CSV
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Details Tab */}
          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Account Number</Label>
                      <p className="font-mono text-lg">{currentAccount?.number}</p>
                    </div>
                    <div>
                      <Label>Account Type</Label>
                      <p className="text-lg capitalize">{currentAccount?.type}</p>
                    </div>
                    <div>
                      <Label>Interest Rate</Label>
                      <p className="text-lg">{currentAccount?.interestRate}% APY</p>
                    </div>
                    <div>
                      <Label>Opening Date</Label>
                      <p className="text-lg">January 15, 2020</p>
                    </div>
                    <div>
                      <Label>Last Activity</Label>
                      <p className="text-lg">{currentAccount?.lastActivity}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Overdraft Protection</p>
                        <p className="text-sm text-gray-600">Protect against overdrafts</p>
                      </div>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Account Alerts</p>
                        <p className="text-sm text-gray-600">Get notified of account activity</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Paper Statements</p>
                        <p className="text-sm text-gray-600">Receive statements by mail</p>
                      </div>
                      <Button variant="outline" size="sm">Disable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Account Nickname</p>
                        <p className="text-sm text-gray-600">Personalize your account</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
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

export default Accounts;
