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
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";

export default function RideForm() {
  const { register, handleSubmit, reset } = useForm();
  const { router, user } = useAppContext();

  const onSubmit = async (data) => {
    try {
      const addRoute = await axios.post(`/api/add-route`, {
        ...data,
        owner: user._id,
      });
      if (addRoute.data) {
        toast.success("Route added successfully");
        setTimeout(() => {
          router.push("/routes");
        }, 300);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Failed to add route");
    } finally {
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative h-72 md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              alt="carpool"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center px-6 text-center text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-indigo-200">
                  Share your ride
                </p>
                <h2 className="mt-4 text-3xl font-semibold">
                  Post your route and connect with riders
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Reduce traffic, share fuel costs, and make every trip
                  smoother.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-600">
                Create a ride
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                Add your route
              </h1>
              <p className="mt-3 text-slate-600">
                Complete the details below to publish your upcoming ride.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={16} /> From
                  </span>
                </label>
                <input
                  {...register("from")}
                  placeholder="Surjani Town"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <ArrowRight size={16} /> To
                  </span>
                </label>
                <input
                  {...register("to")}
                  placeholder="Shahrah e Faisal"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} /> Time
                  </span>
                </label>
                <input
                  type="time"
                  {...register("time")}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <Users size={16} /> Seats
                  </span>
                </label>
                <input
                  type="number"
                  {...register("seats")}
                  placeholder="3"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <DollarSign size={16} /> Price
                  </span>
                </label>
                <input
                  type="number"
                  {...register("price")}
                  placeholder="200"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <Phone size={16} /> Phone
                  </span>
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="0300-1234567"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="sm:col-span-2">
                <button className="w-full rounded-3xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  Post Ride
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
