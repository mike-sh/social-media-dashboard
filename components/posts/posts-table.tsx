import { ChevronDown, Facebook, Instagram, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TiktokIcon } from "@/components/ui/tiktok-icon"

interface PostsTableProps {
  platform?: "facebook" | "instagram" | "tiktok" | "all"
}

export function PostsTable({ platform = "all" }: PostsTableProps) {
  // Filter posts based on platform
  const posts = [
    {
      platform: "instagram",
      title: "Produktankündigung",
      date: "15.05.2023",
      reach: "125.4K",
      engagement: "45.2K",
      status: "Veröffentlicht",
    },
    {
      platform: "tiktok",
      title: "Trend Challenge",
      date: "12.05.2023",
      reach: "1.8M",
      engagement: "152K",
      status: "Veröffentlicht",
    },
    {
      platform: "facebook",
      title: "Kundenerfolgsgeschichte",
      date: "10.05.2023",
      reach: "85.2K",
      engagement: "12.5K",
      status: "Veröffentlicht",
    },
    {
      platform: "instagram",
      title: "Hinter den Kulissen",
      date: "05.05.2023",
      reach: "78.3K",
      engagement: "22.1K",
      status: "Veröffentlicht",
    },
    {
      platform: "tiktok",
      title: "Produkt Tutorial",
      date: "01.05.2023",
      reach: "950K",
      engagement: "85.7K",
      status: "Veröffentlicht",
    },
  ]

  const filteredPosts = platform === "all" ? posts : posts.filter((post) => post.platform === platform)

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
          <CardTitle>Posts</CardTitle>
          <div className="flex items-center gap-2">
            {platform === "all" && (
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Plattform wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Plattformen</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Filtern
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {platform === "all" && <TableHead>Plattform</TableHead>}
              <TableHead>Titel</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Reichweite</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post, index) => (
              <TableRow key={index}>
                {platform === "all" && (
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getPlatformIcon(post.platform)}
                      <span>{post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}</span>
                    </div>
                  </TableCell>
                )}
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell>{post.reach}</TableCell>
                <TableCell>{post.engagement}</TableCell>
                <TableCell>
                  <Badge>{post.status}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
