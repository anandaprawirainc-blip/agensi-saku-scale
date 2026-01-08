"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, CheckCircle, MessageCircle, Phone } from 'lucide-react';

export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'id'>('id');

  const content = {
    en: {
      hero: {
        headline: "Helping UMKM scale faster with SEO, Ads, and websites that convert",
        subheadline: "Measurable growth, more leads, higher revenue. Fast execution for Indonesian businesses ready to scale.",
        primaryCTA: "Get Free Consultation",
        secondaryCTA: "Chat on WhatsApp",
        trustStrip: "Trusted by 100+ UMKM & growing brands"
      },
      services: {
        title: "Our Services",
        subtitle: "Complete digital marketing solutions for growing businesses",
        items: [
          {
            title: "SEO Optimization",
            description: "On-page, Technical, Content, Link strategy",
            deliverables: ["Keyword research", "Technical audit", "Content optimization", "Link building"],
            timeline: "3-6 months for results"
          },
          {
            title: "GEO for AI",
            description: "Optimize for AI search engines and LLMs",
            deliverables: ["Entity optimization", "FAQ schema", "Topical authority", "AI-ready content"],
            timeline: "2-4 months"
          },
          {
            title: "Google & Meta Ads",
            description: "Performance marketing that drives results",
            deliverables: ["Campaign setup", "Ad creatives", "Landing pages", "Performance reporting"],
            timeline: "1-2 weeks setup"
          },
          {
            title: "Marketplace Optimization",
            description: "Tokopedia, Shopee, and other platforms",
            deliverables: ["Listing optimization", "Promo strategy", "Creative assets", "Performance tracking"],
            timeline: "2-3 weeks"
          },
          {
            title: "Social Media Management",
            description: "Content planning and creative execution",
            deliverables: ["Content calendar", "Creative design", "Community management", "Analytics"],
            timeline: "Ongoing monthly"
          },
          {
            title: "Website Development",
            description: "Fast, converting websites and landing pages",
            deliverables: ["Responsive design", "SEO optimization", "Performance optimization", "CMS setup"],
            timeline: "2-6 weeks"
          },
          {
            title: "App Development",
            description: "Business apps and ordering systems",
            deliverables: ["Custom development", "User interface", "Backend setup", "App store deployment"],
            timeline: "6-12 weeks"
          }
        ]
      },
      results: {
        title: "Real Results for Real Businesses",
        subtitle: "Examples of growth we've delivered",
        metrics: [
          { value: "+150%", label: "Organic Traffic Growth", description: "Average increase in 6 months" },
          { value: "4.2x", label: "ROAS", description: "Return on ad spend" },
          { value: "+300", label: "Leads per Month", description: "Quality leads generated" },
          { value: "+85%", label: "Conversion Rate", description: "Website conversion improvement" },
          { value: "24h", label: "Response Time", description: "Average support response" },
          { value: "98%", label: "Client Satisfaction", description: "Based on client feedback" }
        ]
      }
    },
    id: {
      hero: {
        headline: "Bantu UMKM berkembang lebih cepat dengan SEO, Iklan, dan website yang convert",
        subheadline: "Pertumbuhan terukur, lebih banyak leads, omzet naik. Eksekusi cepat untuk bisnis Indonesia yang siap scale up.",
        primaryCTA: "Konsultasi Gratis",
        secondaryCTA: "Chat WhatsApp",
        trustStrip: "Dipercaya 100+ UMKM & brand berkembang"
      },
      services: {
        title: "Layanan Kami",
        subtitle: "Solusi digital marketing lengkap untuk bisnis berkembang",
        items: [
          {
            title: "Optimasi SEO",
            description: "On-page, Technical, Content, Link strategy",
            deliverables: ["Riset keyword", "Audit teknis", "Optimasi konten", "Link building"],
            timeline: "3-6 bulan untuk hasil"
          },
          {
            title: "GEO untuk AI",
            description: "Optimasi untuk mesin pencari AI dan LLM",
            deliverables: ["Optimasi entitas", "FAQ schema", "Topical authority", "Konten siap AI"],
            timeline: "2-4 bulan"
          },
          {
            title: "Iklan Google & Meta",
            description: "Performance marketing yang menghasilkan",
            deliverables: ["Setup kampanye", "Kreativ iklan", "Landing page", "Laporan performa"],
            timeline: "1-2 minggu setup"
          },
          {
            title: "Optimasi Marketplace",
            description: "Tokopedia, Shopee, dan platform lainnya",
            deliverables: ["Optimasi listing", "Strategi promo", "Aset kreatif", "Tracking performa"],
            timeline: "2-3 minggu"
          },
          {
            title: "Manajemen Sosial Media",
            description: "Perencanaan konten dan eksekusi kreatif",
            deliverables: ["Kalender konten", "Desain kreatif", "Community management", "Analytics"],
            timeline: "Bulanan berkelanjutan"
          },
          {
            title: "Pengembangan Website",
            description: "Website cepat dan converting",
            deliverables: ["Desain responsif", "Optimasi SEO", "Optimasi performa", "Setup CMS"],
            timeline: "2-6 minggu"
          },
          {
            title: "Pengembangan Aplikasi",
            description: "Aplikasi bisnis dan sistem pemesanan",
            deliverables: ["Pengembangan custom", "User interface", "Setup backend", "Deploy app store"],
            timeline: "6-12 minggu"
          }
        ]
      },
      results: {
        title: "Hasil Nyata untuk Bisnis Nyata",
        subtitle: "Contoh pertumbuhan yang sudah kami berikan",
        metrics: [
          { value: "+150%", label: "Pertumbuhan Traffic Organik", description: "Rata-rata kenaikan dalam 6 bulan" },
          { value: "4.2x", label: "ROAS", description: "Return on ad spend" },
          { value: "+300", label: "Leads per Bulan", description: "Leads berkualitas yang dihasilkan" },
          { value: "+85%", label: "Conversion Rate", description: "Peningkatan konversi website" },
          { value: "24j", label: "Waktu Respon", description: "Rata-rata respon support" },
          { value: "98%", label: "Kepuasan Klien", description: "Berdasarkan feedback klien" }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83b5dab9-bfbb-417a-901d-a64316cd65bd.png"
                alt="SakuScale Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Services' : 'Layanan'}
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'About' : 'Tentang'}
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Reviews' : 'Testimoni'}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Contact' : 'Kontak'}
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-1 text-sm rounded ${language === 'id' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  EN
                </button>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                {currentContent.hero.primaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {currentContent.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                {currentContent.hero.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-green-500 text-green-600 hover:bg-green-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                {currentContent.hero.secondaryCTA}
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-2">4.9/5</span>
              </div>
              <span>•</span>
              <span>{currentContent.hero.trustStrip}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54890b01-0a5e-460b-b440-b4024363a08f.png"
              alt="Google Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d00bd74a-bb6b-4ed0-9a91-0d291783ac3d.png"
              alt="Meta Business Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47a8d2ae-2e7f-4198-8428-04617dbe185c.png"
              alt="TikTok Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7bfd6e4e-c646-4dfb-bdf6-b0b34b752d2a.png"
              alt="Shopee Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">
                        {language === 'en' ? 'What you get:' : 'Yang Anda dapatkan:'}
                      </h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <Badge variant="secondary" className="text-xs">
                        {service.timeline}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Our Story & Why Choose Us */}"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, CheckCircle, MessageCircle, Phone } from 'lucide-react';

export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'id'>('id');

  const content = {
    en: {
      hero: {
        headline: "Helping UMKM scale faster with SEO, Ads, and websites that convert",
        subheadline: "Measurable growth, more leads, higher revenue. Fast execution for Indonesian businesses ready to scale.",
        primaryCTA: "Get Free Consultation",
        secondaryCTA: "Chat on WhatsApp",
        trustStrip: "Trusted by 100+ UMKM & growing brands"
      },
      services: {
        title: "Our Services",
        subtitle: "Complete digital marketing solutions for growing businesses",
        items: [
          {
            title: "SEO Optimization",
            description: "On-page, Technical, Content, Link strategy",
            deliverables: ["Keyword research", "Technical audit", "Content optimization", "Link building"],
            timeline: "3-6 months for results"
          },
          {
            title: "GEO for AI",
            description: "Optimize for AI search engines and LLMs",
            deliverables: ["Entity optimization", "FAQ schema", "Topical authority", "AI-ready content"],
            timeline: "2-4 months"
          },
          {
            title: "Google & Meta Ads",
            description: "Performance marketing that drives results",
            deliverables: ["Campaign setup", "Ad creatives", "Landing pages", "Performance reporting"],
            timeline: "1-2 weeks setup"
          },
          {
            title: "Marketplace Optimization",
            description: "Tokopedia, Shopee, and other platforms",
            deliverables: ["Listing optimization", "Promo strategy", "Creative assets", "Performance tracking"],
            timeline: "2-3 weeks"
          },
          {
            title: "Social Media Management",
            description: "Content planning and creative execution",
            deliverables: ["Content calendar", "Creative design", "Community management", "Analytics"],
            timeline: "Ongoing monthly"
          },
          {
            title: "Website Development",
            description: "Fast, converting websites and landing pages",
            deliverables: ["Responsive design", "SEO optimization", "Performance optimization", "CMS setup"],
            timeline: "2-6 weeks"
          },
          {
            title: "App Development",
            description: "Business apps and ordering systems",
            deliverables: ["Custom development", "User interface", "Backend setup", "App store deployment"],
            timeline: "6-12 weeks"
          }
        ]
      },
      results: {
        title: "Real Results for Real Businesses",
        subtitle: "Examples of growth we've delivered",
        metrics: [
          { value: "+150%", label: "Organic Traffic Growth", description: "Average increase in 6 months" },
          { value: "4.2x", label: "ROAS", description: "Return on ad spend" },
          { value: "+300", label: "Leads per Month", description: "Quality leads generated" },
          { value: "+85%", label: "Conversion Rate", description: "Website conversion improvement" },
          { value: "24h", label: "Response Time", description: "Average support response" },
          { value: "98%", label: "Client Satisfaction", description: "Based on client feedback" }
        ]
      }
    },
    id: {
      hero: {
        headline: "Bantu UMKM berkembang lebih cepat dengan SEO, Iklan, dan website yang convert",
        subheadline: "Pertumbuhan terukur, lebih banyak leads, omzet naik. Eksekusi cepat untuk bisnis Indonesia yang siap scale up.",
        primaryCTA: "Konsultasi Gratis",
        secondaryCTA: "Chat WhatsApp",
        trustStrip: "Dipercaya 100+ UMKM & brand berkembang"
      },
      services: {
        title: "Layanan Kami",
        subtitle: "Solusi digital marketing lengkap untuk bisnis berkembang",
        items: [
          {
            title: "Optimasi SEO",
            description: "On-page, Technical, Content, Link strategy",
            deliverables: ["Riset keyword", "Audit teknis", "Optimasi konten", "Link building"],
            timeline: "3-6 bulan untuk hasil"
          },
          {
            title: "GEO untuk AI",
            description: "Optimasi untuk mesin pencari AI dan LLM",
            deliverables: ["Optimasi entitas", "FAQ schema", "Topical authority", "Konten siap AI"],
            timeline: "2-4 bulan"
          },
          {
            title: "Iklan Google & Meta",
            description: "Performance marketing yang menghasilkan",
            deliverables: ["Setup kampanye", "Kreativ iklan", "Landing page", "Laporan performa"],
            timeline: "1-2 minggu setup"
          },
          {
            title: "Optimasi Marketplace",
            description: "Tokopedia, Shopee, dan platform lainnya",
            deliverables: ["Optimasi listing", "Strategi promo", "Aset kreatif", "Tracking performa"],
            timeline: "2-3 minggu"
          },
          {
            title: "Manajemen Sosial Media",
            description: "Perencanaan konten dan eksekusi kreatif",
            deliverables: ["Kalender konten", "Desain kreatif", "Community management", "Analytics"],
            timeline: "Bulanan berkelanjutan"
          },
          {
            title: "Pengembangan Website",
            description: "Website cepat dan converting",
            deliverables: ["Desain responsif", "Optimasi SEO", "Optimasi performa", "Setup CMS"],
            timeline: "2-6 minggu"
          },
          {
            title: "Pengembangan Aplikasi",
            description: "Aplikasi bisnis dan sistem pemesanan",
            deliverables: ["Pengembangan custom", "User interface", "Setup backend", "Deploy app store"],
            timeline: "6-12 minggu"
          }
        ]
      },
      results: {
        title: "Hasil Nyata untuk Bisnis Nyata",
        subtitle: "Contoh pertumbuhan yang sudah kami berikan",
        metrics: [
          { value: "+150%", label: "Pertumbuhan Traffic Organik", description: "Rata-rata kenaikan dalam 6 bulan" },
          { value: "4.2x", label: "ROAS", description: "Return on ad spend" },
          { value: "+300", label: "Leads per Bulan", description: "Leads berkualitas yang dihasilkan" },
          { value: "+85%", label: "Conversion Rate", description: "Peningkatan konversi website" },
          { value: "24j", label: "Waktu Respon", description: "Rata-rata respon support" },
          { value: "98%", label: "Kepuasan Klien", description: "Berdasarkan feedback klien" }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83b5dab9-bfbb-417a-901d-a64316cd65bd.png"
                alt="SakuScale Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Services' : 'Layanan'}
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'About' : 'Tentang'}
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Reviews' : 'Testimoni'}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Contact' : 'Kontak'}
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-1 text-sm rounded ${language === 'id' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  EN
                </button>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                {currentContent.hero.primaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {currentContent.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                {currentContent.hero.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-green-500 text-green-600 hover:bg-green-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                {currentContent.hero.secondaryCTA}
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-2">4.9/5</span>
              </div>
              <span>•</span>
              <span>{currentContent.hero.trustStrip}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54890b01-0a5e-460b-b440-b4024363a08f.png"
              alt="Google Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d00bd74a-bb6b-4ed0-9a91-0d291783ac3d.png"
              alt="Meta Business Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47a8d2ae-2e7f-4198-8428-04617dbe185c.png"
              alt="TikTok Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7bfd6e4e-c646-4dfb-bdf6-b0b34b752d2a.png"
              alt="Shopee Partner"
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">
                        {language === 'en' ? 'What you get:' : 'Yang Anda dapatkan:'}
                      </h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <Badge variant="secondary" className="text-xs">
                        {service.timeline}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Our Story & Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Our Story - hidden */}

          {/* Mission & Values - hidden */}

          {/* Why Choose Us */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Why Choose SakuScale?' : 'Mengapa Pilih SakuScale?'}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'What makes us different from other digital marketing agencies'
                  : 'Apa yang membuat kami berbeda dari agensi digital marketing lainnya'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* UMKM Specialist */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🏪</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'UMKM Specialists' : 'Spesialis UMKM'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'We exclusively focus on small-medium businesses. We understand your challenges, budget constraints, and growth aspirations.'
                          : 'Kami fokus eksklusif pada bisnis kecil-menengah. Kami paham tantangan, keterbatasan budget, dan aspirasi pertumbuhan Anda.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Affordable Pricing */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">💰</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'UMKM-Friendly Pricing' : 'Harga Ramah UMKM'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'Flexible packages starting from Rp 2.5 million/month. No setup fees, no long-term contracts required.'
                          : 'Paket fleksibel mulai dari Rp 2,5 juta/bulan. Tanpa biaya setup, tanpa kontrak jangka panjang wajib.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fast Results */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">⚡</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Quick Implementation' : 'Implementasi Cepat'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'See results in 30-60 days, not 6 months. We use proven strategies that work specifically for Indonesian market.'
                          : 'Lihat hasil dalam 30-60 hari, bukan 6 bulan. Kami gunakan strategi terbukti yang bekerja khusus untuk pasar Indonesia.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Touch */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🤝</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Personal Relationship' : 'Hubungan Personal'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'Direct access to our team via WhatsApp. No account managers or middlemen. We treat your business like our own.'
                          : 'Akses langsung ke tim kami via WhatsApp. Tanpa account manager atau perantara. Kami perlakukan bisnis Anda seperti milik kami.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Local Network */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🌐</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Local Network' : 'Jaringan Lokal'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'Strong partnerships with local media, influencers, and business communities across Jakarta, Bandung, Surabaya, and Bali.'
                          : 'Partnership kuat dengan media lokal, influencer, dan komunitas bisnis di Jakarta, Bandung, Surabaya, dan Bali.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proven Track Record */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🏆</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Proven Track Record' : 'Track Record Terbukti'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? '100+ successful UMKM transformations. 4.9/5 client satisfaction. Google Partner, Meta Business Partner certified.'
                          : '100+ transformasi UMKM sukses. Kepuasan klien 4,9/5. Bersertifikat Google Partner, Meta Business Partner.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Ready to Transform Your Business?' : 'Siap Transformasi Bisnis Anda?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'en' 
                  ? 'Join 100+ Indonesian UMKM who trusted us to grow their business. Get your free consultation today.'
                  : 'Bergabung dengan 100+ UMKM Indonesia yang mempercayai kami untuk mengembangkan bisnis mereka. Dapatkan konsultasi gratis hari ini.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {language === 'en' ? 'Get Free Consultation' : 'Konsultasi Gratis'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {language === 'en' ? 'Chat on WhatsApp' : 'Chat WhatsApp'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {currentContent.results.title}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {currentContent.results.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-orange-400">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-blue-200">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies & Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Case Studies & Portfolio' : 'Studi Kasus & Portfolio'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {language === 'en' 
                ? 'Real projects, real results from Indonesian UMKM and growing brands' 
                : 'Proyek nyata, hasil nyata dari UMKM Indonesia dan brand berkembang'
              }
            </p>
            
            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['All', 'Restaurant', 'Fashion', 'Beauty', 'Automotive', 'E-commerce', 'Services'].map((tag) => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50 hover:border-blue-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Warung Makan Sederhana */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00f29c2e-c686-48bb-98ed-a7e24bf8affe.png"
                    alt="Warung Makan Sederhana"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500">Restaurant</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Warung Makan Sederhana' : 'Warung Makan Sederhana'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Traditional Indonesian Restaurant • Jakarta' : 'Rumah Makan Tradisional • Jakarta'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Local warung struggling with online visibility and delivery orders'
                      : 'Warung lokal kesulitan dengan visibilitas online dan pesanan delivery'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Google My Business views:' : 'Tampilan Google My Business:'}
                      </span>
                      <span className="font-semibold text-green-600">+320%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Online orders:' : 'Pesanan online:'}
                      </span>
                      <span className="font-semibold text-green-600">+180%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly revenue:' : 'Omzet bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+150%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fashion Boutique */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1219c4c-78f5-46a0-9a89-791c2f899248.png"
                    alt="Bella Fashion Boutique"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pink-500">Fashion</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Bella Fashion Boutique' : 'Bella Fashion Boutique'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Women\'s Fashion • Bandung' : 'Fashion Wanita • Bandung'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Local boutique wanted to compete with big fashion brands online'
                      : 'Butik lokal ingin bersaing dengan brand fashion besar secara online'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Instagram followers:' : 'Followers Instagram:'}
                      </span>
                      <span className="font-semibold text-green-600">+450%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Online sales:' : 'Penjualan online:'}
                      </span>
                      <span className="font-semibold text-green-600">+280%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ROAS:</span>
                      <span className="font-semibold text-green-600">5.2x</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Beauty Salon */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6feb19c1-00e0-4978-891b-8ec2073e447a.png"
                    alt="Cantik Beauty Salon"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500">Beauty</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Cantik Beauty Salon' : 'Cantik Beauty Salon'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Beauty & Wellness • Surabaya' : 'Kecantikan & Wellness • Surabaya'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Family-owned salon needed more bookings and brand awareness'
                      : 'Salon keluarga butuh lebih banyak booking dan brand awareness'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly bookings:' : 'Booking bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+200%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Local search ranking:' : 'Ranking pencarian lokal:'}
                      </span>
                      <span className="font-semibold text-green-600">#1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Customer retention:' : 'Retensi pelanggan:'}
                      </span>
                      <span className="font-semibold text-green-600">+85%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Car Dealership */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a49e2d4b-7b99-422d-b5a5-9f8b2655378e.png"
                    alt="Maju Motor"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500">Automotive</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Maju Motor Dealership' : 'Dealer Maju Motor'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Used Car Dealer • Bali' : 'Dealer Mobil Bekas • Bali'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Traditional dealer wanted to reach younger buyers online'
                      : 'Dealer tradisional ingin menjangkau pembeli muda secara online'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Website leads:' : 'Leads website:'}
                      </span>
                      <span className="font-semibold text-green-600">+380%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Car sales:' : 'Penjualan mobil:'}
                      </span>
                      <span className="font-semibold text-green-600">+120%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Cost per lead:' : 'Biaya per lead:'}
                      </span>
                      <span className="font-semibold text-green-600">-60%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Store */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62dd0db8-8657-46f2-ac4b-acf86367671f.png"
                    alt="Toko Elektronik Jaya"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500">E-commerce</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Toko Elektronik Jaya' : 'Toko Elektronik Jaya'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Electronics Store • Jakarta' : 'Toko Elektronik • Jakarta'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Electronics store competing with big marketplaces'
                      : 'Toko elektronik bersaing dengan marketplace besar'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Tokopedia sales:' : 'Penjualan Tokopedia:'}
                      </span>
                      <span className="font-semibold text-green-600">+250%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Shopee ranking:' : 'Ranking Shopee:'}
                      </span>
                      <span className="font-semibold text-green-600">Top 10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly revenue:' : 'Omzet bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+190%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Business */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6788fb0-4cc2-4382-8598-3dd42494fb0d.png"
                    alt="Bersih Cleaning Service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-500">Services</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Bersih Cleaning Service' : 'Bersih Cleaning Service'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Home & Office Cleaning • Jakarta' : 'Jasa Kebersihan Rumah & Kantor • Jakarta'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Small cleaning service wanted to scale and get corporate clients'
                      : 'Jasa kebersihan kecil ingin scale up dan dapat klien korporat'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Corporate clients:' : 'Klien korporat:'}
                      </span>
                      <span className="font-semibold text-green-600">+500%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly bookings:' : 'Booking bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+300%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Team size:' : 'Ukuran tim:'}
                      </span>
                      <span className="font-semibold text-green-600">3x</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              {language === 'en' ? 'View All Case Studies' : 'Lihat Semua Studi Kasus'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What Our Clients Say - Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'What Our Clients Say' : 'Apa Kata Klien Kami'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Real feedback from Indonesian business owners who trusted us to grow their brands'
                : 'Feedback asli dari pemilik bisnis Indonesia yang mempercayai kami untuk mengembangkan brand mereka'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Restaurant Owner */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"SakuScale helped our warung get found on Google Maps. Now we get 3x more delivery orders! The team really understands local business needs.\""
                    : "\"SakuScale bantu warung kami mudah ditemukan di Google Maps. Sekarang pesanan delivery naik 3x lipat! Tim mereka benar-benar paham kebutuhan bisnis lokal.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c35c82f4-1a9f-41f9-a52c-516a43587820.png"
                    alt="Pak Budi"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Pak Budi Santoso</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Warung Makan Sederhana • Jakarta' : 'Pemilik, Warung Makan Sederhana • Jakarta'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Fashion Boutique */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Instagram followers grew from 500 to 2,500 in just 4 months! Their content strategy really works. Sales increased dramatically.\""
                    : "\"Followers Instagram naik dari 500 jadi 2.500 dalam 4 bulan! Strategi konten mereka benar-benar jitu. Penjualan naik drastis.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/436448c0-129e-4788-96ca-9fb07e6418fc.png"
                    alt="Ibu Sari"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Ibu Sari Dewi</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Bella Fashion Boutique • Bandung' : 'Pemilik, Bella Fashion Boutique • Bandung'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Beauty Salon */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Now we're #1 on Google for 'salon Surabaya'! Bookings doubled and we had to hire 2 more staff. Amazing results!\""
                    : "\"Sekarang kami #1 di Google untuk 'salon Surabaya'! Booking naik 2x lipat sampai harus nambah 2 karyawan. Hasilnya luar biasa!\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2a25af4-d17a-42e4-9af3-d7ff9210dad8.png"
                    alt="Mbak Rina"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mbak Rina Kartika</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Cantik Beauty Salon • Surabaya' : 'Pemilik, Cantik Beauty Salon • Surabaya'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 - Car Dealer */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Website leads increased 4x! Young buyers now find us online. The Facebook ads campaign brought quality customers.\""
                    : "\"Leads dari website naik 4x lipat! Pembeli muda sekarang bisa nemuin kami online. Kampanye Facebook ads bawa customer berkualitas.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70c56215-04d6-4a8c-9893-0a0cb097701c.png"
                    alt="Pak Agus"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Pak Agus Wijaya</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Maju Motor Dealership • Bali' : 'Pemilik, Dealer Maju Motor • Bali'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 - Electronics Store */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Tokopedia sales jumped 250%! Our products now rank in top 10. The marketplace optimization strategy really works.\""
                    : "\"Penjualan Tokopedia loncat 250%! Produk kami sekarang masuk top 10. Strategi optimasi marketplace benar-benar manjur.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/846d0538-000d-4a78-93f2-8cf3461e7030.png"
                    alt="Pak Joko"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Pak Joko Susanto</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Toko Elektronik Jaya • Jakarta' : 'Pemilik, Toko Elektronik Jaya • Jakarta'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 - Cleaning Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"From 2 employees to 8 in one year! Corporate clients trust us now. The professional website made all the difference.\""
                    : "\"Dari 2 karyawan jadi 8 dalam setahun! Klien korporat sekarang percaya sama kami. Website profesional bikin beda banget.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4ec8277-e585-47f2-8a78-91e94c4dc8f1.png"
                    alt="Ibu Maya"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Ibu Maya Sari</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Bersih Cleaning Service • Jakarta' : 'Pemilik, Bersih Cleaning Service • Jakarta'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Stats */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Average Rating' : 'Rating Rata-rata'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Happy Clients' : 'Klien Puas'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Client Retention' : 'Retensi Klien'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              {language === 'en' ? 'Ready to Scale Your Business?' : 'Siap Scale Up Bisnis Anda?'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'en' 
                ? 'Get a free consultation and discover how we can help your business grow'
                : 'Dapatkan konsultasi gratis dan temukan bagaimana kami bisa membantu bisnis Anda berkembang'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                {currentContent.hero.primaryCTA}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                {currentContent.hero.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2454a05-295f-4edc-b111-9443b59863fb.png"
                alt="SakuScale Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Digital marketing agency for Indonesian UMKM and growing brands'
                  : 'Agensi digital marketing untuk UMKM Indonesia dan brand berkembang'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Services' : 'Layanan'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>SEO</li>
                <li>{language === 'en' ? 'Google Ads' : 'Iklan Google'}</li>
                <li>{language === 'en' ? 'Social Media' : 'Sosial Media'}</li>
                <li>{language === 'en' ? 'Website Development' : 'Pengembangan Website'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Contact' : 'Kontak'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@sakuscale.co</li>
                <li>+62XXXXXXXXXXX</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Coverage Areas' : 'Area Layanan'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Jakarta</li>
                <li>Bandung</li>
                <li>Surabaya</li>
                <li>Bali</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 SakuScale. {language === 'en' ? 'All rights reserved.' : 'Semua hak dilindungi.'}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden">
        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            {currentContent.hero.primaryCTA}
          </Button>
          <Button variant="outline" className="flex-1 border-green-500 text-green-600">
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Our Story */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Our Story & Mission' : 'Cerita & Misi Kami'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'en' 
                ? 'Born from the passion to help Indonesian UMKM compete in the digital world'
                : 'Lahir dari passion untuk membantu UMKM Indonesia bersaing di dunia digital'
              }
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'How We Started' : 'Bagaimana Kami Memulai'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'en' 
                    ? 'Founded in 2020 by a team of digital marketing experts who saw Indonesian UMKM struggling to compete online. We witnessed amazing local businesses with great products but poor digital presence losing customers to bigger brands.'
                    : 'Didirikan tahun 2020 oleh tim ahli digital marketing yang melihat UMKM Indonesia kesulitan bersaing online. Kami menyaksikan bisnis lokal luar biasa dengan produk bagus tapi digital presence buruk kalah sama brand besar.'
                  }
                </p>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'That\'s when we decided to bridge this gap. Our mission became clear: democratize digital marketing for Indonesian small businesses.'
                    : 'Saat itulah kami memutuskan untuk menjembatani kesenjangan ini. Misi kami jadi jelas: demokratisasi digital marketing untuk bisnis kecil Indonesia.'
                  }
                </p>
              </div>
              <div>
                <Image
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c26e5fc-d3fe-4881-9fb8-62da5f78ae66.png"
                  alt="SakuScale Team"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Our Mission & Core Values' : 'Misi & Nilai Inti Kami'}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'What drives us every day and guides every decision we make'
                  : 'Yang mendorong kami setiap hari dan memandu setiap keputusan yang kami buat'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Mission */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🎯</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Our Mission' : 'Misi Kami'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Empower every Indonesian UMKM to compete digitally and grow sustainably through accessible, results-driven marketing solutions.'
                      : 'Memberdayakan setiap UMKM Indonesia untuk bersaing secara digital dan tumbuh berkelanjutan melalui solusi marketing yang terjangkau dan hasil-driven.'
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Transparency */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🔍</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Transparency' : 'Transparansi'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Clear reporting, honest communication, and no hidden costs. You always know exactly what we\'re doing and why.'
                      : 'Laporan jelas, komunikasi jujur, dan tanpa biaya tersembunyi. Anda selalu tahu persis apa yang kami lakukan dan mengapa.'
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Local Understanding */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🇮🇩</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Local Expertise' : 'Keahlian Lokal'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Deep understanding of Indonesian market, culture, and consumer behavior. We speak your customers\' language.'
                      : 'Pemahaman mendalam tentang pasar, budaya, dan perilaku konsumen Indonesia. Kami berbicara bahasa pelanggan Anda.'
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Results Focus */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">📈</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Results-Driven' : 'Fokus Hasil'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Every strategy is designed to deliver measurable business growth. We succeed only when you succeed.'
                      : 'Setiap strategi dirancang untuk memberikan pertumbuhan bisnis yang terukur. Kami sukses hanya ketika Anda sukses.'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Why Choose SakuScale?' : 'Mengapa Pilih SakuScale?'}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'What makes us different from other digital marketing agencies'
                  : 'Apa yang membuat kami berbeda dari agensi digital marketing lainnya'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* UMKM Specialist */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🏪</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'UMKM Specialists' : 'Spesialis UMKM'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'We exclusively focus on small-medium businesses. We understand your challenges, budget constraints, and growth aspirations.'
                          : 'Kami fokus eksklusif pada bisnis kecil-menengah. Kami paham tantangan, keterbatasan budget, dan aspirasi pertumbuhan Anda.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Affordable Pricing */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">💰</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'UMKM-Friendly Pricing' : 'Harga Ramah UMKM'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'Flexible packages starting from Rp 2.5 million/month. No setup fees, no long-term contracts required.'
                          : 'Paket fleksibel mulai dari Rp 2,5 juta/bulan. Tanpa biaya setup, tanpa kontrak jangka panjang wajib.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fast Results */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">⚡</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Quick Implementation' : 'Implementasi Cepat'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'See results in 30-60 days, not 6 months. We use proven strategies that work specifically for Indonesian market.'
                          : 'Lihat hasil dalam 30-60 hari, bukan 6 bulan. Kami gunakan strategi terbukti yang bekerja khusus untuk pasar Indonesia.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Touch */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🤝</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Personal Relationship' : 'Hubungan Personal'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'Direct access to our team via WhatsApp. No account managers or middlemen. We treat your business like our own.'
                          : 'Akses langsung ke tim kami via WhatsApp. Tanpa account manager atau perantara. Kami perlakukan bisnis Anda seperti milik kami.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Local Network */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🌐</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Local Network' : 'Jaringan Lokal'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? 'Strong partnerships with local media, influencers, and business communities across Jakarta, Bandung, Surabaya, and Bali.'
                          : 'Partnership kuat dengan media lokal, influencer, dan komunitas bisnis di Jakarta, Bandung, Surabaya, dan Bali.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proven Track Record */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🏆</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {language === 'en' ? 'Proven Track Record' : 'Track Record Terbukti'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language === 'en' 
                          ? '100+ successful UMKM transformations. 4.9/5 client satisfaction. Google Partner, Meta Business Partner certified.'
                          : '100+ transformasi UMKM sukses. Kepuasan klien 4,9/5. Bersertifikat Google Partner, Meta Business Partner.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Ready to Transform Your Business?' : 'Siap Transformasi Bisnis Anda?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'en' 
                  ? 'Join 100+ Indonesian UMKM who trusted us to grow their business. Get your free consultation today.'
                  : 'Bergabung dengan 100+ UMKM Indonesia yang mempercayai kami untuk mengembangkan bisnis mereka. Dapatkan konsultasi gratis hari ini.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {language === 'en' ? 'Get Free Consultation' : 'Konsultasi Gratis'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {language === 'en' ? 'Chat on WhatsApp' : 'Chat WhatsApp'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {currentContent.results.title}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {currentContent.results.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-orange-400">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-blue-200">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies & Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Case Studies & Portfolio' : 'Studi Kasus & Portfolio'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {language === 'en' 
                ? 'Real projects, real results from Indonesian UMKM and growing brands' 
                : 'Proyek nyata, hasil nyata dari UMKM Indonesia dan brand berkembang'
              }
            </p>
            
            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['All', 'Restaurant', 'Fashion', 'Beauty', 'Automotive', 'E-commerce', 'Services'].map((tag) => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50 hover:border-blue-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Warung Makan Sederhana */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00f29c2e-c686-48bb-98ed-a7e24bf8affe.png"
                    alt="Warung Makan Sederhana"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500">Restaurant</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Warung Makan Sederhana' : 'Warung Makan Sederhana'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Traditional Indonesian Restaurant • Jakarta' : 'Rumah Makan Tradisional • Jakarta'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Local warung struggling with online visibility and delivery orders'
                      : 'Warung lokal kesulitan dengan visibilitas online dan pesanan delivery'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Google My Business views:' : 'Tampilan Google My Business:'}
                      </span>
                      <span className="font-semibold text-green-600">+320%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Online orders:' : 'Pesanan online:'}
                      </span>
                      <span className="font-semibold text-green-600">+180%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly revenue:' : 'Omzet bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+150%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fashion Boutique */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1219c4c-78f5-46a0-9a89-791c2f899248.png"
                    alt="Bella Fashion Boutique"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pink-500">Fashion</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Bella Fashion Boutique' : 'Bella Fashion Boutique'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Women\'s Fashion • Bandung' : 'Fashion Wanita • Bandung'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Local boutique wanted to compete with big fashion brands online'
                      : 'Butik lokal ingin bersaing dengan brand fashion besar secara online'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Instagram followers:' : 'Followers Instagram:'}
                      </span>
                      <span className="font-semibold text-green-600">+450%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Online sales:' : 'Penjualan online:'}
                      </span>
                      <span className="font-semibold text-green-600">+280%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ROAS:</span>
                      <span className="font-semibold text-green-600">5.2x</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Beauty Salon */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6feb19c1-00e0-4978-891b-8ec2073e447a.png"
                    alt="Cantik Beauty Salon"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500">Beauty</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Cantik Beauty Salon' : 'Cantik Beauty Salon'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Beauty & Wellness • Surabaya' : 'Kecantikan & Wellness • Surabaya'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Family-owned salon needed more bookings and brand awareness'
                      : 'Salon keluarga butuh lebih banyak booking dan brand awareness'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly bookings:' : 'Booking bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+200%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Local search ranking:' : 'Ranking pencarian lokal:'}
                      </span>
                      <span className="font-semibold text-green-600">#1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Customer retention:' : 'Retensi pelanggan:'}
                      </span>
                      <span className="font-semibold text-green-600">+85%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Car Dealership */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a49e2d4b-7b99-422d-b5a5-9f8b2655378e.png"
                    alt="Maju Motor"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500">Automotive</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Maju Motor Dealership' : 'Dealer Maju Motor'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Used Car Dealer • Bali' : 'Dealer Mobil Bekas • Bali'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Traditional dealer wanted to reach younger buyers online'
                      : 'Dealer tradisional ingin menjangkau pembeli muda secara online'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Website leads:' : 'Leads website:'}
                      </span>
                      <span className="font-semibold text-green-600">+380%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Car sales:' : 'Penjualan mobil:'}
                      </span>
                      <span className="font-semibold text-green-600">+120%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Cost per lead:' : 'Biaya per lead:'}
                      </span>
                      <span className="font-semibold text-green-600">-60%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Store */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62dd0db8-8657-46f2-ac4b-acf86367671f.png"
                    alt="Toko Elektronik Jaya"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500">E-commerce</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Toko Elektronik Jaya' : 'Toko Elektronik Jaya'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Electronics Store • Jakarta' : 'Toko Elektronik • Jakarta'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Electronics store competing with big marketplaces'
                      : 'Toko elektronik bersaing dengan marketplace besar'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Tokopedia sales:' : 'Penjualan Tokopedia:'}
                      </span>
                      <span className="font-semibold text-green-600">+250%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Shopee ranking:' : 'Ranking Shopee:'}
                      </span>
                      <span className="font-semibold text-green-600">Top 10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly revenue:' : 'Omzet bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+190%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Business */}
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6788fb0-4cc2-4382-8598-3dd42494fb0d.png"
                    alt="Bersih Cleaning Service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-500">Services</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'en' ? 'Bersih Cleaning Service' : 'Bersih Cleaning Service'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {language === 'en' ? 'Home & Office Cleaning • Jakarta' : 'Jasa Kebersihan Rumah & Kantor • Jakarta'}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' 
                      ? 'Small cleaning service wanted to scale and get corporate clients'
                      : 'Jasa kebersihan kecil ingin scale up dan dapat klien korporat'
                    }
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Corporate clients:' : 'Klien korporat:'}
                      </span>
                      <span className="font-semibold text-green-600">+500%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Monthly bookings:' : 'Booking bulanan:'}
                      </span>
                      <span className="font-semibold text-green-600">+300%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Team size:' : 'Ukuran tim:'}
                      </span>
                      <span className="font-semibold text-green-600">3x</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'en' ? 'View Case Study' : 'Lihat Detail'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              {language === 'en' ? 'View All Case Studies' : 'Lihat Semua Studi Kasus'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What Our Clients Say - Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'What Our Clients Say' : 'Apa Kata Klien Kami'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Real feedback from Indonesian business owners who trusted us to grow their brands'
                : 'Feedback asli dari pemilik bisnis Indonesia yang mempercayai kami untuk mengembangkan brand mereka'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Restaurant Owner */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"SakuScale helped our warung get found on Google Maps. Now we get 3x more delivery orders! The team really understands local business needs.\""
                    : "\"SakuScale bantu warung kami mudah ditemukan di Google Maps. Sekarang pesanan delivery naik 3x lipat! Tim mereka benar-benar paham kebutuhan bisnis lokal.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c35c82f4-1a9f-41f9-a52c-516a43587820.png"
                    alt="Pak Budi"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Pak Budi Santoso</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Warung Makan Sederhana • Jakarta' : 'Pemilik, Warung Makan Sederhana • Jakarta'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Fashion Boutique */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Instagram followers grew from 500 to 2,500 in just 4 months! Their content strategy really works. Sales increased dramatically.\""
                    : "\"Followers Instagram naik dari 500 jadi 2.500 dalam 4 bulan! Strategi konten mereka benar-benar jitu. Penjualan naik drastis.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/436448c0-129e-4788-96ca-9fb07e6418fc.png"
                    alt="Ibu Sari"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Ibu Sari Dewi</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Bella Fashion Boutique • Bandung' : 'Pemilik, Bella Fashion Boutique • Bandung'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Beauty Salon */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Now we're #1 on Google for 'salon Surabaya'! Bookings doubled and we had to hire 2 more staff. Amazing results!\""
                    : "\"Sekarang kami #1 di Google untuk 'salon Surabaya'! Booking naik 2x lipat sampai harus nambah 2 karyawan. Hasilnya luar biasa!\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2a25af4-d17a-42e4-9af3-d7ff9210dad8.png"
                    alt="Mbak Rina"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mbak Rina Kartika</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Cantik Beauty Salon • Surabaya' : 'Pemilik, Cantik Beauty Salon • Surabaya'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 - Car Dealer */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Website leads increased 4x! Young buyers now find us online. The Facebook ads campaign brought quality customers.\""
                    : "\"Leads dari website naik 4x lipat! Pembeli muda sekarang bisa nemuin kami online. Kampanye Facebook ads bawa customer berkualitas.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70c56215-04d6-4a8c-9893-0a0cb097701c.png"
                    alt="Pak Agus"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Pak Agus Wijaya</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Maju Motor Dealership • Bali' : 'Pemilik, Dealer Maju Motor • Bali'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 - Electronics Store */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"Tokopedia sales jumped 250%! Our products now rank in top 10. The marketplace optimization strategy really works.\""
                    : "\"Penjualan Tokopedia loncat 250%! Produk kami sekarang masuk top 10. Strategi optimasi marketplace benar-benar manjur.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/846d0538-000d-4a78-93f2-8cf3461e7030.png"
                    alt="Pak Joko"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Pak Joko Susanto</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Toko Elektronik Jaya • Jakarta' : 'Pemilik, Toko Elektronik Jaya • Jakarta'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 - Cleaning Service */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? "\"From 2 employees to 8 in one year! Corporate clients trust us now. The professional website made all the difference.\""
                    : "\"Dari 2 karyawan jadi 8 dalam setahun! Klien korporat sekarang percaya sama kami. Website profesional bikin beda banget.\""
                  }
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4ec8277-e585-47f2-8a78-91e94c4dc8f1.png"
                    alt="Ibu Maya"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Ibu Maya Sari</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Owner, Bersih Cleaning Service • Jakarta' : 'Pemilik, Bersih Cleaning Service • Jakarta'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Stats */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Average Rating' : 'Rating Rata-rata'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Happy Clients' : 'Klien Puas'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Client Retention' : 'Retensi Klien'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              {language === 'en' ? 'Ready to Scale Your Business?' : 'Siap Scale Up Bisnis Anda?'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'en' 
                ? 'Get a free consultation and discover how we can help your business grow'
                : 'Dapatkan konsultasi gratis dan temukan bagaimana kami bisa membantu bisnis Anda berkembang'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                {currentContent.hero.primaryCTA}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                {currentContent.hero.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2454a05-295f-4edc-b111-9443b59863fb.png"
                alt="SakuScale Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Digital marketing agency for Indonesian UMKM and growing brands'
                  : 'Agensi digital marketing untuk UMKM Indonesia dan brand berkembang'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Services' : 'Layanan'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>SEO</li>
                <li>{language === 'en' ? 'Google Ads' : 'Iklan Google'}</li>
                <li>{language === 'en' ? 'Social Media' : 'Sosial Media'}</li>
                <li>{language === 'en' ? 'Website Development' : 'Pengembangan Website'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Contact' : 'Kontak'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@sakuscale.co</li>
                <li>+62XXXXXXXXXXX</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Coverage Areas' : 'Area Layanan'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Jakarta</li>
                <li>Bandung</li>
                <li>Surabaya</li>
                <li>Bali</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 SakuScale. {language === 'en' ? 'All rights reserved.' : 'Semua hak dilindungi.'}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden">
        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            {currentContent.hero.primaryCTA}
          </Button>
          <Button variant="outline" className="flex-1 border-green-500 text-green-600">
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
