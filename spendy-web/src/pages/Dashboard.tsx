import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";

/**
 * Dashboard component to display the financial insights.
 * @returns The Dashboard component
 */
function Dashboard() {
  // Chart options for the temporary chart data
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false }, // Disables the toolbar
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    colors: ["#1E88E5"],
    stroke: {
      curve: "smooth",
    },
    responsive: [
      {
        breakpoint: 768, // Trigger for devices below 768px width
        options: {
          chart: {
            height: 250, // Reduce chart height for smaller screens
          },
          legend: {
            position: "bottom", // Move the legend for smaller screens
          },
        },
      },
    ],
  };

  // Chart series for the temporary chart data
  const chartSeries = [
    {
      name: "Balance",
      data: [3000, 5000, 4000, 6000, 7000, 9000, 8500],
    },
  ];

  // Render the Dashboard component
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        mt: 3,
        mb: 3,
        padding: { xs: 2, md: 3 }, // Reduce padding on mobile
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2.125rem" }, // Adjust font size for mobile
        }}
      >
        Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          marginBottom: 4,
          color: "text.secondary",
          fontSize: { xs: "0.875rem", md: "1rem" }, // Smaller font on mobile
        }}
      >
        Your financial insights at a glance. Welcome to the future of ledger
        management.
      </Typography>

      {/* Display temporary card (Will be used for displaying budget related information) */}
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        <Card
          elevation={6}
          sx={{
            borderRadius: 2,
            padding: { xs: 2, md: 3 }, // Reduce padding on mobile
            background: "linear-gradient(145deg, #f0f0f0, #e8e8e8)",
            boxShadow: (theme) => theme.shadows[2], // Softer shadow for mobile
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              Total Balance
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" }, // Adjust font size
              }}
            >
              $12,500
            </Typography>
          </CardContent>
        </Card>
        <Card
          elevation={6}
          sx={{
            borderRadius: 2,
            padding: { xs: 2, md: 3 },
            background: "linear-gradient(145deg, #f0f0f0, #e8e8e8)",
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              Monthly Expenses
            </Typography>
            <Typography
              variant="h4"
              color="error"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              $3,200
            </Typography>
          </CardContent>
        </Card>
        <Card
          elevation={6}
          sx={{
            borderRadius: 2,
            padding: { xs: 2, md: 3 },
            background: "linear-gradient(145deg, #f0f0f0, #e8e8e8)",
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              Savings Rate
            </Typography>
            <Typography
              variant="h4"
              color="success.main"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              25%
            </Typography>
          </CardContent>
        </Card>
      </Masonry>

      {/* Display the chart with temporary data */}
      <Box sx={{ mt: 3 }}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, md: 4 }, // Adjust padding
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Softer shadow
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" }, // Smaller font for mobile
            }}
          >
            Balance Overview
          </Typography>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={chartOptions.chart?.height}
          />
        </Paper>
      </Box>

      {/* Upload transactions button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          component={Link}
          to="/upload"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: { xs: "8px 16px", md: "10px 20px" }, // Adjust padding for button
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          Upload Transactions
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
