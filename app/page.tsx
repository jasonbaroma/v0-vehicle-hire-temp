import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { companyName, companyTagline } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import {
  Clock3,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a href="#" className="text-2xl font-bold tracking-tight">
            {companyName}
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <Button className="bg-white text-blue-700 hover:bg-blue-50" asChild>
              <a href={phoneHref}>Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold tracking-tight">
                Your Journey Starts Here
              </h1>
              <p className="text-xl text-blue-100">
                Book your perfect vehicle for any adventure. Affordable rates,
                premium service, and 24/7 support.
              </p>
              <Button
                size="lg"
                className="w-fit bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <a href={phoneHref}>Book Now</a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="flex h-80 items-center justify-center rounded-lg bg-blue-900/40">
                <span className="text-blue-300">Vehicle Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-sky-100 shadow-[0_24px_60px_-24px_rgba(37,99,235,0.45)]">
            <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 backdrop-blur">
                  <PhoneCall className="h-4 w-4" />
                  Direct Booking Support
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  Need a vehicle fast? Call our team and we&apos;ll reserve it
                  for you.
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Get instant availability, tailored packages, and same-day
                  booking assistance from a real rental specialist.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    Priority phone assistance
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-blue-600" />
                    Available 24/7
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full bg-slate-950 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-700 md:w-auto"
                asChild
              >
                <a href={phoneHref}>Call Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Trusted by Drivers Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              Rent with confidence thanks to transparent pricing, dependable
              support, and thousands of happy customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Verified, well-maintained vehicles",
                description:
                  "Every vehicle is routinely inspected, cleaned, and prepared before pickup so you can book with peace of mind.",
                stat: "500+ vehicles checked monthly",
                icon: ShieldCheck,
              },
              {
                title: "4.9/5 average customer rating",
                description:
                  "Travelers choose us for reliable service, flexible booking, and a smooth rental experience from start to finish.",
                stat: "Rated by 2,000+ recent renters",
                icon: Star,
              },
              {
                title: "Support from real rental specialists",
                description:
                  "Need help fast? Our team is available around the clock for booking updates, changes, and urgent assistance.",
                stat: "24/7 phone and roadside support",
                icon: Users,
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700">
                  <item.icon className="h-7 w-7" />
                </div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Why customers trust us
                </p>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mb-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item.stat}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Travel with confidence
            </p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              {companyName} helps you get on the road faster, safer, and with
              less hassle.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              From city trips to long-distance journeys, our team focuses on a
              smooth rental experience from first call to final return. You get
              clear pricing, dependable support, and vehicles prepared for real
              travel needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-500"
                asChild
              >
                <a href={phoneHref}>Call {phoneDisplay}</a>
              </Button>
              <div className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-200">
                Fast booking confirmation and friendly support
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                value: "10 min",
                label: "Average booking response time",
              },
              {
                value: "24/7",
                label: "Phone support for urgent requests",
              },
              {
                value: "Simple",
                label: "Pickup and return process",
              },
              {
                value: "Clear",
                label: "Pricing with no surprise fees",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Content Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            UK Vehicle Hire
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Reliable vehicle hire across the UK for business, leisure, and
            everyday travel.
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Whether you need a car for city driving in London, a practical
              vehicle for family travel in Manchester, or a comfortable option
              for long-distance trips across the UK, {companyName} makes the
              booking process simple. We focus on clear communication, flexible
              service, and dependable support from enquiry to return.
            </p>
            <p>
              Our UK rental service is designed for customers who want a smooth
              experience without unnecessary delays or confusing pricing. With
              responsive phone support, well-prepared vehicles, and easy
              booking assistance, we help drivers find the right option for
              airport pickups, weekend getaways, and day-to-day transport.
            </p>
            <p>
              We regularly support travel needs in major UK areas including
              London, Birmingham, Manchester, Liverpool, Leeds, Bristol, and
              surrounding regions. Whether you are arranging a short-term hire
              for local errands or planning longer travel between cities, our
              team can help match you with a vehicle that fits your route,
              passenger needs, and schedule.
            </p>
            <p>
              Customers across the UK choose {companyName} for straightforward
              booking support, practical vehicle options, and responsive help
              when plans change. From business travel and airport transfers to
              family outings and weekend breaks, we aim to keep vehicle hire as
              simple, flexible, and stress-free as possible.
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              "England",
              "Scotland",
              "Wales",
              "Northern Ireland",
              "London",
              "Manchester",
              "Birmingham",
              "Liverpool",
              "Leeds",
              "Bristol",
              "Glasgow",
              "Edinburgh",
              "Sheffield",
              "Newcastle",
              "Nottingham",
              "Leicester",
              "Coventry",
              "Cardiff",
              "Belfast",
              "Southampton",
              "Portsmouth",
              "Reading",
              "Milton Keynes",
              "Oxford",
              "Cambridge",
              "York",
            ].map((city) => (
              <div
                key={city}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="benefits" className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Best Prices",
                description: "Competitive rates with no hidden fees",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer service team",
              },
              {
                title: "Wide Selection",
                description: "Choose from 500+ vehicles worldwide",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                  <div className="h-8 w-8 rounded-full bg-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">Ready to Rent?</h2>
          <p className="mb-8 text-lg text-blue-100">
            Book your vehicle today and start your adventure tomorrow
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            asChild
          >
            <a href={phoneHref}>Book Your Vehicle</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t bg-gray-900 px-6 py-12 text-gray-400"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-bold text-white">{companyName}</h4>
              <p className="text-sm">{companyTagline}</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 {companyName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
