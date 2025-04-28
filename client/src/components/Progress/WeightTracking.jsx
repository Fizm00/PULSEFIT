import React, { useEffect } from "react";
import * as echarts from "echarts";

const WeightTracking = ({ dateRange, setDateRange }) => {
  useEffect(() => {
    // Weight tracking chart
    const weightChartElement = document.getElementById("weight-chart");
    if (weightChartElement) {
      const weightChart = echarts.init(weightChartElement);

      const weightChartOption = {
        animation: false,
        tooltip: {
          trigger: "axis",
          formatter: "{b}: {c} kg",
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
          data: ["Jan 24", "Feb 7", "Feb 21", "Mar 7", "Mar 21", "Apr 7", "Apr 21"],
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
          min: 70,
          max: 85,
          axisLine: {
            lineStyle: {
              color: "#444",
            },
          },
          axisLabel: {
            color: "#aaa",
            formatter: "{value} kg",
          },
          splitLine: {
            lineStyle: {
              color: "#333",
            },
          },
        },
        series: [
          {
            data: [82, 80.5, 79, 78.2, 77.5, 76.8, 75.5],
            type: "line",
            smooth: true,
            lineStyle: {
              width: 3,
              color: "#3b82f6",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(59, 130, 246, 0.3)" },
                { offset: 1, color: "rgba(59, 130, 246, 0.05)" },
              ]),
            },
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              color: "#3b82f6",
            },
          },
        ],
      };

      weightChart.setOption(weightChartOption);

      const handleResize = () => {
        weightChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        weightChart.dispose();
      };
    }
  }, [dateRange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-2 bg-gray-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Weight Progress</h2>
          <div className="flex space-x-2">
            {["1W", "1M", "3M", "1Y"].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`py-1 px-3 rounded-lg text-xs font-medium cursor-pointer whitespace-nowrap ${
                  dateRange === range
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div id="weight-chart" className="w-full h-[300px]"></div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Current Stats</h2>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-400">Current Weight</p>
            <div className="flex items-center">
              <span className="text-green-400 text-xs font-medium mr-1">-1.3 kg</span>
              <i className="fas fa-arrow-down text-green-400 text-xs"></i>
            </div>
          </div>
          <h3 className="text-3xl font-bold">75.5 kg</h3>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 mb-2">BMI (Body Mass Index)</p>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mr-2">23.2</h3>
            <span className="text-xs py-1 px-2 bg-green-500/20 text-green-400 rounded-full">
              Healthy
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 mb-2">Body Fat Percentage</p>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mr-2">18%</h3>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-down mr-1"></i> 2.5%
            </span>
          </div>
        </div>

        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium cursor-pointer whitespace-nowrap">
          Add New Measurement
        </button>
      </div>
    </div>
  );
};

export default WeightTracking;