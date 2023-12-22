import { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3.amazonaws.com/open-to-cors/assignment.json"
        );
        setProducts(Object.values(response.data.products));
      } catch (error) {
        console.error("Error fetching data:", error.message);
        console.error("Detailed error information:", error.response);
      }
    };

    fetchData();
  }, []);

  // Check if products is still an empty array
  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  // Extracting relevant data for charts
  const productTitles = products.map((product) => product.title);
  const productPrices = products.map((product) => parseInt(product.price, 10));
  const productPopularity = products.map((product) =>
    parseInt(product.popularity, 10)
  );

  const barChartData = {
    labels: productTitles,
    datasets: [
      {
        label: "Product Prices",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: productPrices,
      },
    ],
  };

  const doughnutChartData = {
    labels: productTitles,
    datasets: [
      {
        data: productPopularity,
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(153,102,255,0.6)",
          "rgba(255,159,64,0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255,99,132,0.8)",
          "rgba(54,162,235,0.8)",
          "rgba(255,206,86,0.8)",
          "rgba(75,192,192,0.8)",
          "rgba(153,102,255,0.8)",
          "rgba(255,159,64,0.8)",
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "48%" }}>
          <h2>Product Prices</h2>
          <Bar data={barChartData} />
        </div>
        <div style={{ width: "48%" }}>
          <h2>Product Popularity</h2>
          <Doughnut data={doughnutChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
