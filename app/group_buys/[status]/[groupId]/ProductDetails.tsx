import { GoTag } from "react-icons/go";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
const ProductDetails = () => {
  return (
    <div className="flex-2 flex flex-col justify-between gap-8 border-r-2 border-dashed border-black/20 pr-8 max-md:border-0 max-md:pr-0">
      {/* top */}
      <section className="flex gap-6">
        {/* top left */}
        <div className="avatar">
          <div className="w-28 rounded-2xl">
            <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
          </div>
        </div>

        {/*top right */}
        <section className="flex flex-col gap-4 ">
          <h1 className="text-3xl font-semibold">1 Paint Batch #4</h1>

          {/*top right bottom */}
          <section className="flex gap-4 items-center text-neutral-600">
            <div className="flex gap-2 items-center">
              <GoTag /> <p>N4,585 / Unit</p>
            </div>

            <div className="flex gap-2 items-center">
              <HiOutlineCalendarDateRange /> <p>Started: 10 Jan 2026</p>
            </div>
          </section>
        </section>
      </section>
      {/* bottom */}
      <div className="flex flex-col gap-2 text-lg">
        <div className="flex justify-between text-neutral-600">
          <p className="font-semibold">65% Complete</p> <p>124 / 200 Units</p>
        </div>
        <progress
          className="progress progress-neutral w-full"
          value="100"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default ProductDetails;
