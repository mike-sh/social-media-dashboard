import { Facebook, Instagram } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TiktokIcon } from "@/components/ui/tiktok-icon"

interface PlatformMetricsProps {
  platform: "facebook" | "instagram" | "tiktok"
}

export function PlatformMetrics({ platform }: PlatformMetricsProps) {
  const metrics = {
    facebook: {
      icon: <Facebook className="h-4 w-4 text-muted-foreground" />,
      total: "32.5K",
      change: "+5.2%",
      details: [
        { label: "Likes", value: "18.2K" },
        { label: "Kommentare", value: "5.7K" },
        { label: "Shares", value: "8.6K" },
        { label: "Klicks", value: "42.1K" },
      ],
    },
    instagram: {
      icon: <Instagram className="h-4 w-4 text-muted-foreground" />,
      total: "87.3K",
      change: "+12.8%",
      details: [
        { label: "Likes", value: "67.2K" },
        { label: "Kommentare", value: "12.5K" },
        { label: "Saves", value: "7.6K" },
        { label: "Shares", value: "4.2K" },
      ],
    },
    tiktok: {
      icon: <TiktokIcon />,
      total: "237.8K",
      change: "+28.5%",
      details: [
        { label: "Likes", value: "152K" },
        { label: "Kommentare", value: "32.5K" },
        { label: "Shares", value: "45.7K" },
        { label: "Saves", value: "7.6K" },
      ],
    },
  }

  const data = metrics[platform]
  const platformName = platform.charAt(0).toUpperCase() + platform.slice(1)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{platformName} Engagement</CardTitle>
        {data.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.total}</div>
        <p className="text-xs text-muted-foreground">{data.change} im Vergleich zum Vormonat</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {data.details.map((detail, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-muted-foreground">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
