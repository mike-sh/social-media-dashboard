import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Layout } from "@/components/layout/layout"
import { PageHeader } from "@/components/layout/page-header"
import { PlatformMetrics } from "@/components/metrics/platform-metrics"
import { EngagementChart } from "@/components/engagement-chart"
import { PostsTable } from "@/components/posts/posts-table"
import { AdsTable } from "@/components/ads/ads-table"

export default function InstagramPage() {
  return (
    <Layout>
      <PageHeader title="Instagram" description="Überwachen Sie Ihre Instagram-Aktivitäten und -Kampagnen" />
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 md:w-fit">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="ads">Werbeanzeigen</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PlatformMetrics platform="instagram" />
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Instagram Engagement Trends</CardTitle>
                <CardDescription>Engagement-Metriken über die letzten Monate</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Content-Analyse</CardTitle>
              <CardDescription>Performance nach Content-Typ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">Content-Typen</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Fotos</span>
                        <span className="text-xs font-medium">45%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[45%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Reels</span>
                        <span className="text-xs font-medium">32%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[32%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Stories</span>
                        <span className="text-xs font-medium">18%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[18%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Carousel</span>
                        <span className="text-xs font-medium">5%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[5%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Engagement nach Typ</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Fotos</span>
                        <span className="text-xs font-medium">3.2%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[32%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Reels</span>
                        <span className="text-xs font-medium">5.8%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[58%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Stories</span>
                        <span className="text-xs font-medium">2.1%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[21%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Carousel</span>
                        <span className="text-xs font-medium">4.5%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[45%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="posts" className="space-y-4">
          <PostsTable platform="instagram" />
        </TabsContent>
        <TabsContent value="ads" className="space-y-4">
          <AdsTable platform="instagram" />
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
