const ProductStats = () => {
  return (
    <div className="flex-1 w-full flex gap-2 flex-wrap text-lg text-neutral-600">
      <section className="flex-1 flex flex-col gap-4 flex-wrap border border-black/20 p-4 rounded-xl">
        <p>Total</p>
        <p className="text-2xl font-semibold">N500,000</p>
      </section>

      <section className="flex-1 flex flex-col gap-4 flex-wrap border border-black/20 p-4 rounded-xl">
        <p>Backers</p>
        <p className="text-2xl font-semibold">4</p>
      </section>

      <section className="flex-1 flex flex-col gap-4 flex-wrap border border-black/20 p-4 rounded-xl">
        <p>Time Left</p>
        <p className="text-2xl font-semibold">25 Days</p>
      </section>
    </div>
  );
};

export default ProductStats;
