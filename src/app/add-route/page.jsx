"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Users,
  DollarSign,
  ArrowRight,
  Phone,
  Car,
} from "lucide-react";

export default function RideForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 px-6">
      <div className="grid md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden border">
        {/* LEFT SIDE */}

        <div className="relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="carpool"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white p-10 text-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Share Your Ride</h2>

              <p className="text-sm opacity-90">
                Save fuel, reduce traffic and travel smarter by sharing your
                ride with others.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create Ride
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {/* FROM */}

            <div className="col-span-2">
              <label className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                <MapPin size={16} /> From
              </label>

              <input
                {...register("from")}
                placeholder="Surjani Town"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* TO */}

            <div className="col-span-2">
              <label className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                <ArrowRight size={16} /> To
              </label>

              <input
                {...register("to")}
                placeholder="Shahrah e Faisal"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* TIME */}

            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                <Clock size={16} /> Time
              </label>

              <input
                type="time"
                {...register("time")}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* SEATS */}

            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                <Users size={16} /> Seats
              </label>

              <input
                type="number"
                {...register("seats")}
                placeholder="3"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* PRICE */}

            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                <DollarSign size={16} /> Price
              </label>

              <input
                type="number"
                {...register("price")}
                placeholder="200"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* PHONE */}

            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                <Phone size={16} /> Phone
              </label>

              <input
                type="tel"
                {...register("phone")}
                placeholder="0300-1234567"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* BUTTON */}

            <div className="col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition"
              >
                Post Ride
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
