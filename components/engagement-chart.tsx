"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    facebook: 4000,
    instagram: 2400,
    tiktok: 2400,
  },
  {
    name: "Feb",
    facebook: 3000,
    instagram: 1398,
    tiktok: 2210,
  },
  {
    name: "Mär",
    facebook: 2000,
    instagram: 9800,
    tiktok: 2290,
  },
  {
    name: "Apr",
    facebook: 2780,
    instagram: 3908,
    tiktok: 2000,
  },
  {
    name: "Mai",
    facebook: 1890,
    instagram: 4800,
    tiktok: 2181,
  },
  {
    name: "Jun",
    facebook: 2390,
    instagram: 3800,
    tiktok: 2500,
  },
  {
    name: "Jul",
    facebook: 3490,
    instagram: 4300,
    tiktok: 2100,
  },
]

export function EngagementChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="facebook" stroke="#1877F2" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="instagram" stroke="#E1306C" />
        <Line type="monotone" dataKey="tiktok" stroke="#000000" />
      </LineChart>
    </ResponsiveContainer>
  )
}
