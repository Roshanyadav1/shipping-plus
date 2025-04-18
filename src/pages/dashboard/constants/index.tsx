import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"

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

type TrackingOrderDetails = {
  product_id: string;
  type: string;
  arrival_time: string;
  weight: string | null;
  route: string;
  fee: string;
  status: boolean;
}

export const shipmentDetails: ShipmentDetails[] = [
  {
    title: "Total Unit Packed",
    Units: 831071,
    growth: 23,
    todayPacked: 273
  },
  {
    title: "Total Shipments",
    Units: 837740,
    growth: 52,
    todayPacked: 455
  },
  {
    title: "Active Shipments",
    Units: 344334,
    growth: 74,
    todayPacked: 4335
  },
  {
    title: "Delivered Shipment",
    Units: 966257,
    growth: 22,
    todayPacked: 9877
  }
]

export const currentShipments: CurrentShipment[] = [
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

export const onTheWayProductData: OnTheWayProductData[] = [{
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

export const trackingOrderDetails: TrackingOrderDetails[] =
  [{
    product_id: "130.180.217.87/28",
    type: "Food - Dried Fruits",
    arrival_time: "8/2/2024",
    weight: "90",
    route: "Didymodon Moss",
    fee: "$20.31",
    status: true
  }, {
    product_id: "20.110.118.216/29",
    type: "Home",
    arrival_time: "5/1/2024",
    weight: "43",
    route: "Skin Lichen",
    fee: "$6.69",
    status: true
  }, {
    product_id: "115.166.159.44/28",
    type: "Kitchen",
    arrival_time: "5/5/2024",
    weight: "200",
    route: "Sarcographa Lichen",
    fee: "$90.55",
    status: false
  }, {
    product_id: "195.138.225.173/6",
    type: "Food - Seafood",
    arrival_time: "4/21/2024",
    weight: "475",
    route: "Dot Lichen",
    fee: "$47.07",
    status: true
  }, {
    product_id: "93.141.138.155/12",
    type: "Food - Snacks",
    arrival_time: "9/14/2024",
    weight: "50",
    route: "Jand",
    fee: "$80.95",
    status: true
  }, {
    product_id: "254.159.244.84/6",
    type: "Food - Salads",
    arrival_time: "12/16/2024",
    weight: "25",
    route: "Crinklemat",
    fee: "$78.93",
    status: true
  }, {
    product_id: "124.162.53.146/28",
    type: "Outdoor",
    arrival_time: "11/15/2024",
    weight: "60",
    route: "White Cogwood",
    fee: "$50.51",
    status: false
  }, {
    product_id: "60.206.207.106/6",
    type: "Pets",
    arrival_time: "12/6/2024",
    weight: "276",
    route: "Dogtooth Violet",
    fee: "$1.45",
    status: true
  }]

export const trackingTableColumns: ColumnDef<TrackingOrderDetails>[] = [
  {
    accessorKey: "product_id",
    header: "PRODUCT ID",
    cell: ({ row }) => {
      const productId: string = row.getValue("product_id")
      return <div className="text-gray-400">{productId}</div>
  },
  },
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => {
      const productType: string = row.getValue("type")
      return <div className={"bg-gray-400 p-1 rounded-sm w-[100px] text-center truncate text-white"} >{productType}</div>
    },
  },
  {
    accessorKey: "arrival_time",
    header: "ARRIVAL TIME",
  },
  {
    accessorKey: "weight",
    header: "WEIGHT",
    cell: ({ row }) => {
      const weight: string = row.getValue("weight")
      return <div>{weight} kg</div>
    },
  },
  {
    accessorKey: "route",
    header: "ROUTE",
  },
  {
    accessorKey: "fee",
    header: "FEE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const isDelivered = row.getValue("status")
      return <div className={cn(isDelivered ? "bg-green-200" : "bg-gray-200", "p-1 rounded-3xl w-[100px] text-center")} >{isDelivered ? "Delivered" : "Not Delivered"}</div>
    },
  },
]

