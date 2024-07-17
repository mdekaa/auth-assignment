import { fetchAllUsers } from "@/actions/user";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) return redirect("/");

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
     

      <div className="flex flex-1">
        <nav className="hidden md:block md:bg-gray-800 w-64 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Overview</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Analytics</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Users</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
            </li>
          </ul>
        </nav>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-400">Some overview content here...</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Analytics</h2>
              <p className="text-gray-400">Some analytics content here...</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Users</h2>
              <p className="text-gray-400">Some user-related content here...</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Detailed Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Metric 1</h3>
                <p className="text-gray-400">Details about metric 1...</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Metric 2</h3>
                <p className="text-gray-400">Details about metric 2...</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Metric 3</h3>
                <p className="text-gray-400">Details about metric 3...</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">User Activities</h2>
            <div className="overflow-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="border-b border-gray-700 p-2">User</th>
                    <th className="border-b border-gray-700 p-2">Activity</th>
                    <th className="border-b border-gray-700 p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-700 p-2">User 1</td>
                    <td className="border-b border-gray-700 p-2">Logged in</td>
                    <td className="border-b border-gray-700 p-2">2024-07-17</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 p-2">User 2</td>
                    <td className="border-b border-gray-700 p-2">Updated profile</td>
                    <td className="border-b border-gray-700 p-2">2024-07-16</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 p-2">User 3</td>
                    <td className="border-b border-gray-700 p-2">Posted a comment</td>
                    <td className="border-b border-gray-700 p-2">2024-07-15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
