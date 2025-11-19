import {
  Mail,
  Instagram,
  Linkedin,
  Scissors,
  Sparkles,
  Award,
  MapPin,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-purple-50 dark:from-gray-950 dark:via-purple-950/40 dark:to-gray-950 text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-amber-100 opacity-40 blur-3xl dark:opacity-30" />
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
          <div className="absolute -left-20 bottom-10 h-60 w-60 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-rose-500/20 blur-3xl" />
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-6 py-2 text-sm font-medium text-purple-600 shadow-lg shadow-purple-500/10 backdrop-blur dark:border-purple-900/40 dark:bg-purple-950/30 dark:text-purple-200">
            <Sparkles className="h-4 w-4" />
            <span>Professional Hairstylist</span>
          </div>
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-violet-800 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
            Prakriti Bhudwal
          </h1>
          <p className="mb-6 text-pretty text-lg font-semibold text-muted-foreground md:text-xl lg:text-2xl">
            Expert Hairstylist in Jammu | Trained at BBLUNT Mumbai
          </p>
          <div className="mb-8 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-purple-500" />
            <span className="font-medium text-foreground">
              Based in Jammu, Jammu & Kashmir
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-amber-400 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50"
            >
              <a href="mailto:prakritibhudwal@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/30"
            >
              <a
                href="https://www.instagram.com/prakritibhudwal_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                View Portfolio
              </a>
            </Button>
          </div>
          <div className="mt-12 w-full rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-purple-500/20 backdrop-blur dark:border-purple-800/60 dark:bg-purple-950/50">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="w-full text-center sm:max-w-sm sm:text-left">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Creative Philosophy
                </p>
                <p className="text-xl font-semibold text-purple-700 dark:text-purple-200">
                  Tailored transformations for every hair story.
                </p>
                <p className="py-4 text-pretty text-center leading-relaxed text-muted-foreground">
                  Passionate hairstylist based in Jammu, Jammu & Kashmir with
                  extensive experience in hair styling, cutting, and coloring.
                  Currently working at HairMasters Salon in Jammu, I bring
                  Mumbai's premium salon expertise to every client.
                </p>
              </div>
              <div className="grid w-full gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-purple-100 bg-white/80 p-4 shadow-sm shadow-purple-200 dark:border-purple-900/60 dark:bg-purple-950/60">
                  <p className="text-3xl font-bold text-purple-600">8+</p>
                  <p className="text-sm text-muted-foreground">
                    Years crafting signature looks
                  </p>
                </div>
                <div className="rounded-2xl border border-pink-100 bg-white/80 p-4 shadow-sm shadow-pink-200 dark:border-pink-900/60 dark:bg-fuchsia-950/50">
                  <p className="text-3xl font-bold text-pink-500">10+</p>
                  <p className="text-sm text-muted-foreground">
                    Professional certifications
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm shadow-amber-200 dark:border-amber-900/60 dark:bg-amber-950/40">
                  <p className="text-3xl font-bold text-amber-500">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Happy, repeat clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-purple-100 bg-white/90 p-10 shadow-2xl shadow-purple-200 dark:border-purple-900/60 dark:bg-purple-950/50">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="lg:w-1/3">
                <p className="text-sm uppercase tracking-widest text-purple-500">
                  Client Love
                </p>
                <h3 className="mt-3 text-3xl font-semibold">
                  Bespoke transformations, trusted by artists, entrepreneurs,
                  and brides-to-be.
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Every service ends with education, styling hacks, and product
                  routines tailored to your lifestyle.
                </p>
              </div>
              <div className="grid flex-1 gap-4 md:grid-cols-2">
                <Card className="border-none bg-gradient-to-br from-purple-600 via-fuchsia-500 to-rose-400 text-white shadow-xl">
                  <CardContent className="space-y-4 p-6">
                    <Star className="h-6 w-6 text-amber-300" />
                    <p className="text-lg">
                      “Prakriti is the only stylist who understood my curls and
                      gave me a shape that lasts for months.”
                    </p>
                    <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                      Naina · Curly Hair Guest
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-purple-100 bg-white/90 shadow-lg shadow-purple-100 dark:border-purple-900 dark:bg-gray-950/80">
                  <CardContent className="space-y-4 p-6">
                    <Star className="h-6 w-6 text-pink-500" />
                    <p className="text-lg text-muted-foreground">
                      “She designed a wedding-ready blonde that still looks
                      dimensional weeks later. Unreal craft.”
                    </p>
                    <p className="text-sm font-medium uppercase tracking-wide text-purple-600 dark:text-purple-300">
                      Arushi · Bridal Colour Client
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="px-4 py-10 md:py-16 bg-gradient-to-b from-purple-50/70 via-rose-50/40 to-transparent dark:from-purple-950/30 dark:via-rose-950/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Expertise & Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none bg-white/80 shadow-lg shadow-purple-200 dark:bg-gray-950/60 dark:shadow-purple-900/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg shadow-purple-500/30">
                  <Scissors className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-purple-700 dark:text-purple-200">
                  Hair Styling & Cutting
                </h3>
                <p className="text-pretty text-muted-foreground">
                  Expert precision cuts and contemporary styling techniques for
                  all hair types. Specializing in bobs and curly hair.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/80 shadow-lg shadow-pink-200 dark:bg-gray-950/60 dark:shadow-pink-900/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 p-4 shadow-lg shadow-pink-500/30">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-pink-600 dark:text-pink-200">
                  Hair Coloring & Crazy Colours
                </h3>
                <p className="text-pretty text-muted-foreground">
                  Certified in Wella Illumina, Koleston Perfect, Color Touch &
                  L'Oréal color systems. Expert in bold, vibrant colours.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white/80 shadow-lg shadow-fuchsia-200 dark:bg-gray-950/60 dark:shadow-fuchsia-900/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 p-4 shadow-lg shadow-fuchsia-500/30">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-fuchsia-600 dark:text-fuchsia-200">
                  Hair Treatment & Care
                </h3>
                <p className="text-pretty text-muted-foreground">
                  Advanced hair care treatments with premium products from
                  Davines, L'Oréal Professional, and Wella
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-6">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Image
                      src="/logos/hairmasters.png"
                      alt="HairMasters Salon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Hairstylist</h3>
                    <p className="text-muted-foreground">HairMasters Salon</p>
                    <p className="text-sm text-muted-foreground">
                      Nov 2025 – Present | Jammu, J&K
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-pink-200 dark:border-pink-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Image
                      src="/logos/geetanjali.png"
                      alt="Geetanjali Salon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      Salon Manager & Hairstylist
                    </h3>
                    <p className="text-muted-foreground">Geetanjali Salon</p>
                    <p className="text-sm text-muted-foreground">
                      Oct 2020 – Sep 2025 | Jammu, J&K
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Image
                      src="/logos/bblunt.png"
                      alt="BBLUNT"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      Stylist & Junior Stylist
                    </h3>
                    <p className="font-semibold text-purple-700 dark:text-purple-300">
                      BBLUNT Khar, Mumbai
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Nov 2017 – Jun 2020 | Mumbai, Maharashtra
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Trained and worked at one of India's most prestigious hair
                      salons, gaining expertise in cutting-edge styling
                      techniques and premium hair care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-transparent to-purple-50/80 dark:to-purple-950/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>

          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-purple-700 dark:text-purple-300">
              Professional Education
            </h3>
            <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <Image
                      src="/logos/bblunt.png"
                      alt="BBLUNT"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-purple-700 dark:text-purple-300">
                      BBLUNT Mumbai
                    </p>
                    <p className="font-semibold">
                      Foundation Course in Hair Styling / Hair Design
                    </p>
                    <p className="text-sm text-muted-foreground">Year: 2017</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Completed comprehensive foundation training at India's
                      premier hair academy, learning cutting-edge techniques and
                      industry best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-purple-700 dark:text-purple-300">
              Professional Certifications
            </h3>
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/davines.png"
                        alt="Davines"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">
                        Haircare, Styling, Advance Hair Care
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Davines Group (Mar 2019)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/wella.jpg"
                        alt="Wella"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Color Touch & Magma</p>
                      <p className="text-sm text-muted-foreground">
                        Wella (Oct 2018)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/wella.jpg"
                        alt="Wella"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Illumina</p>
                      <p className="text-sm text-muted-foreground">
                        Wella (Oct 2018)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/wella.jpg"
                        alt="Wella"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">
                        Koleston Perfect and Blondor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Wella (Oct 2018)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/loreal.png"
                        alt="L'Oréal"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Hair Texture</p>
                      <p className="text-sm text-muted-foreground">
                        L'Oréal (Aug 2017)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/loreal.png"
                        alt="L'Oréal"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Color Keys</p>
                      <p className="text-sm text-muted-foreground">
                        L'Oréal (Jul 2017)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/loreal.png"
                        alt="L'Oréal"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Hair Care and Treatment</p>
                      <p className="text-sm text-muted-foreground">
                        L'Oréal (Jun 2017)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                      <Image
                        src="/logos/headmasters.png"
                        alt="Headmasters Salon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Photographic Makeup</p>
                      <p className="text-sm text-muted-foreground">
                        Headmasters Salon (Apr 2016)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-white via-purple-50 to-rose-50 p-10 shadow-2xl shadow-purple-200 dark:border-purple-900/60 dark:bg-gradient-to-br dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground">
              Ready to transform your look? Contact me for appointments and
              consultations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-300 bg-white/60 hover:bg-purple-50 dark:border-purple-700 dark:bg-transparent dark:hover:bg-purple-950/30"
              >
                <a href="mailto:prakritibhudwal@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  prakritibhudwal@gmail.com
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-pink-300 hover:bg-pink-50 dark:border-pink-700 dark:hover:bg-pink-950/30"
              >
                <a
                  href="https://www.linkedin.com/in/prakriti-bhudwal-469458140"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-fuchsia-300 hover:bg-fuchsia-50 dark:border-fuchsia-700 dark:hover:bg-fuchsia-950/30"
              >
                <a
                  href="https://www.instagram.com/prakritibhudwal_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Available for private bookings, destination events, editorial
              shoots, and bespoke education.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Prakriti Bhudwal. Professional
            Hairstylist in Jammu, Jammu & Kashmir, India.
          </p>
          <p className="mt-2">
            Specializing in Hair Styling, Hair Cutting, Hair Coloring, Bobs,
            Curly Hair & Crazy Colours.
          </p>
          <p className="mt-1 text-xs">
            Trained at BBLUNT Mumbai | Bringing Premium Salon Expertise to Jammu
          </p>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Prakriti Bhudwal',
            jobTitle: 'Hairstylist',
            description:
              'Professional hairstylist specializing in hair styling, cutting, coloring, bobs, curly hair, and crazy colours. Trained at BBLUNT Mumbai.',
            url: typeof window !== 'undefined' ? window.location.href : '',
            email: 'prakritibhudwal@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jammu',
              addressRegion: 'Jammu & Kashmir',
              addressCountry: 'India',
            },
            sameAs: [
              'https://www.linkedin.com/in/prakriti-bhudwal-469458140',
              'https://www.instagram.com/prakritibhudwal_/',
            ],
            knowsAbout: [
              'Hair Styling',
              'Hair Cutting',
              'Hair Coloring',
              'Bobs',
              'Curly Hair',
              'Crazy Colours',
              'Hair Care',
              'Hair Treatment',
            ],
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'BBLUNT Mumbai',
            },
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'certificate',
                name: 'Haircare, Styling, Advance Hair Care',
                recognizedBy: {
                  '@type': 'Organization',
                  name: 'Davines Group',
                },
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'certificate',
                name: 'Color Touch & Magma',
                recognizedBy: {
                  '@type': 'Organization',
                  name: 'Wella',
                },
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'certificate',
                name: 'Illumina',
                recognizedBy: {
                  '@type': 'Organization',
                  name: 'Wella',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
