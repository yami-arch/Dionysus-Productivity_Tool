'use client'

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader,SidebarMenu,SidebarMenuButton,SidebarMenuItem } from '~/components/ui/sidebar'
import { Bot, LayoutDashboard, Presentation, CreditCard } from 'lucide-react' // 1.5k (gzipped: 814)
import Link from 'next/link' // Import Link from next/link instead of lucide-react
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'
const items = [
  {
    title: "Dashboard",
    url: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: "Q&A",
    url: '/qa',
    icon: Bot
  },
  {
    title: "Meetings",
    url: '/meetings',
    icon: Presentation
  },
  {
    title: "Billing",
    url: '/billing',
    icon: CreditCard
  },
]
const projects=[
    {
        name:'Project 1',
    },
    {
        name:'Project 2',
    }

]

function AppSidebar() {
    const pathname = usePathname()
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        Logo
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={cn({'!bg-primary !text-white': pathname === item.url})}>
                      <item.icon className="w-4 h-4 mr-2" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>
                Your Projects
                
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        projects.map((project) => (
                            <SidebarMenuItem key={project.name}>
                                <SidebarMenuButton asChild>
                                    <div>
                                        <div className={cn(
                                            'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
                                            {
                                                'bg-primary text-white': true
                                            }
                                        )}>
                                            {project.name[0]}
                                        </div>
                                        <span>{project.name}</span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                        
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}
export default AppSidebar;