import { stats_data } from "./statsData";

const Completed = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats_data.past.map((stat) => (
        <div key={stat.name} className="p-4 border border-gray-300 rounded-xl">
          <p className="text-sm text-neutral-500">{stat.name}</p>
          <p className="font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Completed;
