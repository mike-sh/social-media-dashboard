import { Facebook, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TiktokIcon } from "@/components/ui/tiktok-icon"

interface AdsTableProps {
  platform?: "facebook" | "instagram" | "tiktok" | "all"
}

export function AdsTable({ platform = "all" }: AdsTableProps) {
  // Filter campaigns based on platform
  const campaigns = [
    {
      name: "Sommerkollektion",
      platform: "facebook",
      budget: "€5,000",
      spent: "€3,245",
      impressions: "450K",
      clicks: "12.5K",
      ctr: "2.78%",
      revenue: "€12,450",
      roi: "3.8x",
    },
    {
      name: "Produkteinführung",
      platform: "instagram",
      budget: "€7,500",
      spent: "€6,890",
      impressions: "780K",
      clicks: "25.3K",
      ctr: "3.24%",
      revenue: "€22,780",
      roi: "3.3x",
    },
    {
      name: "Virale Challenge",
      platform: "tiktok",
      budget: "€4,000",
      spent: "€3,780",
      impressions: "1.2M",
      clicks: "45.8K",
      ctr: "3.82%",
      revenue: "€15,450",
      roi: "4.1x",
    },
    {
      name: "Saisonale Angebote",
      platform: "facebook",
      budget: "€3,500",
      spent: "€2,890",
      impressions: "320K",
      clicks: "9.8K",
      ctr: "3.06%",
      revenue: "€8,670",
      roi: "3.0x",
    },
    {
      name: "Influencer Kampagne",
      platform: "instagram",
      budget: "€10,000",
      spent: "€8,450",
      impressions: "950K",
      clicks: "32.7K",
      ctr: "3.44%",
      revenue: "€35,670",
      roi: "4.2x",
    },
  ]

  const filteredCampaigns =
    platform === "all" ? campaigns : campaigns.filter((campaign) => campaign.platform === platform)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "tiktok":
        return <TiktokIcon />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Aktive Werbekampagnen</CardTitle>
          <Button>Neue Kampagne</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kampagne</TableHead>
              {platform === "all" && <TableHead>Plattform</TableHead>}
              <TableHead>Budget</TableHead>
              <TableHead>Ausgegeben</TableHead>
              <TableHead>Impressionen</TableHead>
              <TableHead>Klicks</TableHead>
              <TableHead>CTR</TableHead>
              <TableHead>Umsatz</TableHead>
              <TableHead>ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns.map((campaign, index) => (
              <TableRow key={index}>
                <TableCell>{campaign.name}</TableCell>
                {platform === "all" && (
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getPlatformIcon(campaign.platform)}
                      <span>{campaign.platform.charAt(0).toUpperCase() + campaign.platform.slice(1)}</span>
                    </div>
                  </TableCell>
                )}
                <TableCell>{campaign.budget}</TableCell>
                <TableCell>{campaign.spent}</TableCell>
                <TableCell>{campaign.impressions}</TableCell>
                <TableCell>{campaign.clicks}</TableCell>
                <TableCell>{campaign.ctr}</TableCell>
                <TableCell>{campaign.revenue}</TableCell>
                <TableCell>{campaign.roi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
