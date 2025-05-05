"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Facebook, Home, Instagram, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TiktokIcon } from "@/components/ui/tiktok-icon"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="grid gap-2 p-4 text-sm">
      <Button variant={isActive("/") ? "default" : "ghost"} className="justify-start gap-2" asChild>
        <Link href="/">
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
      </Button>
      <Button variant={isActive("/facebook") ? "default" : "ghost"} className="justify-start gap-2" asChild>
        <Link href="/facebook">
          <Facebook className="h-4 w-4" />
          Facebook
        </Link>
      </Button>
      <Button variant={isActive("/instagram") ? "default" : "ghost"} className="justify-start gap-2" asChild>
        <Link href="/instagram">
          <Instagram className="h-4 w-4" />
          Instagram
        </Link>
      </Button>
      <Button variant={isActive("/tiktok") ? "default" : "ghost"} className="justify-start gap-2" asChild>
        <Link href="/tiktok">
          <TiktokIcon />
          TikTok
        </Link>
      </Button>
      <Button variant={isActive("/berichte") ? "default" : "ghost"} className="justify-start gap-2" asChild>
        <Link href="/berichte">
          <BarChart3 className="h-4 w-4" />
          Berichte
        </Link>
      </Button>
      <Button variant={isActive("/einstellungen") ? "default" : "ghost"} className="justify-start gap-2" asChild>
        <Link href="/einstellungen">
          <Settings className="h-4 w-4" />
          Einstellungen
        </Link>
      </Button>
    </nav>
  )
}
