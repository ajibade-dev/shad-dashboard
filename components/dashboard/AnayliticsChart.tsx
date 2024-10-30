'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import data from '@/data/analytics';
import { useEffect, useState } from 'react';

const AnalyticsChart = () => {
  const [screenSize, setScreenSize] = useState('large'); // Default to large

  useEffect(() => {
    // Function to check screen size
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('small'); // For screens smaller than 640px
      } else if (width < 1024) {
        setScreenSize('medium'); // For screens smaller than 1024px
      } else {
        setScreenSize('large'); // For screens 1024px and larger
      }
    };

    // Set initial screen size
    updateScreenSize();

    // Add resize event listener
    window.addEventListener('resize', updateScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Render different sizes based on `screenSize`
  const renderChart = () => {
    let height, width;
    if (screenSize === 'small') {
      width = 300;
      height = 200;
    } else if (screenSize === 'medium') {
      width = 600;
      height = 300;
    } else {
      width = 1000;
      height = 400;
    }

    return (
      <CardContent>
        <div style={{ width: '100%', height }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={width} height={height} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
        <CardDescription>Views Per Month</CardDescription>
      </CardHeader>
      {renderChart()}
    </Card>
  );
};

export default AnalyticsChart;
