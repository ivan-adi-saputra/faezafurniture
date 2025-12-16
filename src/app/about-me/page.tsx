"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ExternalLink,
  Heart,
  Lightbulb,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";
import { NextPage } from "next";

interface Props {}

const companyGoals = [
  {
    icon: (
      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
        <Lightbulb className="w-6 h-6 text-emerald-600" />
      </div>
    ),
    title: "Visi Kami",
    description:
      "Menjadi destinasi furniture online terdepan yang memberdayakan setiap individu untuk menciptakan rumah impian mereka dengan desain luar biasa yang menginspirasi dan meningkatkan kualitas hidup sehari-hari.",
  },
  {
    icon: (
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Heart className="w-6 h-6 text-blue-600" />
      </div>
    ),
    title: "Misi Kami",
    description:
      "Menyediakan furniture berkualitas premium dengan harga terjangkau, memadukan desain inovatif dengan keahlian pengerjaan yang luar biasa, sehingga interior indah dapat diakses oleh semua orang.",
  },
];

const companyStories = [
  "Pada tahun 2013, Faeza Furniture lahir dari keyakinan sederhana namun kuat: setiap orang berhak memiliki rumah indah yang mencerminkan kepribadian dan gaya hidup mereka, tanpa harus menguras dompet. Apa yang dimulai sebagai visi penuh semangat untuk menjembatani kesenjangan antara furniture berkualitas dan harga yang terjangkau, kini telah berkembang menjadi destinasi online yang sukses untuk perlengkapan rumah modern.",
  "Kami menyadari bahwa terlalu banyak orang terpaksa memilih antara estetika dan anggaran mereka. Realisasi ini menjadi kekuatan pendorong kami. Kami bertekad untuk menyusun koleksi yang menantang kompromi tersebut, mencari dan merancang furniture yang mewujudkan gaya sekaligus nilai jual.",
  "Dari awal kami yang sederhana hingga toko digital kami saat ini, kami tetap berkomitmen pada prinsip pendirian kami: kualitas luar biasa, desain inovatif, dan harga yang membuat kehidupan indah dapat diakses. Setiap produk dalam koleksi kami dipilih atau dirancang dengan cermat, dengan mempertimbangkan pemilik rumah modern—mereka yang menghargai perpaduan bentuk, fungsi, dan keterjangkauan.",
  "Saat ini, Faeza Furniture melayani ribuan pelanggan yang puas yang memercayai kami untuk membantu mereka menciptakan ruang yang mereka cintai. Perjalanan kami terus berlanjut seiring kami mengeksplorasi desain baru, menerapkan praktik berkelanjutan, dan berinovasi untuk memenuhi kebutuhan gaya hidup kontemporer yang terus berkembang.",
];

const coreValues = [
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
        <Lightbulb className="w-8 h-8 text-emerald-600" />
      </div>
    ),
    title: "Desain Inovatif",
    description:
      "Kami selalu terdepan dalam tren, menawarkan desain segar dan kontemporer yang mengubah ruangan dan menginspirasi kehidupan.",
  },
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
        <Shield className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Kualitas Premium",
    description:
      "Setiap produk memenuhi standar ketat kami untuk daya tahan, keahlian pengerjaan, dan material yang bertahan lama.",
  },
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
        <Heart className="w-8 h-8 text-rose-600" />
      </div>
    ),
    title: "Layanan Tulus",
    description:
      "Kepuasan Anda adalah prioritas kami. Kami berdedikasi untuk memberikan perhatian dan dukungan yang tulus di setiap langkah.",
  },
  {
    icon: (
      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">💰</span>
      </div>
    ),
    title: "Keunggulan Terjangkau",
    description:
      "Furniture indah seharusnya bukan kemewahan. Kami menjadikan kualitas dapat diakses tanpa mengorbankan desain.",
  },
];

const AboutMe: NextPage<Props> = ({}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50/30 to-emerald-50/20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Hadirkan Keindahan dalam Ruang, <br />
              <span className="text-emerald-600">
                Wujudkan Rumah Impian Anda
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Tempat kualitas berpadu dengan harga terbaik, mengubah setiap
              sudut rumah menjadi tempat ternyaman.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kisah Kami
              </h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {companyStories.map((story, index) => (
                <p key={index} className="text-lg text-start">
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
              Kenali Tim Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Individu-individu bersemangat di balik kesuksesan Faeza Furniture
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="aspect-square rounded-2xl bg-linear-to-br from-emerald-100 to-blue-100 flex items-center justify-center shadow-lg">
                  <Users className="w-32 h-32 text-emerald-600/30" />
                </div>
              </div>
              <div className="order-2">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Haviesta Efendi
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    Founder & Creative Director
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Fendi membawa keahlian lebih dari satu dekade dalam desain
                  furniture dan industri dekorasi rumah. Dengan mata yang tajam
                  terhadap inovasi estetika dan pemahaman mendalam tentang apa
                  yang membuat sebuah rumah terasa seperti rumah, ia membangun
                  Faeza Furniture di atas pilar keahlian pengerjaan berkualitas
                  dan nilai-nilai yang berpusat pada pelanggan. Komitmennya yang
                  teguh terhadap kepuasan pelanggan mendorong setiap keputusan
                  desain, memastikan bahwa setiap produk tidak hanya memenuhi
                  tetapi juga melampaui harapan. Visi Haviesta terus membentuk
                  evolusi merek, selalu menempatkan pengalaman pelanggan sebagai
                  inti dari semua yang kami lakukan.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Ivan Adi Saputra
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Lead Web Developer
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ivan adalah otak di balik teknologi yang menciptakan
                  pengalaman digital Faeza Furniture yang mulus. Dengan keahlian
                  luas dalam pengembangan web dan solusi e-commerce, ia
                  memastikan bahwa setiap interaksi pelanggan di platform kami
                  berjalan lancar, aman, dan intuitif.
                  {/* Pendekatan inovatifnya
                  terhadap teknologi sangat berperan dalam menciptakan
                  pengalaman berbelanja yang sama anggunnya dengan produk
                  furniture kami.  */}
                  Pengetahuan mendalam Ivan tentang industri teknologi dan
                  komitmennya untuk tetap terdepan dalam tren digital menjamin
                  bahwa platform kami tetap mutakhir, efisien, dan ramah
                  pengguna.
                  {/* , menjadikan belanja furniture menyenangkan
                  mulai dari menjelajah hingga *checkout* */}
                </p>
                <Card className="border-2 mt-4 border-blue-200 bg-blue-50/50">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      Perlu Website Bisnis?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Ubah bisnis Anda dengan website profesional dan modern.
                      Ivan menawarkan layanan pengembangan web kustom yang
                      disesuaikan dengan kebutuhan bisnis Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Hubungi via WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center gap-2 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Lihat Portofolio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-100 to-slate-100 flex items-center justify-center shadow-lg">
                  <Users className="w-32 h-32 text-blue-600/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu segala yang kami lakukan di Faeza
              Furniture
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
      {/* <section className="py-20 bg-linear-to-br from-slate-900 to-blue-900 text-white">
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
      </section> */}
    </>
  );
};

export default AboutMe;
