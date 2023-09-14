import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const data1 = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Total",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "#cc1718",
     
    },{
      label: "Monthly",
      data: [19, 12, 13, 15, 3],
      backgroundColor: "#ac171a",
    },{
      label: "Daily",
      data: [10, 22, 10, 35, 21],
      backgroundColor: "#82191d",
    },
  ],
};

const data2 = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Total",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "#cc1718",
     
    },{
      label: "Monthly",
      data: [19, 12, 13, 15, 3],
      backgroundColor: "#ac171a",
    },{
      label: "Daily",
      data: [10, 22, 10, 35, 21],
      backgroundColor: "#82191d",
    },
  ],
};

export default function MainPage() {
  return (
    <div className=" ">
      <div className="row g-4">
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Worldwide Sales</h6>
              <a href="#">Show All</a>
            </div>
            <Bar
              data={data1}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Sales & Revenue</h6>
              <a href="#">Show All</a>
            </div>
            <Bar
              data={data2}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
