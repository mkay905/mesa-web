'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { TreesIcon as Tree, Bell, Heart, Globe, Phone, ChevronDown, Share2 ,HeartHandshake,AtSign, NotebookText} from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-[#1d4e7c] text-white min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DownloadSection />
      <Contact />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo-1.png" 
              alt="Mera Samaaj Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">Mera Samaaj</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-[#e75480] transition-colors">Features</Link>
            <Link href="#download" className="hover:text-[#e75480] transition-colors">Download</Link>
            <Link href="#contact" className="hover:text-[#e75480] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Community+Background"
          alt="Community background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d4e7c] to-[#1d4e7c]/70"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Your online community directory for free</h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">All-in-one social platform for communities. Publish your community directory online, connect with community members on the go & bond with your relatives anytime, anywhere.</p>
        <Button asChild className="bg-[#e75480] hover:bg-[#d64d77] text-white px-8 py-6 rounded-full text-lg font-semibold transition-colors duration-300">
          <Link href="#features">Explore Features</Link>
        </Button>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  imageSrc: string;
}

function FeatureCard({ title, description, icon: Icon, imageSrc }: FeatureCardProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
    >
      <div className="p-8">
        <div className="flex items-center mb-6">
          <Icon className="w-8 h-8 text-[#e75480] mr-4" />
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        {/* <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} feature screenshot`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div> */}
      </div>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard
            title="Member Directory"
            description="Connect with community members easily. Search, filter, and view detailed profiles of your community members."
            icon={NotebookText}
            imageSrc="/placeholder.svg?height=400&width=200&text=Member+Directory"
          />
          <FeatureCard
            title="Family Tree"
            description="Build and explore your family history. Create, edit, and share your family tree with relatives."
            icon={Tree}
            imageSrc="/placeholder.svg?height=400&width=200&text=Family+Tree"
          />
          <FeatureCard
            title="Updates"
            description="Stay informed with community news. Get real-time notifications and updates from your community."
            icon={Bell}
            imageSrc="/placeholder.svg?height=400&width=200&text=Community+Updates"
          />
          <FeatureCard
            title="Matrimony"
            description="Find your perfect match within the community. Browse profiles, express interest, and connect with potential partners."
            icon={Heart}
            imageSrc="/placeholder.svg?height=400&width=200&text=Matrimony"
          />
          <FeatureCard
            title="Community List"
            description="Explore diverse Indian communities. Discover and join various sub-communities based on region, language, or interests."
            icon={Globe}
            imageSrc="/placeholder.svg?height=400&width=200&text=Community+List"
          />

          <FeatureCard
            title="Charity"
            description="Empower your community through giving. Organize fundraisers, volunteer for local causes, and track the impact of your collective generosity."
            icon={HeartHandshake}
            imageSrc="/placeholder.svg?height=400&width=200&text=Community+List"
          />
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-[#1d4e7c] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Download App</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Get connected with your community on the go! Download the Mera Samaaj app and stay in touch with your roots, anytime, anywhere.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button asChild className="bg-[#e75480] hover:bg-[#d64d77] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
            <Link href="https://link.merasamaaj.com/googleplay" target="_blank"
            rel="noopener noreferrer">
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.999V3h18v17.999H3zm9-15.937c-3.939 0-7.5 1.968-7.5 4.969 0 1.754 1.172 3.298 2.812 3.525.654.091.852-.283.852-.629 0-.31-.011-1.132-.011-2.217-3.262.697-3.943-1.394-3.943-1.394-.534-1.357-1.301-1.717-1.301-1.717-1.072-.733.08-.733.08-.733 1.187.083 1.808 1.222 1.808 1.222 1.059 1.812 2.777 1.293 3.45.986.108-.763.414-1.293.752-1.592-2.605-.297-5.34-1.303-5.34-5.812 0-1.285.456-2.332 1.205-3.152-.12-.297-.523-1.49.115-3.106 0 0 .986-.316 3.227 1.204.938-.262 1.941-.392 2.938-.398.996.006 1.998.136 2.938.398 2.24-1.52 3.226-1.204 3.226-1.204.638 1.616.235 2.809.115 3.106.749.82 1.205 1.867 1.205 3.152 0 4.521-2.742 5.508-5.354 5.799.421.364.794 1.077.794 2.171 0 1.569-.011 2.837-.011 3.222 0 .346.198.726.858.629 1.634-.227 2.806-1.771 2.806-3.525 0-3.001-3.561-4.969-7.5-4.969z"/></svg>
                Google Play
              </span>
            </Link>
          </Button>
          <Button asChild className="bg-[#e75480] hover:bg-[#d64d77] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
            <Link href="https://link.merasamaaj.com/appstore"
            target="_blank"
            rel="noopener noreferrer">
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <Phone className="w-12 h-12 text-[#e75480] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+91 96876 15385</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="w-12 h-12 text-[#e75480] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Website</h3>
            <Link href="https://www.merasamaaj.com" className="text-[#e75480] hover:underline">www.merasamaaj.com</Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <AtSign className="w-12 h-12 text-[#e75480] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <div className="flex space-x-4 mt-0">
              <Link href="#" className="text-[#e75480] hover:text-[#d64d77] transition-colors">mail(at)merasamaaj.com</Link>
              {/* <Link href="#" className="text-[#e75480] hover:text-[#d64d77] transition-colors">Twitter</Link> */}
              {/* <Link href="#" className="text-[#e75480] hover:text-[#d64d77] transition-colors">Instagram</Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1d4e7c] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Mera Samaaj</h3>
            <p className="text-sm text-gray-300">Connected Family & Community</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-[#e75480] transition-colors">Features</Link></li>
              <li><Link href="#download" className="hover:text-[#e75480] transition-colors">Download</Link></li>
              <li><Link href="#contact" className="hover:text-[#e75480] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-[#e75480] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#e75480] transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Mera Samaaj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

