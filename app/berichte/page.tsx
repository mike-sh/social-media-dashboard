import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Layout } from "@/components/layout/layout"
import { PageHeader } from "@/components/layout/page-header"
import { EngagementChart } from "@/components/engagement-chart"
import { RevenueChart } from "@/components/revenue-chart"
import { PlatformPieChart } from "@/components/platform-pie-chart"
import { AdSpendChart } from "@/components/ad-spend-chart"

export default function BerichtePage() {
  return (
    <Layout>
      <PageHeader title="Berichte" description="Detaillierte Analysen und Berichte" />
      <Tabs defaultValue="engagement">
        <TabsList className="grid w-full grid-cols-3 md:w-fit">
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="audience">Zielgruppe</TabsTrigger>
          <TabsTrigger value="revenue">Umsatz</TabsTrigger>
        </TabsList>
        <TabsContent value="engagement" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Engagement-Analyse</h2>
            <div className="flex items-center gap-2">
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
              <Button>Exportieren</Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Engagement-Trends</CardTitle>
              <CardDescription>Engagement-Metriken über alle Plattformen hinweg</CardDescription>
            </CardHeader>
            <CardContent>
              <EngagementChart />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Engagement-Verteilung</CardTitle>
                <CardDescription>Verteilung nach Plattform</CardDescription>
              </CardHeader>
              <CardContent>
                <PlatformPieChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement-Metriken</CardTitle>
                <CardDescription>Detaillierte Aufschlüsselung</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Engagement-Rate</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Facebook</span>
                        <span className="text-xs font-medium">3.2%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[32%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Instagram</span>
                        <span className="text-xs font-medium">4.8%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[48%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">TikTok</span>
                        <span className="text-xs font-medium">5.7%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[57%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Zielgruppenanalyse</CardTitle>
              <CardDescription>Demografische Daten über alle Plattformen hinweg</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-sm font-medium">Altersverteilung</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">18-24</span>
                        <span className="text-xs font-medium">28%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[28%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">25-34</span>
                        <span className="text-xs font-medium">42%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[42%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">35-44</span>
                        <span className="text-xs font-medium">18%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[18%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">45+</span>
                        <span className="text-xs font-medium">12%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[12%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-medium">Geschlechterverteilung</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Männlich</span>
                        <span className="text-xs font-medium">45%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[45%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Weiblich</span>
                        <span className="text-xs font-medium">52%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[52%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Divers</span>
                        <span className="text-xs font-medium">3%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[3%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Umsatzanalyse</CardTitle>
              <CardDescription>Werbeausgaben und generierter Umsatz</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueChart />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Werbeausgaben nach Plattform</CardTitle>
                <CardDescription>Verteilung der Werbeausgaben</CardDescription>
              </CardHeader>
              <CardContent>
                <AdSpendChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ROI nach Plattform</CardTitle>
                <CardDescription>Return on Investment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">ROI</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Facebook</span>
                        <span className="text-xs font-medium">3.4x</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[68%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Instagram</span>
                        <span className="text-xs font-medium">3.8x</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[76%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">TikTok</span>
                        <span className="text-xs font-medium">4.1x</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[82%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
