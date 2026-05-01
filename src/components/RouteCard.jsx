"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

function RouteCard() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { router } = useAppContext();
  const fetchRoutes = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/get-route`);
      if (data) {
        setRoutes(data.routes);
        console.log(data.routes);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "failed to fetch routes");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRoutes();
  }, []);

  return loading ? (
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
              <h3 className="font-semibold text-gray-800">Ashan </h3>
              <p className="text-sm text-gray-500">3 hours ago</p>
            </div>
          </div>

          <MessageSquare
            size={20}
            className="text-gray-600 cursor-pointer"
            onClick={() => router.push("/message/${12345678}")}
          />
        </div>

        {/* Content */}
        <div className="mt-5 text-gray-700 space-y-2">
          <p className="font-medium">
            🚗
            <span className="text-indigo-600">Surjani → Shahra e faisal</span>
          </p>

          <p>🕒 19:00</p>

          <p>
            Vehicle:
            <span className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">
              "Car"
            </span>
          </p>

          <p>💺 Seats:2</p>

          <p className="font-semibold text-green-600">💰 {90} PKR</p>

          <p className="text-sm text-gray-500">📞 0300-0027890</p>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Card */}
        {routes.map((content, i) => (
          <div
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            key={i}
          >
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
                  <h3 className="font-semibold text-gray-800">
                    {content.owner.username}
                  </h3>
                  <p className="text-sm text-gray-500">3 hours ago</p>
                </div>
              </div>

              <MessageSquare
                size={20}
                className="text-gray-600 cursor-pointer"
                onClick={() => router.push(`/message${content.owner._id}`)}
              />
            </div>

            {/* Content */}
            <div className="mt-5 text-gray-700 space-y-2">
              <p className="font-medium">
                🚗
                <span className="text-indigo-600">
                  {content.to} → {content.from}
                </span>
              </p>

              <p>🕒 {content.time}</p>

              <p>
                Vehicle:
                <span className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">
                  {content.vehicle || "Car"}
                </span>
              </p>

              <p>💺 Seats: {content.seats}</p>

              <p className="font-semibold text-green-600">
                💰 {content.price} PKR
              </p>

              <p className="text-sm text-gray-500">📞 {content.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RouteCard;
