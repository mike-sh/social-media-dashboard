import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Layout } from "@/components/layout/layout"
import { PageHeader } from "@/components/layout/page-header"
import { PlatformMetrics } from "@/components/metrics/platform-metrics"
import { EngagementChart } from "@/components/engagement-chart"
import { PostsTable } from "@/components/posts/posts-table"
import { AdsTable } from "@/components/ads/ads-table"

export default function TiktokPage() {
  return (
    <Layout>
      <PageHeader title="TikTok" description="Überwachen Sie Ihre TikTok-Aktivitäten und -Kampagnen" />
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 md:w-fit">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="ads">Werbeanzeigen</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PlatformMetrics platform="tiktok" />
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>TikTok Engagement Trends</CardTitle>
                <CardDescription>Engagement-Metriken über die letzten Monate</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Trend-Analyse</CardTitle>
              <CardDescription>Performance nach Hashtags und Trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Top Hashtags</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">
                      #TrendChallenge <span className="font-medium">1.8M</span>
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">
                      #ProductTutorial <span className="font-medium">950K</span>
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">
                      #BehindTheScenes <span className="font-medium">780K</span>
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">
                      #CompanyLife <span className="font-medium">650K</span>
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">
                      #HowTo <span className="font-medium">520K</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Musik-Trends</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Trending Song 1</span>
                      <span className="text-xs font-medium">2.4M Views</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[80%] rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Trending Song 2</span>
                      <span className="text-xs font-medium">1.8M Views</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[60%] rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Trending Song 3</span>
                      <span className="text-xs font-medium">1.2M Views</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[40%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="posts" className="space-y-4">
          <PostsTable platform="tiktok" />
        </TabsContent>
        <TabsContent value="ads" className="space-y-4">
          <AdsTable platform="tiktok" />
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
