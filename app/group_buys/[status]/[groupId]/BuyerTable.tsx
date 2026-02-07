"use client";
import { formatDate } from "@/utils/format_date";
import { buyercol } from "./BuyerTableCol";
import BadgeDropdown from "@/components/BadgeDropdown";
import { ORDER_STATUSES } from "@/utils/orderStatuses";
import { useState } from "react";
import Badge from "@/components/Badge";
import Checkbox from "@/components/Checkbox";

type Props = {
  dataRows: any[];
};

const BuyerTable = ({ dataRows }: Props) => {
  const [orderStatus, setOrderStatus] = useState(ORDER_STATUSES[0]);
  console.log(dataRows);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {buyercol.map((col) => (
              <th key={col.id}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((data) => (
            <tr key={data.id}>
              <th>{data.id}</th>
              <td>
                {data.user?.first_name} {data.user?.last_name}
              </td>
              <td>{data.phonenumber}</td>
              <td>{data.pickup_location?.private_address}</td>
              <td>{data.unit_name}</td>
              <td>{Number(data.unit)}</td>
              <td>&#x20A6;{Number(data.total_price)}</td>
              <td>{formatDate(data.created_at)}</td>
              <td><Badge status={data.status_display_text}/></td>
              <td>
                {/* {
                  <BadgeDropdown
                    values={ORDER_STATUSES}
                    defaultValue={orderStatus}
                    onChange={(val: string) => setOrderStatus(val)}
                  />
                } */}
               <Checkbox status={data.status_display_text}/>
              </td>
              <td>{data.order_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuyerTable;
