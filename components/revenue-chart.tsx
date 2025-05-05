"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    ausgaben: 4000,
    umsatz: 8400,
  },
  {
    name: "Feb",
    ausgaben: 3000,
    umsatz: 9800,
  },
  {
    name: "Mär",
    ausgaben: 2000,
    umsatz: 6800,
  },
  {
    name: "Apr",
    ausgaben: 2780,
    umsatz: 9908,
  },
  {
    name: "Mai",
    ausgaben: 1890,
    umsatz: 6800,
  },
  {
    name: "Jun",
    ausgaben: 2390,
    umsatz: 7800,
  },
  {
    name: "Jul",
    ausgaben: 3490,
    umsatz: 12300,
  },
]

export function RevenueChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
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
        <Bar dataKey="ausgaben" fill="#8884d8" />
        <Bar dataKey="umsatz" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
