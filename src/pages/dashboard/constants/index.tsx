type ShipmentDetails = {
  title: string;  
  Units: number;
  growth: number;
  todayPacked: number;
}

type CurrentShipment = {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
}

type OnTheWayProductData = {
  title: string;
  value: string;
}

export const shipmentDetails : ShipmentDetails[] = [
  {
    title: "Total Unit Packed",
    Units: 831071,
    growth: 13,
    todayPacked: 7000
  },
  {
    title: "Total Shipments",
    Units: 831071,
    growth: 13,
    todayPacked: 7000
  },
  {
    title: "Active Shipments",
    Units: 831071,
    growth: 13,
    todayPacked: 7000
  },
  {
    title: "Delivered Shipment",
    Units: 831071,
    growth: 13,
    todayPacked: 7000
  }
]


export const currentShipments : CurrentShipment[] = [
  {
    id: '831071',
    pickupLocation: '1070 street at yard main glasco, san Francisco',
    dropoffLocation: '1070 street at yard main glasco, san Francisco'
  },
  {
    id: '831072',
    pickupLocation: '250 Market Street, San Francisco',
    dropoffLocation: '85 Valencia Street, San Francisco'
  },
  {
    id: '831073',
    pickupLocation: '120 Powell Street, San Francisco',
    dropoffLocation: '1 Ferry Building, San Francisco'
  }
];

export const OnTheWayProductData : OnTheWayProductData[] = [{
  title: "Category",
  value: "Electronics",
},
{
  title: "Distance",
  value: "120km"
},
{
  title: "Estimation",
  value: "2d 4h"
},
{
  title: "Weight",
  value: "12kg"
},
{
  title: "Fees",
  value: "$1000"
},
]
