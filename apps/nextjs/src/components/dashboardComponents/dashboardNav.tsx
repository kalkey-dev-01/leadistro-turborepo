import Link from "next/link"

import { cn } from "~/utils/utils"
import { Heading4 } from "../typography/Typography"
import { UserNav } from "./dashboardUserNavDropdown"

export function DashboardNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Overview
            </Link>
            <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Customers
            </Link>
            <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Products
            </Link>
            <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Settings
            </Link>
        </nav>
    )
}

export default function DashboardNavTest() {
    return (
        <>
            <div className="max-w-screen-md w-full rounded-full m-3 absolute flex z-10 h-[5vh] md:h-[10vh] bg-leadistroBrown items-center justify-between px-4 lg:px-6">
                <Heading4 textChildren="Leadistro Dashboard" className="font-comfortaa text-leadistroWhite" />
                <DashboardNav className="hidden md:inline-block text-leadistroWhite font-poppins" />
                <UserNav />
            </div>
        </>
    )
}