import React from "react"

// imported custom layout
import DashboardLayout from "@/layout/DashboardLayout"
import ShipmentDetails from "./components/ShipmentDetails"

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
                            some sort of dropdown
                        </div>
                    </div>

                    {/* // info cards here  */}
                    <ShipmentDetails />
                </div>

            </DashboardLayout>

        </React.Fragment>
    )
}

export default Dashboard