<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Device from "./device.vue";
import Kart from "./kart.vue";
import DeviceType from "./deviceType.vue";
import DeviceNums from "./deviceNums.vue";
import OficialDevice from "./oficialDevice.vue";
const series = [
  {
    name: "Desktops",
    data: [-26, 18, 41, 40, 48, 39],
  },
];
const chartOptions = {
  chart: {
    height: 680,
    type: "line",
    zoom: {
      enabled: false,
    },
    brush: {
      target: "chart",
      enabled: true,
    },
  },
  dataLabels: {
    enabled: true, // Automatically display data values at each point
    style: {
      fontSize: "40px", // Set font size for data labels
    },
    formatter: function (val) {
      return val + "%"; // Display the value with a percentage sign
    },
  },
  stroke: {
    curve: "straight",
    colors: ["#fff"], // Set the line color for the chart
    width: 4,
  },

  title: {
    text: "Product Trends by Month",
    align: "left",
    style: {
      fontSize: "40px", // Set font size for title
      color: "#fff",
    },
  },
  // fill: {
  // 	type: "gradient",
  // 	gradient: {
  // 		// shadeIntensity: 1,
  // 		// inverseColors: false,
  // 		// opacityFrom: 0.5,
  // 		// opacityTo: 0,
  // 		stops: [0, 90, 100],
  // 	},
  // },

  // xaxis: {
  // 	categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
  // 	labels: {
  // 		style: {
  // 			fontSize: "40px", // Set font size for x-axis labels
  // 		},
  //    },

  // crosshairs: {
  // 	show: true,
  // 	position: "back", // Ensure crosshairs are behind data points
  // 	stroke: {
  // 		color: "#b6b6b6",
  // 		width: 1,
  // 		dashArray: 8, // Dashed effect
  // 	},
  // },
  // },
  xaxis: {
    categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
    labels: {
      style: {
        fontSize: "90px", // Set font size for x-axis labels
        colors: "#ffffff", // Set color of x-axis labels to white
      },
    },
    position: "bottom", // Position the x-axis at the bottom by default
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "40px", // Set font size for y-axis labels
        colors: "#fff", // Set color of y-axis labels
      },
    },
    axisBorder: {
      show: true,
      color: "#fff",
    },
    axisTicks: {
      show: true,
      color: "#000",
    },
    // crosshairs: {
    // 	show: true,
    // 	position: "front",
    // 	stroke: {
    // 		color: "#000",
    // 		width: 1,
    // 		dashArray: 0,
    // 	},
    // },
    min: -35, // Adjust this if necessary to include all negative values
    max: 70,
    crosshairs: {
      show: false, // Hide crosshairs for y-axis
    },
  },

  grid: {
    xaxis: {
      lines: {
        show: true, // Show dashed lines on the y-axis only
        strokeDashArray: 8, // Dashed effect
      },
    },
    yaxis: {
      lines: {
        show: false, // Hide vertical lines on the x-axis
      },
    },
  },
  annotations: {
    yaxis: [
      {
        y: 0,
        borderColor: "#41d2ff",
        stroke: "#41d2ff",
        border: "#41d2ff",
        borderWidth: 4,
        strokeDashArray: 2,
        background: "#00E396",

        style: {
          color: "#fff",
          background: "#00E396",
        },
        label: {
          text: "",
          style: {
            color: "#000",
            fontSize: "20px",
            fontFamily: "Helvetica, Arial, sans-serif",
            background: "transparent",
          },
        },
      },
    ],
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.1,
      gradientToColors: ["#fff"], // Color for the gradient background
      inverseColors: true,
      backgroundColor: "#fff",
      stops: [40, 100],
    },
  },
  plotOptions: {
    area: {
      fillTo: "origin", // Fill background based on the 0% line
      gradient: {
        shade: "light",
        type: "vertical", // Gradient vertically over the line
        shadeIntensity: 0.25,
        gradientToColors: ["#ffcccc", "#ccffcc"], // Colors for the gradient
        inverseColors: false,

        stops: [0, 100],
      },
    },
  },
  tooltip: {
    enabled: false, // Disable tooltips
  },
};
</script>

<template>
  <div class="bg-black p-12 w-[7134px]">
    <Header />
    <div class="grid grid-cols-4 mt-8 rounded-xl text-[#000] gap-4">
      <div>
        <div class="p-12 rounded-xl bg-primary-800">
          <div class="flex items-center justify-between">
            <p class="text-[56px] font-inter-500">
              Всего зарегистрировано IMEI
            </p>
            <p class="text-[92px] mb-7 font-inter-700">79 312 667</p>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-primary-600 p-7 rounded-xl">
              <p class="text-xl">Импортёры</p>
              <div>
                <h1 class="text-[96px] mt-16">
                  15,6
                  <span class="text-[40px] -ml-4 font-inter-600">млн</span>
                </h1>
              </div>
            </div>
            <div class="bg-primary-600 p-7 rounded-xl">
              <p class="text-xl">Импортёры</p>
              <div>
                <h1 class="text-[96px] mt-16">
                  15,6
                  <span class="text-[40px] -ml-4 font-inter-600">млн</span>
                </h1>
              </div>
            </div>
            <div class="bg-primary-600 p-7 rounded-xl">
              <p class="text-xl">Импортёры</p>
              <div>
                <h1 class="text-[96px] font-inter-600 mt-16">
                  15,6
                  <span class="text-[40px] -ml-4 font-inter-600">млн</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="p-12 pb-0 pl-0 mt-3 bg-primary-600 rounded-xl">
            <p class="text-[40px] px-12 font-inter-500">
              Уровень регистрации мобильных устройств в отношении официального
              ввоза импортёрами
            </p>

            <div id="chart">
              <apexchart
                type="line"
                height="680"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </div>
        </div>
        <div class="p-12 mt-3 bg-primary-800 rounded-xl">
          <p class="font-inter-500 text-[48px] mb-10">
            В разрезе преступных деяний (устройства)
          </p>
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-primary-600 p-7 rounded-xl">
              <p class="text-3xl font-inter-500 line-clamp-2">
                Блокировано по <br />
                запросу МВД
              </p>
              <h2 class="text-[56px] font-inter-700 mt-20">16 250</h2>
            </div>
            <div
              class="flex flex-col justify-between bg-primary-600 p-7 rounded-xl"
            >
              <p class="text-3xl font-inter-500 line-clamp-2">Отслеживается</p>
              <h2 class="text-[56px] font-inter-700 mt-20">43 491</h2>
            </div>
            <div
              class="flex flex-col justify-between bg-primary-600 p-7 rounded-xl"
            >
              <p class="text-3xl font-inter-500 line-clamp-2">Разблокировано</p>
              <h2 class="text-[56px] font-inter-700 mt-20">18 576</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="flex gap-3">
          <Device class="flex-grow" />
          <DeviceNums />
          <DeviceType />
        </div>
        <div class="flex gap-3">
          <OficialDevice />
          <Kart class="flex-grow" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
* {
  color: white;
}
#chart {
  .apexcharts-title-text,
  .apexcharts-grid-borders {
    display: none;
  }
  text,
  tspan {
    color: #41d2ff;
    font-size: 36px;
  }
  .apexcharts-data-labels {
    color: #41d2ff !important;
    rect {
      fill: transparent !important;
      stroke: transparent !important;
      color: #41d2ff !important;
    }
    text {
      fill: #41d2ff;
      transform: translate(2px, -20px);
    }
  }
  .apexcharts-yaxis-texts-g {
    display: none;
    color: #41d2ff;
  }
  .apexcharts-xaxis-texts-g {
    transform: translate(0, -165px);
  }
}
</style>
