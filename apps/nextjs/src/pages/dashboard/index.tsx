import React from 'react'
import {
    AreaChart,
    Card,
    Col,
    Grid,
    Title
} from "@tremor/react";
import { Meta } from '~/meta/meta'
import DashboardMain from '~/templates/dashboardMain'
import { usePathname } from 'next/navigation'

const chartdata = [
    {
        date: "Jan 22",
        SemiAnalysis: 2890,
        "The Pragmatic Engineer": 2338,
    },
    {
        date: "Feb 22",
        SemiAnalysis: 2756,
        "The Pragmatic Engineer": 2103,
    },
    {
        date: "Mar 22",
        SemiAnalysis: 3322,
        "The Pragmatic Engineer": 2194,
    },
    {
        date: "Apr 22",
        SemiAnalysis: 3470,
        "The Pragmatic Engineer": 2108,
    },
    {
        date: "May 22",
        SemiAnalysis: 3475,
        "The Pragmatic Engineer": 1812,
    },
    {
        date: "Jun 22",
        SemiAnalysis: 3129,
        "The Pragmatic Engineer": 1726,
    },
];

const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};


const Dashboard = () => {
    const pathname = usePathname()
    console.log(pathname);

    return (
        <DashboardMain meta={<Meta title='Dashboard' description='All the things you would need' />}>
            <Grid numItemsLg={6} className="gap-6 mt-6">
                {/* Main section */}
                <Col numColSpanLg={4}>
                    <Card className="h-full">
                        <div className="h-60" />
                    </Card>
                </Col>

                {/* KPI sidebar */}
                <Col numColSpanLg={2}>
                    <div className="space-y-6">
                        <Card>
                            <div className="h-24" />
                        </Card>
                        <Card>
                            <div className="h-24" />
                        </Card>
                        <Card>
                            <div className="h-24" />
                        </Card>
                    </div>
                </Col>
            </Grid>
        </DashboardMain>
    )
}
export default Dashboard