"use client"

import { useState } from "react"
import {
  BarChart3,
  Calendar,
  ChevronDown,
  Facebook,
  Home,
  Instagram,
  LineChart,
  Menu,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"
import { format } from "date-fns"
import { de } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

import { EngagementChart } from "@/components/engagement-chart"
import { RevenueChart } from "@/components/revenue-chart"
import { PlatformPieChart } from "@/components/platform-pie-chart"
import { AdSpendChart } from "@/components/ad-spend-chart"

// Custom TikTok icon since it's not in Lucide
function TiktokIconComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  )
}

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-none">
            <nav className="grid gap-2 text-lg font-medium">
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <Home className="h-5 w-5" />
                Dashboard
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <Facebook className="h-5 w-5" />
                Facebook
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <Instagram className="h-5 w-5" />
                Instagram
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <TiktokIconComponent />
                TikTok
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <BarChart3 className="h-5 w-5" />
                Berichte
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <Settings className="h-5 w-5" />
                Einstellungen
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <LineChart className="h-6 w-6" />
          <span className="text-lg font-semibold tracking-tight">Social Media Tracker</span>
        </div>
        <div className="flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Suchen..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-1">
              {date ? format(date, "PPP", { locale: de }) : "Datum wählen"}
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <CalendarComponent mode="single" selected={date} onSelect={setDate} locale={de} initialFocus />
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Users className="h-5 w-5" />
              <span className="sr-only">Benutzermenü</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Einstellungen</DropdownMenuItem>
            <DropdownMenuItem>Abmelden</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r md:block">
          <nav className="grid gap-2 p-4 text-sm">
            <Button variant="default" className="justify-start gap-2">
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Instagram className="h-4 w-4" />
              Instagram
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <TiktokIconComponent />
              TikTok
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Berichte
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Settings className="h-4 w-4" />
              Einstellungen
            </Button>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <div className="ml-auto flex items-center gap-2">
              <Select defaultValue="7d">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Zeitraum wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Letzte 24 Stunden</SelectItem>
                  <SelectItem value="7d">Letzte 7 Tage</SelectItem>
                  <SelectItem value="30d">Letzte 30 Tage</SelectItem>
                  <SelectItem value="90d">Letzte 90 Tage</SelectItem>
                  <SelectItem value="custom">Benutzerdefiniert</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Exportieren
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4 md:w-fit">
              <TabsTrigger value="overview">Übersicht</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="ads">Werbeanzeigen</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gesamte Reichweite</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.4M</div>
                    <p className="text-xs text-muted-foreground">+12.5% im Vergleich zum Vormonat</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.3%</div>
                    <p className="text-xs text-muted-foreground">+0.8% im Vergleich zum Vormonat</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Werbeausgaben</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">€15,234</div>
                    <p className="text-xs text-muted-foreground">+22.5% im Vergleich zum Vormonat</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">ROI</CardTitle>
                    <PieChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.2x</div>
                    <p className="text-xs text-muted-foreground">+0.4x im Vergleich zum Vormonat</p>
                  </CardContent>
                </Card>
              </div>
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
                          <TiktokIconComponent />
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
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Alle Posts</CardTitle>
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
                        <TableHead>Plattform</TableHead>
                        <TableHead>Titel</TableHead>
                        <TableHead>Datum</TableHead>
                        <TableHead>Reichweite</TableHead>
                        <TableHead>Engagement</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Instagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </div>
                        </TableCell>
                        <TableCell>Produktankündigung</TableCell>
                        <TableCell>15.05.2023</TableCell>
                        <TableCell>125.4K</TableCell>
                        <TableCell>45.2K</TableCell>
                        <TableCell>
                          <Badge>Veröffentlicht</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <TiktokIconComponent />
                            <span>TikTok</span>
                          </div>
                        </TableCell>
                        <TableCell>Trend Challenge</TableCell>
                        <TableCell>12.05.2023</TableCell>
                        <TableCell>1.8M</TableCell>
                        <TableCell>152K</TableCell>
                        <TableCell>
                          <Badge>Veröffentlicht</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Facebook className="h-4 w-4" />
                            <span>Facebook</span>
                          </div>
                        </TableCell>
                        <TableCell>Kundenerfolgsgeschichte</TableCell>
                        <TableCell>10.05.2023</TableCell>
                        <TableCell>85.2K</TableCell>
                        <TableCell>12.5K</TableCell>
                        <TableCell>
                          <Badge>Veröffentlicht</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Instagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </div>
                        </TableCell>
                        <TableCell>Hinter den Kulissen</TableCell>
                        <TableCell>05.05.2023</TableCell>
                        <TableCell>78.3K</TableCell>
                        <TableCell>22.1K</TableCell>
                        <TableCell>
                          <Badge>Veröffentlicht</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <TiktokIconComponent />
                            <span>TikTok</span>
                          </div>
                        </TableCell>
                        <TableCell>Produkt Tutorial</TableCell>
                        <TableCell>01.05.2023</TableCell>
                        <TableCell>950K</TableCell>
                        <TableCell>85.7K</TableCell>
                        <TableCell>
                          <Badge>Veröffentlicht</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="engagement" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Facebook Engagement</CardTitle>
                    <Facebook className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32.5K</div>
                    <p className="text-xs text-muted-foreground">+5.2% im Vergleich zum Vormonat</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Likes</span>
                        <span className="font-medium">18.2K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Kommentare</span>
                        <span className="font-medium">5.7K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Shares</span>
                        <span className="font-medium">8.6K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Klicks</span>
                        <span className="font-medium">42.1K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Instagram Engagement</CardTitle>
                    <Instagram className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87.3K</div>
                    <p className="text-xs text-muted-foreground">+12.8% im Vergleich zum Vormonat</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Likes</span>
                        <span className="font-medium">67.2K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Kommentare</span>
                        <span className="font-medium">12.5K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Saves</span>
                        <span className="font-medium">7.6K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Shares</span>
                        <span className="font-medium">4.2K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">TikTok Engagement</CardTitle>
                    <TiktokIconComponent />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">237.8K</div>
                    <p className="text-xs text-muted-foreground">+28.5% im Vergleich zum Vormonat</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Likes</span>
                        <span className="font-medium">152K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Kommentare</span>
                        <span className="font-medium">32.5K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Shares</span>
                        <span className="font-medium">45.7K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Saves</span>
                        <span className="font-medium">7.6K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Trends</CardTitle>
                  <CardDescription>Engagement-Metriken über alle Plattformen hinweg</CardDescription>
                </CardHeader>
                <CardContent>
                  <EngagementChart />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ads" className="space-y-4">
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
                    <CardTitle>Werbeausgaben nach Plattform</CardTitle>
                    <CardDescription>Verteilung der Werbeausgaben nach Plattform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdSpendChart />
                  </CardContent>
                </Card>
              </div>
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
                        <TableHead>Plattform</TableHead>
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
                      <TableRow>
                        <TableCell>Sommerkollektion</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Facebook className="h-4 w-4" />
                            <span>Facebook</span>
                          </div>
                        </TableCell>
                        <TableCell>€5,000</TableCell>
                        <TableCell>€3,245</TableCell>
                        <TableCell>450K</TableCell>
                        <TableCell>12.5K</TableCell>
                        <TableCell>2.78%</TableCell>
                        <TableCell>€12,450</TableCell>
                        <TableCell>3.8x</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Produkteinführung</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Instagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </div>
                        </TableCell>
                        <TableCell>€7,500</TableCell>
                        <TableCell>€6,890</TableCell>
                        <TableCell>780K</TableCell>
                        <TableCell>25.3K</TableCell>
                        <TableCell>3.24%</TableCell>
                        <TableCell>€22,780</TableCell>
                        <TableCell>3.3x</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Virale Challenge</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <TiktokIconComponent />
                            <span>TikTok</span>
                          </div>
                        </TableCell>
                        <TableCell>€4,000</TableCell>
                        <TableCell>€3,780</TableCell>
                        <TableCell>1.2M</TableCell>
                        <TableCell>45.8K</TableCell>
                        <TableCell>3.82%</TableCell>
                        <TableCell>€15,450</TableCell>
                        <TableCell>4.1x</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Saisonale Angebote</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Facebook className="h-4 w-4" />
                            <span>Facebook</span>
                          </div>
                        </TableCell>
                        <TableCell>€3,500</TableCell>
                        <TableCell>€2,890</TableCell>
                        <TableCell>320K</TableCell>
                        <TableCell>9.8K</TableCell>
                        <TableCell>3.06%</TableCell>
                        <TableCell>€8,670</TableCell>
                        <TableCell>3.0x</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Influencer Kampagne</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Instagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </div>
                        </TableCell>
                        <TableCell>€10,000</TableCell>
                        <TableCell>€8,450</TableCell>
                        <TableCell>950K</TableCell>
                        <TableCell>32.7K</TableCell>
                        <TableCell>3.44%</TableCell>
                        <TableCell>€35,670</TableCell>
                        <TableCell>4.2x</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
