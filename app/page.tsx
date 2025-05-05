import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { PageHeader } from "@/components/layout/page-header"
import { OverviewCards } from "@/components/metrics/overview-cards"
import { EngagementChart } from "@/components/engagement-chart"
import { RevenueChart } from "@/components/revenue-chart"
import { PlatformPieChart } from "@/components/platform-pie-chart"
import { PostsTable } from "@/components/posts/posts-table"
import { AdsTable } from "@/components/ads/ads-table"
import { TiktokIcon } from "@/components/ui/tiktok-icon"

export default function Dashboard() {
  return (
    <Layout>
      <PageHeader title="Dashboard" />
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4 md:w-fit">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="ads">Werbeanzeigen</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewCards />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Engagement nach Plattform</CardTitle>
                <CardDescription>Engagement-Metriken über alle Plattformen hinweg</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <EngagementChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Plattform-Verteilung</CardTitle>
                <CardDescription>Verteilung der Follower nach Plattform</CardDescription>
              </CardHeader>
              <CardContent>
                <PlatformPieChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Werbeausgaben vs. Umsatz</CardTitle>
                <CardDescription>Vergleich zwischen Werbeausgaben und generiertem Umsatz</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Posts mit dem höchsten Engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-muted p-2">
                      <Instagram className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Produktankündigung</p>
                      <p className="text-sm text-muted-foreground">45.2K Likes • 1.2K Kommentare</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-muted p-2">
                      <TiktokIcon />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Trend Challenge</p>
                      <p className="text-sm text-muted-foreground">1.8M Views • 152K Likes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-muted p-2">
                      <Facebook className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Kundenerfolgsgeschichte</p>
                      <p className="text-sm text-muted-foreground">12.5K Likes • 3.2K Shares</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="posts" className="space-y-4">
          <PostsTable />
        </TabsContent>
        <TabsContent value="engagement" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Engagement-Metriken über alle Plattformen hinweg</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="ads" className="space-y-4">
          <AdsTable />
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
