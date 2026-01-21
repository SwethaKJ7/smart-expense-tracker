<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Chart from "chart.js/auto";

// Props passed from parent
const props = defineProps({
  labels: {
    type: Array,
    required: true
  },
  values: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: "Chart"
  },
  type: {
    type: String,
    default: "bar" // can be 'bar', 'pie', or 'doughnut'
  }
});

const chartCanvas = ref(null);
let chartInstance = null;

// Modern color palette
const colorPalette = [
  "#FF6384", // Red
  "#36A2EB", // Blue
  "#FFCE56", // Yellow
  "#4BC0C0", // Teal
  "#9966FF", // Purple
  "#FF9F40", // Orange
  "#8DFF56", // Light Green
  "#FF56AA"  // Pink
];

// Generate dynamic colors based on number of labels
const getColors = (num) => {
  return Array.from({ length: num }, (_, i) => colorPalette[i % colorPalette.length]);
};

// Function to create chart
const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy(); // Destroy previous instance to prevent overlap
  }

const ctx = chartCanvas.value.getContext("2d");

chartInstance = new Chart(ctx, {
  type: props.type,
  data: {
    labels: props.labels,
    datasets: [
      {
        label: props.title,
        data: props.values,

        /* BAR COLOR (matches your image) */
        backgroundColor: "#d4d4d4",

        /* Border (optional but clean) */
        borderRadius: 6,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        ticks: {
          color: "#555"
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          color: "#555"
        },
        grid: {
          color: "#eaeaea"
        }
      }
    },

    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: "#686966",
        titleColor: "#ffffff",
        bodyColor: "#ffffff"
      }
    }
  }
});

};

// Create chart on mount
onMounted(() => {
  createChart();
});

// Recreate chart if labels or values change
watch([() => props.labels, () => props.values], () => {
  createChart();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  min-height: 300px; /* adjust as needed */
  margin-bottom: 24px;
}
</style>
