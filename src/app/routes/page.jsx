"use client";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";

function Routes() {
  const fetchRoutes = async () => {
    const { data } = await axios.get(`/api/get-route`);
    if (data) {
      console.log(data.routes);
    }
  };
  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Search Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 w-full">
          <select className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>From - Surjani</option>
            <option>Shahrah e Faisal</option>
            <option>Kala Goth</option>
          </select>

          <select className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>To - Malir</option>
            <option>Qaidabad</option>
            <option>Hussainabad</option>
          </select>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
          Search
        </button>
      </div>

      {/* Routes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/man.jpeg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <h3 className="font-semibold text-gray-800">Kloudxel</h3>
                <p className="text-sm text-gray-500">3 hours ago</p>
              </div>
            </div>

            <MessageSquare size={20} className="text-gray-600 cursor-pointer" />
          </div>

          {/* Content */}
          <div className="mt-5 text-gray-700 space-y-2">
            <p className="font-medium">
              🚗{" "}
              <span className="text-indigo-600">
                Surjani → Shahrah e Faisal
              </span>
            </p>

            <p>🕒 8:30 AM</p>

            <p>
              Vehicle:
              <span className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">
                Car
              </span>
            </p>

            <p>💺 Seats: 3</p>

            <p className="font-semibold text-green-600">💰 200 PKR</p>

            <p className="text-sm text-gray-500">📞 0300-2869091</p>
          </div>
        </div>

        {/* Duplicate Cards Example */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/man.jpeg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Kloudxel</h3>
                <p className="text-sm text-gray-500">3 hours ago</p>
              </div>
            </div>
            <MessageSquare size={20} className="text-gray-600 cursor-pointer" />
          </div>

          <div className="mt-5 text-gray-700 space-y-2">
            <p className="font-medium">🏍 Surjani → Shahrah e Faisal</p>
            <p>🕒 8:30 AM</p>
            <p>
              Vehicle:{" "}
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                Bike
              </span>
            </p>
            <p>💺 Seats: 1</p>
            <p className="font-semibold text-green-600">💰 200 PKR</p>
            <p className="text-sm text-gray-500">📞 0300-2868091</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/man.jpeg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Kloudxel</h3>
                <p className="text-sm text-gray-500">3 hours ago</p>
              </div>
            </div>
            <MessageSquare size={20} className="text-gray-600 cursor-pointer" />
          </div>

          <div className="mt-5 text-gray-700 space-y-2">
            <p className="font-medium">🚌 Surjani → Shahrah e Faisal</p>
            <p>🕒 8:30 AM</p>
            <p>
              Vehicle:{" "}
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">Bus</span>
            </p>
            <p>💺 Seats: 16</p>
            <p className="font-semibold text-green-600">💰 150 PKR</p>
            <p className="text-sm text-gray-500">📞 0300-2869001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routes;
