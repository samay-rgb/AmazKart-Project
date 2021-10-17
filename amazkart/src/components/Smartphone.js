import React from "react";
import Items from "./Items";
import sm from "./sm.jpeg";
import sm3 from "./sm3.jpg";
import sm4 from "./sm4.jpeg";
export default function Smartphone() {
  const items = [
    {
      id: "a",
      name: "Samsung FlipZ#=3",
      price: "1000",
      image: sm,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display | 64MP + 5MP + 2MP | 8MP Front Camera | 5000 mAh Lithium-ion Battery | MediaTek Dimensity 700 Processor",
    },
    {
      id: "b",
      name: "Samsung FlipZ#=31",
      price: "1500",
      image: sm3,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "c",
      name: "Samsung FlipZ#=32",
      price: "1090",
      image: sm4,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "d",
      name: "Samsung FlipZ#=33",
      price: "1009",
      image: sm,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "e",
      name: "Samsung FlipZ#=34",
      price: "1099",
      image: sm3,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "f",
      name: "Samsung FlipZ#=3",
      price: "100",
      image: sm4,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "g",
      name: "Samsung FlipZ#=3",
      price: "1000",
      image: sm4,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "h",
      name: "Samsung FlipZ#=31",
      price: "1500",
      image: sm3,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
    {
      id: "i",
      name: "Samsung FlipZ#=32",
      price: "1090",
      image: sm,
      description:
        "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display64MP + 5MP + 2MP | 8MP Front Camera5000 mAh Lithium-ion BatteryMediaTek Dimensity 700 Processor",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="text-center">
          Find best selling smartphones according to your budget. Get additional
          10% off on prepaid orders
        </h1>
        <div className="row">
          {items.map((element) => {
            return (
              <Items
                key={element.id}
                price={element.price}
                image={element.image}
                name={element.name}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
