"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/custom-ai-agents", label: "Custom AI Agents" },
  { href: "/website-design", label: "Website Design" },
  { href: "/digital-marketing", label: "Digital Marketing" },
  { href: "/about", label: "About Us" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:isMobile?"0.85rem 1rem":"0.85rem 1.5rem",background:"rgba(10,10,11,0.88)",backdropFilter:"blur(20px) saturate(180%)",borderBottom:"1px solid var(--color-divider)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem" }}>
        <Link href="/" style={{ display:"flex",alignItems:"center",gap:"0.75rem",fontWeight:700,fontSize:isMobile?"0.95rem":"1rem",letterSpacing:"-0.01em",flexShrink:0 }}>
          <img src="/logo.png" alt="Rubab's Digital logo" style={{ width:"36px",height:"36px",objectFit:"contain",borderRadius:"8px",flexShrink:0 }} />
          <span style={{ whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:isMobile?"150px":"none" }}>Rubab&apos;s Digital</span>
        </Link>

        {!isMobile && (
          <div style={{ display:"flex",alignItems:"center",gap:"1.5rem",flex:1,justifyContent:"center" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize:"0.85rem",fontWeight:500,whiteSpace:"nowrap",color:pathname===l.href?"var(--color-text)":"var(--color-text-muted)",borderBottom:pathname===l.href?"1px solid var(--color-primary)":"1px solid transparent",paddingBottom:"2px",transition:"color 180ms" }}>{l.label}</Link>
            ))}
          </div>
        )}

        <div style={{ display:"flex",alignItems:"center",gap:"0.75rem" }}>
          {!isMobile && (
            <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 1.1rem",background:"var(--color-accent)",color:"#0a1a12",borderRadius:"var(--radius-md)",fontSize:"0.85rem",fontWeight:700,whiteSpace:"nowrap",transition:"background 180ms" }}>Free Consultation →</Link>
          )}
          {isMobile && (
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display:"inline-flex",width:"42px",height:"42px",alignItems:"center",justifyContent:"center",background:"var(--color-surface-offset)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-md)",color:"var(--color-text-muted)",cursor:"pointer" }} aria-label="Menu">
              {mobileOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {isMobile && mobileOpen && (
        <div style={{ position:"fixed",top:"68px",left:0,right:0,zIndex:99,background:"var(--color-surface)",borderBottom:"1px solid var(--color-divider)",padding:"1rem",display:"flex",flexDirection:"column",gap:"0.25rem" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ padding:"0.9rem 0",fontSize:"0.95rem",fontWeight:500,color:pathname===l.href?"var(--color-text)":"var(--color-text-muted)",borderBottom:"1px solid var(--color-divider)" }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ marginTop:"0.75rem",padding:"0.95rem",textAlign:"center",background:"var(--color-accent)",color:"#0a1a12",borderRadius:"var(--radius-md)",fontSize:"0.95rem",fontWeight:700 }}>Free Consultation →</Link>
        </div>
      )}
    </>
  )
}
