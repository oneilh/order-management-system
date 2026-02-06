import React from "react";

const BuyersList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <section className="flex flex-col gap-0.5">
        <h3 className="text-lg font-semibold">Order history</h3>
        <p>Manage transaction and fulfillment</p>
      </section>
      <section className="border-2 border-dashed rounded-lg border-black/20 p-4">
        {children}
      </section>
    </div>
  );
};

export default BuyersList;
