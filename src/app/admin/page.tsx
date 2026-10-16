import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
  let stats = { totalOrders: 0, revenue: 0, customRequests: 0 };
  let recentOrders: any[] = [];
  
  try {
    const ordersCount = await prisma.order.count();
    const customCount = await prisma.customCakeOrder.count();
    const totalRev = await prisma.order.aggregate({ _sum: { totalAmount: true }});
    
    stats = {
      totalOrders: ordersCount,
      revenue: totalRev._sum.totalAmount || 0,
      customRequests: customCount,
    };
    
    recentOrders = await prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { user: true }
    });
  } catch (e) {
    console.error("Dashboard fetch failed", e);
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-on-surface-variant mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">₹{stats.revenue}</div>
            <p className="text-xs text-on-surface-variant mt-1">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">Custom Cake Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.customRequests}</div>
            <p className="text-xs text-secondary mt-1">3 new pending requests</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-on-surface-variant uppercase bg-surface-container">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.length > 0 ? (
                  recentOrders.map(order => (
                    <tr key={order.id} className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4 font-medium">#{order.id.slice(0, 8)}</td>
                      <td className="px-6 py-4">{order.user?.name || 'Guest'}</td>
                      <td className="px-6 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <Badge variant={order.status === 'COMPLETED' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-primary">₹{order.totalAmount.toString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-on-surface-variant">
                      No recent orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
