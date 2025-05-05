import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Layout } from "@/components/layout/layout"
import { PageHeader } from "@/components/layout/page-header"
import { PlatformMetrics } from "@/components/metrics/platform-metrics"
import { EngagementChart } from "@/components/engagement-chart"
import { PostsTable } from "@/components/posts/posts-table"
import { AdsTable } from "@/components/ads/ads-table"

export default function FacebookPage() {
  return (
    <Layout>
      <PageHeader title="Facebook" description="Überwachen Sie Ihre Facebook-Aktivitäten und -Kampagnen" />
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 md:w-fit">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="ads">Werbeanzeigen</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PlatformMetrics platform="facebook" />
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Facebook Engagement Trends</CardTitle>
                <CardDescription>Engagement-Metriken über die letzten Monate</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Zielgruppenanalyse</CardTitle>
              <CardDescription>Demografische Daten Ihrer Facebook-Follower</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">Altersverteilung</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">18-24</span>
                        <span className="text-xs font-medium">24%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[24%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">25-34</span>
                        <span className="text-xs font-medium">38%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[38%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">35-44</span>
                        <span className="text-xs font-medium">22%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[22%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">45+</span>
                        <span className="text-xs font-medium">16%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[16%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Geschlechterverteilung</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Männlich</span>
                        <span className="text-xs font-medium">42%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[42%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Weiblich</span>
                        <span className="text-xs font-medium">56%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[56%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Divers</span>
                        <span className="text-xs font-medium">2%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[2%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="posts" className="space-y-4">
          <PostsTable platform="facebook" />
        </TabsContent>
        <TabsContent value="ads" className="space-y-4">
          <AdsTable platform="facebook" />
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
