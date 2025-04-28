import React, { useEffect } from "react";
import * as echarts from "echarts";

const WorkoutPerformance = ({ workoutTypeFilter, dateRange }) => {
  useEffect(() => {
    // Workout frequency chart
    const frequencyChartElement = document.getElementById("workout-frequency-chart");
    if (frequencyChartElement) {
      const frequencyChart = echarts.init(frequencyChartElement);

      const frequencyChartOption = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: "rgba(23, 23, 33, 0.9)",
          borderColor: "#333",
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["HIIT", "Strength", "Cardio", "Yoga", "Pilates"],
          axisLine: {
            lineStyle: {
              color: "#444",
            },
          },
          axisLabel: {
            color: "#aaa",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#444",
            },
          },
          axisLabel: {
            color: "#aaa",
          },
          splitLine: {
            lineStyle: {
              color: "#333",
            },
          },
        },
        series: [
          {
            name: "Workouts",
            type: "bar",
            data: [
              {
                value: 12,
                itemStyle: { color: "#ef4444" },
              },
              {
                value: 18,
                itemStyle: { color: "#a855f7" },
              },
              {
                value: 8,
                itemStyle: { color: "#3b82f6" },
              },
              {
                value: 6,
                itemStyle: { color: "#22c55e" },
              },
              {
                value: 4,
                itemStyle: { color: "#eab308" },
              },
            ],
            barWidth: "60%",
            borderRadius: 6,
          },
        ],
      };

      frequencyChart.setOption(frequencyChartOption);

      const handleResize = () => {
        frequencyChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        frequencyChart.dispose();
      };
    }
  }, [workoutTypeFilter]);

  useEffect(() => {
    // Performance improvements chart
    const performanceChartElement = document.getElementById("performance-improvements-chart");
    if (performanceChartElement) {
      const performanceChart = echarts.init(performanceChartElement);

      const performanceChartOption = {
        animation: false,
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(23, 23, 33, 0.9)",
          borderColor: "#333",
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr"],
          axisLine: {
            lineStyle: {
              color: "#444",
            },
          },
          axisLabel: {
            color: "#aaa",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#444",
            },
          },
          axisLabel: {
            color: "#aaa",
          },
          splitLine: {
            lineStyle: {
              color: "#333",
            },
          },
        },
        series: [
          {
            name: "Strength",
            type: "line",
            stack: "Total",
            data: [120, 132, 145, 160],
            smooth: true,
            lineStyle: {
              width: 3,
              color: "#a855f7",
            },
            itemStyle: {
              color: "#a855f7",
            },
          },
          {
            name: "Endurance",
            type: "line",
            stack: "Total",
            data: [220, 232, 240, 264],
            smooth: true,
            lineStyle: {
              width: 3,
              color: "#3b82f6",
            },
            itemStyle: {
              color: "#3b82f6",
            },
          },
          {
            name: "Flexibility",
            type: "line",
            stack: "Total",
            data: [150, 160, 175, 185],
            smooth: true,
            lineStyle: {
              width: 3,
              color: "#22c55e",
            },
            itemStyle: {
              color: "#22c55e",
            },
          },
        ],
      };

      performanceChart.setOption(performanceChartOption);

      const handleResize = () => {
        performanceChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        performanceChart.dispose();
      };
    }
  }, [dateRange, workoutTypeFilter]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Workout Frequency</h2>
        <div id="workout-frequency-chart" className="w-full h-[300px]"></div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Performance Improvements</h2>
        <div id="performance-improvements-chart" className="w-full h-[300px]"></div>
      </div>
    </div>
  );
};

export default WorkoutPerformance;