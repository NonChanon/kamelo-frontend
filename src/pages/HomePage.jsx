import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const data = [
  {
    label: "RATES",
    value: "rates",
  },
  {
    label: "TRACKING",
    value: "tracking",
  },
  {
    label: "SCHEDULES",
    value: "schedules",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("rates");

  return (
    <div className="container mx-auto">
      <div className="flex flex-col py-20">
        <Typography variant="h4" className="text-gray-400 font-normal">
          Go across the world, Grow together
        </Typography>
        <Typography
          variant="h1"
          className="flex flex-col text-gray-800 my-5 text-7xl font-semibold gap-4"
        >
          <div>FIND YOUR INSTANT</div>
          <div>FREIGHT QUOTE</div>
        </Typography>
        <div className="flex mb-6 space-x-2 my-16">
          <Tabs value={activeTab}>
            <TabsHeader
              className="bg-white border-gray-300 border-2"
              indicatorProps={{
                className: "bg-primary",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`text-sm font-medium px-14 py-2 ${
                    activeTab === value
                      ? "text-white duration-500"
                      : "text-black"
                  }`}
                  onClick={() => setActiveTab(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
