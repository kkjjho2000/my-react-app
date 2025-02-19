import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Package, Factory } from 'lucide-react';

type KPICardProps = {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend: number;
  color: string;
};

const KPICard: React.FC<KPICardProps> = ({ title, value, icon: Icon, trend, color }) => (
  <Card className="bg-white">
    <CardContent>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {trend > 0 ? (
          <TrendingUp size={16} className="text-green-500" />
        ) : (
          <TrendingDown size={16} className="text-red-500" />
        )}
        <span className={`ml-1 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(trend)}%
        </span>
        <span className="ml-2 text-gray-500">vs Last Month</span>
      </div>
    </CardContent>
  </Card>
);

const CostDashboard: React.FC = () => {
  const monthlyData = [
    { month: 'Jan', labor: 150, materials: 280, depreciation: 50, rent: 100 },
    { month: 'Feb', labor: 155, materials: 290, depreciation: 50, rent: 100 },
    { month: 'Mar', labor: 160, materials: 285, depreciation: 50, rent: 100 },
    { month: 'Apr', labor: 158, materials: 295, depreciation: 50, rent: 100 },
    { month: 'May', labor: 165, materials: 300, depreciation: 50, rent: 100 },
    { month: 'Jun', labor: 170, materials: 310, depreciation: 50, rent: 100 }
  ];

  const costBreakdown = [
    { name: 'Labor Cost', value: 170, color: '#FF8042' },
    { name: 'Raw Materials', value: 310, color: '#00C49F' },
    { name: 'Equipment Depreciation', value: 50, color: '#FFBB28' },
    { name: 'Facility Rent', value: 100, color: '#0088FE' }
  ];

  return (
    <div className="p-6 bg-gray-50 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Operational Cost Analysis Dashboard</h1>
      
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Total Cost" 
          value="$630,000" 
          icon={DollarSign}
          trend={3.2}
          color="bg-blue-500"
        />
        <KPICard 
          title="Labor Cost" 
          value="$170,000" 
          icon={Users}
          trend={2.9}
          color="bg-green-500"
        />
        <KPICard 
          title="Material Cost" 
          value="$310,000" 
          icon={Package}
          trend={3.3}
          color="bg-orange-500"
        />
        <KPICard 
          title="Equipment Utilization" 
          value="85%" 
          icon={Factory}
          trend={-1.2}
          color="bg-purple-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Cost Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="labor" stroke="#FF8042" name="Labor" />
                  <Line type="monotone" dataKey="materials" stroke="#00C49F" name="Materials" />
                  <Line type="monotone" dataKey="depreciation" stroke="#FFBB28" name="Depreciation" />
                  <Line type="monotone" dataKey="rent" stroke="#0088FE" name="Rent" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Structure Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {costBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CostDashboard;
