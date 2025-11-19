import { Mail, Instagram, Linkedin, Scissors, Sparkles, Award, Briefcase, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-fuchsia-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-2 text-sm text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            <Sparkles className="h-4 w-4" />
            <span>Professional Hairstylist</span>
          </div>
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
            Prakriti Bhudwal
          </h1>
          <p className="mb-4 text-pretty text-lg text-foreground md:text-xl lg:text-2xl font-semibold">
            Expert Hairstylist in Jammu | Trained at BBLUNT Mumbai
          </p>
          <p className="mb-4 text-pretty text-base text-muted-foreground md:text-lg">
            Specializing in Bobs, Curly Hair & Crazy Colours
          </p>
          <div className="mb-8 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-purple-600" />
            <span>Based in Jammu, Jammu & Kashmir</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a href="mailto:prakritibhudwal@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/30">
              <a href="https://www.instagram.com/prakritibhudwal_/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                View Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About</h2>
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 md:p-8">
              <p className="text-pretty text-center text-lg leading-relaxed text-muted-foreground">
                Passionate hairstylist based in Jammu, Jammu & Kashmir with extensive experience in hair styling, cutting, and coloring. 
                Currently working at Headmasters Salon in Jammu, I bring Mumbai's premium salon expertise to every client. 
                With special expertise in bobs, curly hair, and crazy colours, along with certifications from industry leaders like Wella, L'Oréal, and Davines, I strive to deliver exceptional results and stay at the forefront of beauty trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise & Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-950 dark:to-purple-950/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4">
                  <Scissors className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Hair Styling & Cutting</h3>
                <p className="text-pretty text-muted-foreground">
                  Expert precision cuts and contemporary styling techniques for all hair types. Specializing in bobs and curly hair.
                </p>
              </CardContent>
            </Card>
            <Card className="border-pink-200 dark:border-pink-800 bg-gradient-to-br from-white to-pink-50/50 dark:from-gray-950 dark:to-pink-950/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 p-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Hair Coloring & Crazy Colours</h3>
                <p className="text-pretty text-muted-foreground">
                  Certified in Wella Illumina, Koleston Perfect, Color Touch & L'Oréal color systems. Expert in bold, vibrant colours.
                </p>
              </CardContent>
            </Card>
            <Card className="border-fuchsia-200 dark:border-fuchsia-800 bg-gradient-to-br from-white to-fuchsia-50/50 dark:from-gray-950 dark:to-fuchsia-950/20">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 p-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Hair Treatment & Care</h3>
                <p className="text-pretty text-muted-foreground">
                  Advanced hair care treatments with premium products from Davines, L'Oréal Professional, and Wella
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Experience</h2>
          <div className="space-y-6">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Hairstylist</h3>
                    <p className="text-muted-foreground">Headmasters Salon</p>
                    <p className="text-sm text-muted-foreground">Nov 2025 – Present | Jammu, J&K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-pink-200 dark:border-pink-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-pink-500 to-fuchsia-500 p-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Salon Manager & Hairstylist</h3>
                    <p className="text-muted-foreground">Geetanjali Salon</p>
                    <p className="text-sm text-muted-foreground">Oct 2020 – Sep 2025 | Jammu, J&K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Stylist & Junior Stylist</h3>
                    <p className="font-semibold text-purple-700 dark:text-purple-300">BBLUNT Khar, Mumbai</p>
                    <p className="text-sm text-muted-foreground">Nov 2017 – Jun 2020 | Mumbai, Maharashtra</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Trained and worked at one of India's most prestigious hair salons, gaining expertise in cutting-edge styling techniques and premium hair care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education & Certifications</h2>
          
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-purple-700 dark:text-purple-300">Professional Education</h3>
            <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-purple-700 dark:text-purple-300">BBLUNT Mumbai</p>
                    <p className="font-semibold">Foundation Course in Hair Styling / Hair Design</p>
                    <p className="text-sm text-muted-foreground">Year: 2017</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Completed comprehensive foundation training at India's premier hair academy, learning cutting-edge techniques and industry best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-purple-700 dark:text-purple-300">Professional Certifications</h3>
            <Card className="border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <div>
                      <p className="font-semibold">Haircare, Styling, Advance Hair Care</p>
                      <p className="text-sm text-muted-foreground">Davines Group (Mar 2019)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-pink-600" />
                    <div>
                      <p className="font-semibold">Color Touch & Magma</p>
                      <p className="text-sm text-muted-foreground">Wella (Oct 2018)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-fuchsia-600" />
                    <div>
                      <p className="font-semibold">Illumina</p>
                      <p className="text-sm text-muted-foreground">Wella (Oct 2018)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <div>
                      <p className="font-semibold">Koleston Perfect and Blondor</p>
                      <p className="text-sm text-muted-foreground">Wella (Oct 2018)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-pink-600" />
                    <div>
                      <p className="font-semibold">Hair Texture</p>
                      <p className="text-sm text-muted-foreground">L'Oréal (Aug 2017)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-fuchsia-600" />
                    <div>
                      <p className="font-semibold">Color Keys</p>
                      <p className="text-sm text-muted-foreground">L'Oréal (Jul 2017)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <div>
                      <p className="font-semibold">Hair Care and Treatment</p>
                      <p className="text-sm text-muted-foreground">L'Oréal (Jun 2017)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-pink-600" />
                    <div>
                      <p className="font-semibold">Photographic Makeup</p>
                      <p className="text-sm text-muted-foreground">Headmasters Salon (Apr 2016)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-fuchsia-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Get in Touch</h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">
            Ready to transform your look? Contact me for appointments and consultations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-purple-300 hover:bg-purple-50 dark:border-purple-700 dark:hover:bg-purple-950/30">
              <a href="mailto:prakritibhudwal@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                prakritibhudwal@gmail.com
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-pink-300 hover:bg-pink-50 dark:border-pink-700 dark:hover:bg-pink-950/30">
              <a href="https://www.linkedin.com/in/prakriti-bhudwal-469458140" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-fuchsia-300 hover:bg-fuchsia-50 dark:border-fuchsia-700 dark:hover:bg-fuchsia-950/30">
              <a href="https://www.instagram.com/prakritibhudwal_/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prakriti Bhudwal. Professional Hairstylist in Jammu, Jammu & Kashmir, India.</p>
          <p className="mt-2">Specializing in Hair Styling, Hair Cutting, Hair Coloring, Bobs, Curly Hair & Crazy Colours.</p>
          <p className="mt-1 text-xs">Trained at BBLUNT Mumbai | Bringing Premium Salon Expertise to Jammu</p>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Prakriti Bhudwal",
            "jobTitle": "Hairstylist",
            "description": "Professional hairstylist specializing in hair styling, cutting, coloring, bobs, curly hair, and crazy colours. Trained at BBLUNT Mumbai.",
            "url": typeof window !== 'undefined' ? window.location.href : '',
            "email": "prakritibhudwal@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jammu",
              "addressRegion": "Jammu & Kashmir",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://www.linkedin.com/in/prakriti-bhudwal-469458140",
              "https://www.instagram.com/prakritibhudwal_/"
            ],
            "knowsAbout": [
              "Hair Styling",
              "Hair Cutting",
              "Hair Coloring",
              "Bobs",
              "Curly Hair",
              "Crazy Colours",
              "Hair Care",
              "Hair Treatment"
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "BBLUNT Mumbai"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certificate",
                "name": "Haircare, Styling, Advance Hair Care",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Davines Group"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certificate",
                "name": "Color Touch & Magma",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Wella"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certificate",
                "name": "Illumina",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Wella"
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}
