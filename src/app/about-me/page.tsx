"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Lightbulb, Shield, Users } from "lucide-react";
import { NextPage } from "next";

interface Props {}

const companyGoals = [
  {
    icon: (
      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
        <Lightbulb className="w-6 h-6 text-emerald-600" />
      </div>
    ),
    title: "Our Vision",
    description:
      "To become the leading online furniture destination that empowers every individual to create their dream home with exceptional designs that inspire and elevate everyday living.",
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Heart className="w-6 h-6 text-blue-600" />
      </div>
    ),
    title: "Our Mission",
    description:
      "To deliver premium-quality furniture at affordable prices, combining innovative design with exceptional craftsmanship, making beautiful interiors accessible to everyone.",
  },
];

const companyStories = [
  "In 2013, Faeza Furniture was born from a simple yet powerful belief: everyone deserves a beautiful home that reflects their personality and lifestyle, without breaking the bank. What started as a passionate vision to bridge the gap between quality furniture and affordability has grown into a thriving online destination for modern home furnishings.",
  "We noticed that too many people were forced to choose between aesthetic appeal and their budget. This realization became our driving force. We set out to curate a collection that would challenge this compromise, sourcing and designing furniture that embodies both style and value.",
  "From our humble beginnings to our digital storefront today, we've remained committed to our founding principles: exceptional quality, innovative design, and prices that make beautiful living accessible. Every piece in our collection is carefully selected or designed with the modern homeowner in mind—those who appreciate the fusion of form, function, and affordability.",
  "Today, Faeza Furniture serves thousands of satisfied customers who trust us to help them create spaces they love. Our journey continues as we explore new designs, embrace sustainable practices, and innovate to meet the evolving needs of contemporary living.",
];

const coreValues = [
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
        <Lightbulb className="w-8 h-8 text-emerald-600" />
      </div>
    ),
    title: "Innovative Design",
    description:
      "We stay ahead of trends, offering fresh, contemporary designs that transform spaces and inspire living.",
  },
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
        <Shield className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Premium Quality",
    description:
      "Every piece meets our rigorous standards for durability, craftsmanship, and materials that last.",
  },
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
        <Heart className="w-8 h-8 text-rose-600" />
      </div>
    ),
    title: "Sincere Service",
    description:
      "Your satisfaction is our priority. We're dedicated to providing genuine care and support at every step.",
  },
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">💰</span>
      </div>
    ),
    title: "Affordable Excellence",
    description:
      "Beautiful furniture shouldn't be a luxury. We make quality accessible without compromising on design.",
  },
];

const AboutMe: NextPage<Props> = ({}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50/30 to-emerald-50/20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Crafting Beautiful Spaces,{" "}
              <span className="text-emerald-600">One Home at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Where quality meets affordability, and design transforms living
              spaces into personal sanctuaries
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {companyGoals.map((goal, index) => (
              <Card
                key={index}
                className="border-2 hover:border-emerald-200 transition-colors"
              >
                <CardContent className="p-8">
                  {goal.icon}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {companyStories.map((story, index) => (
                <p key={index} className="text-lg text-center">
                  {story}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Faeza Furniture's success
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Haviesta Efendi
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    Founder & Creative Director
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Haviesta brings over a decade of expertise in furniture design
                  and the home decor industry. With a keen eye for aesthetic
                  innovation and a deep understanding of what makes a house feel
                  like home, she has built Faeza Furniture on the pillars of
                  quality craftsmanship and customer-centric values. Her
                  unwavering commitment to customer satisfaction drives every
                  design decision, ensuring that each piece not only meets but
                  exceeds expectations. Haviesta's vision continues to shape the
                  brand's evolution, always putting the customer experience at
                  the heart of everything we do.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square rounded-2xl bg-linear-to-br from-emerald-100 to-blue-100 flex items-center justify-center shadow-lg">
                  <Users className="w-32 h-32 text-emerald-600/30" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-100 to-slate-100 flex items-center justify-center shadow-lg">
                  <Users className="w-32 h-32 text-blue-600/30" />
                </div>
              </div>
              <div className="order-2">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Ivan Adi Saputra
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Lead Web Developer
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ivan is the tech mastermind behind Faeza Furniture's seamless
                  digital experience. With extensive expertise in web
                  development and e-commerce solutions, he ensures that every
                  customer interaction on our platform is smooth, secure, and
                  intuitive. His innovative approach to technology has been
                  instrumental in creating a shopping experience that's as
                  refined as our furniture. Ivan's deep knowledge of the tech
                  industry and commitment to staying ahead of digital trends
                  guarantee that our platform remains cutting-edge, efficient,
                  and user-friendly, making furniture shopping a pleasure from
                  browsing to checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Faeza Furniture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  {value.icon}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Explore our carefully curated collection of modern furniture
              designed to elevate your home. From living rooms to bedrooms, find
              pieces that speak to your style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
