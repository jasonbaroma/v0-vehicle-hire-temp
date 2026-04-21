import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold tracking-tight">
                Your Journey Starts Here
              </h1>
              <p className="text-xl text-blue-100">
                Book your perfect vehicle for any adventure. Affordable rates, premium service, and 24/7 support.
              </p>
              <Button size="lg" className="w-fit bg-white text-blue-600 hover:bg-gray-100">
                Book Now
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="h-80 rounded-lg bg-blue-900/40 flex items-center justify-center">
                <span className="text-blue-300">Vehicle Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Find Your Perfect Rental</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Pick-up Location</label>
                <Input placeholder="City or airport" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Pick-up Date</label>
                <Input type="date" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Return Date</label>
                <Input type="date" />
              </div>
              <div className="flex items-end">
                <Button className="w-full">Search</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Featured Vehicles</h2>
            <p className="text-lg text-muted-foreground">
              Explore our diverse fleet of well-maintained vehicles
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Economy", price: "$25/day", badge: "Popular" },
              { name: "SUV", price: "$55/day", badge: "Family" },
              { name: "Luxury", price: "$95/day", badge: "Premium" },
            ].map((vehicle) => (
              <Card key={vehicle.name} className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">{vehicle.name} Image</span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{vehicle.name}</h3>
                    <Badge variant="secondary">{vehicle.badge}</Badge>
                  </div>
                  <p className="mb-4 text-lg font-semibold text-blue-600">
                    {vehicle.price}
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    <li>✓ Unlimited Mileage</li>
                    <li>✓ Free Cancellation</li>
                    <li>✓ Insurance Included</li>
                  </ul>
                  <Button className="w-full">Book Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Why Choose Us</h2>
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
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Book Your Vehicle
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 px-6 py-12 text-gray-400">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-bold text-white">DriveNow</h4>
              <p className="text-sm">Your trusted vehicle rental partner</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 DriveNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}