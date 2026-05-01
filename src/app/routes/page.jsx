"use client";
import RouteCard from "@/components/RouteCard";
import { useAppContext } from "@/context/AppContext";

function Routes() {
  const { areaList } = useAppContext();
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Search Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 w-full">
          <select className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {areaList.map((area, i) => (
              <option value={area}>{area}</option>
            ))}
          </select>

          <select className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {areaList.reverse().map((area, i) => (
              <option value={area}>{area}</option>
            ))}
          </select>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
          Search
        </button>
      </div>

      {/* Routes Grid */}
      <RouteCard />
    </div>
  );
}

export default Routes;
