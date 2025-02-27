// import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2'; // Importing Pie chart from react-chartjs-2

// // Register necessary components for Chart.js
// ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const [usersCount, setUsersCount] = useState(0); // State to store the users count
//   const [productsCount, setProductsCount] = useState(0); // State to store the products count
//   const [loading, setLoading] = useState(true); // State to manage loading state

//   // Fetch the stats from your backend
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/admin/api/v1/stats');
//         const data = await response.json();
//         setUsersCount(data.users); // Set the total users count in state
//         setProductsCount(data.products); // Set the total products count in state
//         setLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   // Data for the users pie chart
//   const usersChartData = {
//     labels: ['Users'], // Label for the pie slice
//     datasets: [
//       {
//         data: [usersCount, 100 - usersCount], // Data for users count and remaining (for visualization)
//         backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(0, 0, 0, 0.1)'], // Color for the slices
//         hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(0, 0, 0, 0.3)'], // Hover color for the slices
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data for the products pie chart
//   const productsChartData = {
//     labels: ['Products'], // Label for the pie slice
//     datasets: [
//       {
//         data: [productsCount, 100 - productsCount], // Data for products count and remaining (for visualization)
//         backgroundColor: ['rgba(153, 102, 255, 0.6)', 'rgba(0, 0, 0, 0.1)'], // Color for the slices
//         hoverBackgroundColor: ['rgba(153, 102, 255, 0.8)', 'rgba(0, 0, 0, 0.3)'], // Hover color for the slices
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

//       <div className="flex space-x-6">
//         {/* Total Users */}
//         <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
//           <h3 className="text-xl font-medium text-gray-700">Total Users</h3>
//           <p className="text-3xl font-semibold text-gray-900">{loading ? 'Loading...' : usersCount}</p>
//         </div>

//         {/* Users Pie Chart */}
//         <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
//           <h3 className="text-xl font-medium text-gray-700">Users Pie Chart</h3>
//           <div style={{ height: '300px' }}>
//             <Pie data={usersChartData} />
//           </div>
//         </div>
//       </div>

//       <div className="flex space-x-6 mt-6">
//         {/* Total Products */}
//         <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
//           <h3 className="text-xl font-medium text-gray-700">Total Products</h3>
//           <p className="text-3xl font-semibold text-gray-900">{loading ? 'Loading...' : productsCount}</p>
//         </div>

//         {/* Products Pie Chart */}
//         <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:bg-gray-50">
//           <h3 className="text-xl font-medium text-gray-700">Products Pie Chart</h3>
//           <div style={{ height: '300px' }}>
//             <Pie data={productsChartData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'; // Importing Pie chart from react-chartjs-2

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [usersCount, setUsersCount] = useState(0); // State to store the users count
  const [productsCount, setProductsCount] = useState(0); // State to store the products count
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Fetch the stats from your backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/api/v1/stats');
        const data = await response.json();
        setUsersCount(data.users); // Set the total users count in state
        setProductsCount(data.products); // Set the total products count in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Data for the users pie chart
  const usersChartData = {
    labels: ['Users'], // Label for the pie slice
    datasets: [
      {
        data: [usersCount, 100 - usersCount], // Data for users count and remaining (for visualization)
        backgroundColor: [
          'rgba(29, 78, 216, 0.6)', // Gradient color for users slice
          'rgba(0, 0, 0, 0.1)', // Background color for the rest
        ], 
        hoverBackgroundColor: [
          'rgba(29, 78, 216, 0.8)', // Hover color for the users slice
          'rgba(0, 0, 0, 0.3)', // Hover color for the rest
        ], 
        borderWidth: 1,
      },
    ],
  };

  // Data for the products pie chart
  const productsChartData = {
    labels: ['Products'], // Label for the pie slice
    datasets: [
      {
        data: [productsCount, 100 - productsCount], // Data for products count and remaining (for visualization)
        backgroundColor: [
          'rgba(255, 165, 0, 0.6)', // Gradient color for products slice
          'rgba(0, 0, 0, 0.1)', // Background color for the rest
        ], 
        hoverBackgroundColor: [
          'rgba(255, 165, 0, 0.8)', // Hover color for the products slice
          'rgba(0, 0, 0, 0.3)', // Hover color for the rest
        ], 
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-xl">
      <h1 className="text-4xl font-semibold text-white mb-8 text-center">Admin Dashboard</h1>

      <div className="flex space-x-8 justify-between">
        {/* Total Users */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:bg-indigo-100 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Total Users</h3>
          <p className="text-4xl font-bold text-gray-900">{loading ? 'Loading...' : usersCount}</p>
        </div>

        {/* Users Pie Chart */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:bg-indigo-100 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Users Pie Chart</h3>
          <div style={{ height: '300px' }}>
            <Pie data={usersChartData} />
          </div>
        </div>
      </div>

      <div className="flex space-x-8 mt-8 justify-between">
        {/* Total Products */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:bg-orange-100 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Total Products</h3>
          <p className="text-4xl font-bold text-gray-900">{loading ? 'Loading...' : productsCount}</p>
        </div>

        {/* Products Pie Chart */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:bg-orange-100 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Products Pie Chart</h3>
          <div style={{ height: '300px' }}>
            <Pie data={productsChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
