"use client";

import { programOverviews } from "@/app/data/students";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Play } from "lucide-react";

export default function ProgramOverview() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative rounded-2xl bg-gradient-to-r from-[#0B0A0A] to-[#E61A1A] text-white p-10 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold">
          Cloud Engineering Program
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-200">
          Master cloud technologies, build scalable systems, and launch your
          career in the future of tech.
        </p>
        <Button
          size="lg"
          className="mt-6 bg-white text-[#E61A1A] hover:bg-gray-100 font-semibold"
        >
          Apply Now
        </Button>
      </section>

      {/* Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Program Details */}
        <div>
          <h2 className="text-2xl font-bold text-[#0B0A0A]">
            Program Overview
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            This program equips you with in-demand cloud skills including AWS,
            Azure, Docker, and Kubernetes. You’ll work on real-world projects
            and graduate ready for careers as a Cloud Engineer, DevOps Engineer,
            or Solutions Architect.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800 font-medium">
            {programOverviews.map((overview, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>{overview}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Preview */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-video relative bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Program Intro"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play className="h-12 w-12 text-white opacity-80" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Application CTA */}
      <section className="p-8 border-2 border-[#E61A1A] rounded-2xl bg-white shadow-md text-center">
        <h3 className="text-xl font-semibold text-[#0B0A0A]">
          Ready to Join the Future?
        </h3>
        <p className="mt-2 text-gray-600">
          Kickstart your career with Cloud School today.
        </p>
        <Button
          size="lg"
          className="mt-4 bg-[#E61A1A] text-white hover:bg-red-700"
        >
          Start Application
        </Button>
      </section>
    </div>
  );
}
