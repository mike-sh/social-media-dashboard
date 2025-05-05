import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import { Layout } from "@/components/layout/layout"
import { PageHeader } from "@/components/layout/page-header"

export default function EinstellungenPage() {
  return (
    <Layout>
      <PageHeader title="Einstellungen" description="Konfigurieren Sie Ihr Dashboard" />
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-3 md:w-fit">
          <TabsTrigger value="account">Konto</TabsTrigger>
          <TabsTrigger value="api">API-Verbindungen</TabsTrigger>
          <TabsTrigger value="notifications">Benachrichtigungen</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Verwalten Sie Ihre Kontoinformationen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Max Mustermann" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" defaultValue="max@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input id="company" defaultValue="Acme GmbH" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Position</Label>
                  <Input id="role" defaultValue="Marketing Manager" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Biografie</Label>
                <Textarea
                  id="bio"
                  defaultValue="Marketing Manager bei Acme GmbH mit Fokus auf Social Media Strategien."
                />
              </div>
              <Button>Speichern</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Passwort ändern</CardTitle>
              <CardDescription>Aktualisieren Sie Ihr Passwort</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Aktuelles Passwort</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Neues Passwort</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Passwort bestätigen</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Passwort ändern</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API-Verbindungen</CardTitle>
              <CardDescription>Verwalten Sie Ihre Social Media API-Verbindungen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-medium">Facebook</h3>
                  <p className="text-xs text-muted-foreground">Verbunden als Acme GmbH</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="facebook" defaultChecked />
                  <Button variant="outline" size="sm">
                    Neu verbinden
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-medium">Instagram</h3>
                  <p className="text-xs text-muted-foreground">Verbunden als @acme_official</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="instagram" defaultChecked />
                  <Button variant="outline" size="sm">
                    Neu verbinden
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-medium">TikTok</h3>
                  <p className="text-xs text-muted-foreground">Verbunden als @acme_tiktok</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="tiktok" defaultChecked />
                  <Button variant="outline" size="sm">
                    Neu verbinden
                  </Button>
                </div>
              </div>
              <Button>Änderungen speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Benachrichtigungen</CardTitle>
              <CardDescription>Konfigurieren Sie Ihre Benachrichtigungseinstellungen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-medium">E-Mail-Benachrichtigungen</h3>
                  <p className="text-xs text-muted-foreground">Erhalten Sie tägliche Zusammenfassungen per E-Mail</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-medium">Wöchentliche Berichte</h3>
                  <p className="text-xs text-muted-foreground">Erhalten Sie wöchentliche Leistungsberichte</p>
                </div>
                <Switch id="weekly-reports" defaultChecked />
              </div>
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-medium">Warnungen bei Leistungsabfall</h3>
                  <p className="text-xs text-muted-foreground">
                    Benachrichtigungen bei signifikanten Leistungsänderungen
                  </p>
                </div>
                <Switch id="performance-alerts" defaultChecked />
              </div>
              <Button>Speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
