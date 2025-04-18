import React from 'react'
import { cn } from '@/lib/utils'
import { MapPin, MoveUpRight, Truck, TruckIcon } from 'lucide-react'

import { currentShipments, onTheWayProductData, shipmentDetails } from '../constants'
import { formatCompact, formatWithCommas } from '@/hooks/useFormate'
import GrayScaleMap from './GrayScaleMap'

function ShipmentDetails() {
    return (
        <React.Fragment>

            {/* Shipment cards info  */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                {
                    shipmentDetails.map((e) => {
                        return (
                            <div className='bg-white flex flex-col gap-2 p-4 rounded-xl relative' key={e.title} >
                                <div className=' absolute right-4 top-4 border border-indigo-500 rounded-md p-2'>
                                    <TruckIcon className='text-indigo-500' strokeWidth={1} />
                                </div>
                                <p className="text-sm font-semibold">{e.title}</p>
                                <p className='text-3xl font-bold'>{formatWithCommas(e.Units)}</p>
                                <div className='flex gap-2 items-center text-sm'> <MoveUpRight className='mt-[3px] text-emerald-400' size={15} /> {e.growth} % <span className='text-gray-400'>+{formatCompact(e.todayPacked)} Today</span></div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Current shipment details */}
            <div className='bg-white rounded-xl p-4 h-[60vh]'>
                <div className='grid grid-cols-5 gap-4 h-full'>
                    <div className='col-span-2 overflow-y-auto pr-2 h-full'>
                        <p className="font-semibold"> In Transit Shipments </p>
                        <div className='my-2 flex flex-col gap-4'>
                            {currentShipments.map((shipment, index) => (
                                <div key={shipment.id} className={cn(index ? "border-gray-200" : "border-indigo-400", "cursor-pointer rounded-lg border p-4")}>
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Shipment Number</p>
                                                <p className="text-xl font-semibold">{shipment.id}</p>
                                            </div>
                                            <div className="space-y-2 flex gap-4">
                                                <div className='relative flex flex-col h-auto justify-between'>
                                                    <div className="rounded-full ml-[-3px] bg-gray-300 w-[20px] h-[20px] z-10">
                                                        <div className="rounded-full m-1 bg-gray-900 w-3 h-3 z-10"></div>
                                                    </div>
                                                    <div className="absolute top-3 bottom-3 left-1.5 w-0 border-l border-dashed border-indigo-600"></div>
                                                    <MapPin size={18} className='text-indigo-600 m-[-2px]' />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div>
                                                        <p className="text-xs text-gray-500">Pickup location</p>
                                                        <p className="text-xs font-semibold">{shipment.pickupLocation}</p>
                                                    </div>
                                                    <div className=" w-full border border-dashed border-gray-400"></div>
                                                    <div>
                                                        <p className="text-xs text-gray-500">Drop-off location</p>
                                                        <p className="text-xs font-semibold">{shipment.dropoffLocation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <Truck size={48} className="text-gray-300" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Google map  */}
                    <div className='col-span-3 overflow-y-auto pr-2 h-full'>
                        <p className="font-semibold"> On The Way </p>
                        <GrayScaleMap />
                        <div className="grid grid-cols-5 divide-x-1 divide divide-gray-500">
                            {onTheWayProductData.map((product) => (
                                <div key={product.title} className="p-2">
                                    <p className="text-xs text-gray-500">{product.title}</p>
                                    <p className="text-sm font-semibold">{product.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShipmentDetails