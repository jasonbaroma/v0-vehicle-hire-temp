import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { companyName, companyTagline } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import {
  BadgePoundSterling,
  CheckCircle2,
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
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 shadow-lg shadow-black/10 ring-1 ring-white/20 backdrop-blur">
              <span className="text-lg font-black leading-none text-white">
                {companyName.charAt(0)}
              </span>
            </span>
            <span>{companyName}</span>
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-blue-600" />
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
                className="w-full rounded-full bg-blue-600 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 md:w-auto"
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
            <div className="flex flex-wrap justify-center gap-3 pt-2">
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
            <div className="pt-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Popular UK destinations best reached by car
              </h2>
              <p className="mt-4">
                Driving gives you the freedom to explore some of the UK&apos;s
                most popular destinations at your own pace. A rental vehicle is
                especially useful when your plans include rural areas, scenic
                routes, smaller towns, or multiple stops that are harder to
                reach comfortably by rail alone.
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    Countryside escapes and scenic drives
                  </h3>
                  <p className="mt-2">
                    Some of the UK&apos;s most memorable trips are best enjoyed
                    by road. The Cotswolds, Lake District, Peak District, and
                    Yorkshire Dales all offer routes where driving makes it
                    easier to visit villages, viewpoints, walking areas, and
                    local attractions on your own schedule. In Scotland,
                    exploring the Highlands by car gives you more freedom to
                    stop for lochs, mountain scenery, and overnight stays in
                    places that are less convenient to access by public
                    transport.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    Coastal trips and weekend breaks
                  </h3>
                  <p className="mt-2">
                    Driving is also a practical way to reach many of the UK&apos;s
                    popular coastal destinations. Cornwall, Devon, North Wales,
                    and parts of the South Coast are much easier to enjoy when
                    you have the flexibility to carry luggage, beach gear, or
                    travel with family. A hired vehicle makes weekend breaks
                    more comfortable and allows you to move easily between
                    seaside towns, countryside stops, and nearby attractions.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    City-to-city travel with more flexibility
                  </h3>
                  <p className="mt-2">
                    For travellers planning city breaks or multi-stop journeys,
                    driving can offer a more direct and flexible experience.
                    Destinations such as Bath, York, Edinburgh, Cardiff,
                    Birmingham, and Manchester are all popular choices for
                    short stays, business travel, and extended touring. Having
                    your own vehicle makes it easier to travel between cities,
                    adjust plans if needed, and include stops that would
                    otherwise be missed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="benefits"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A smoother vehicle hire experience from first call to final drop-off
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on practical support, transparent pricing, and dependable service so your booking feels simple from start to finish.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BadgePoundSterling,
                title: "Best Prices",
                description:
                  "Competitive rates with transparent pricing, clear terms, and no surprise add-ons at checkout.",
                detail: "Clear quotes before you book",
              },
              {
                icon: Clock3,
                title: "24/7 Support",
                description:
                  "Round-the-clock assistance for urgent questions, booking changes, and same-day vehicle requests.",
                detail: "Real help whenever plans change",
              },
              {
                icon: CheckCircle2,
                title: "Wide Selection",
                description:
                  "Choose from practical daily drivers, family-friendly vehicles, and flexible options for UK travel.",
                detail: "Vehicles matched to real travel needs",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(37,99,235,0.35)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Frequently Asked Questions
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Answers to common vehicle hire questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Here are some of the things customers often ask before booking
              with {companyName}.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm"
          >
            {[
              {
                question: "How do I book a vehicle?",
                answer:
                  "You can book by calling our team directly. We will help you check availability, confirm your travel dates, and match you with a suitable vehicle.",
              },
              {
                question: "Can I arrange same-day vehicle hire?",
                answer:
                  "Yes, same-day bookings may be available depending on location and vehicle type. Calling us is the fastest way to check current availability.",
              },
              {
                question: "Do you offer support if my plans change?",
                answer:
                  "Yes, our team can assist with booking updates, schedule changes, and other questions before and during your hire period.",
              },
              {
                question: "Do you cover locations across the UK?",
                answer:
                  "Yes, we support customers across England, Scotland, Wales, and Northern Ireland, including major cities and surrounding areas.",
              },
              {
                question: "Is pricing explained clearly before I book?",
                answer:
                  "Yes, we focus on transparent pricing and clear communication so you understand your quote before confirming your booking.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-slate-200"
              >
                <AccordionTrigger className="py-6 text-lg font-semibold text-slate-950 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shadow-lg shadow-black/10 ring-1 ring-white/10">
              <span className="text-lg font-black leading-none text-white">
                {companyName.charAt(0)}
              </span>
            </span>
            <h4 className="text-2xl font-bold text-white">{companyName}</h4>
          </div>
          <p className="mt-4 max-w-md text-sm">{companyTagline}</p>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 {companyName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
