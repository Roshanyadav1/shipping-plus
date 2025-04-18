import React from "react"

// imported custom layout
import DashboardLayout from "@/layout/DashboardLayout"
import ShipmentDetails from "./components/ShipmentDetails"
import { DataTable } from "@/components/ui/table/DataTable"
import { trackingOrderDetails, trackingTableColumns } from "./constants"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown/dropdown-menu"

const Dashboard: React.FC = () => {
    return (
        <React.Fragment>
            <DashboardLayout>
                <div className=" p-4 flex flex-col flex-wrap gap-8">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold">Welcome Back , Max</h1>
                            <p className="text-gray-500">Here's what happening with your store</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="bg-white p-2 outline-none cursor-pointer shadow-sm rounded-[4px]">Show Stat : Per day</DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[150px]">
                                    <DropdownMenuItem>Weakly</DropdownMenuItem>
                                    <DropdownMenuItem>Monthly</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    {/* Shipment details : */}
                    <ShipmentDetails />

                    {/* Track orders : */}
                    <div className="bg-white rounded-xl p-4 overflow-auto w-full">
                        <p className="font-semibold text-2xl pb-2"> Tracking Orders </p>
                        <DataTable columns={trackingTableColumns} data={trackingOrderDetails} />
                    </div>
                </div>
            </DashboardLayout>
        </React.Fragment>
    )
}

export default Dashboard