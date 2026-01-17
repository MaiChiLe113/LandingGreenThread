import { useEffect, useRef } from 'react'
import anime from 'animejs'
import {
  Droplet,
  Leaf,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  Activity,
  Brain,
  CheckCircle,
  BarChart3,
  FileText,
  Sparkles
} from 'lucide-react'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero Section Animation
    if (heroRef.current) {
      anime({
        targets: heroRef.current.querySelectorAll('.hero-text'),
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
        duration: 1200,
        easing: 'easeOutExpo'
      })

      anime({
        targets: heroRef.current.querySelectorAll('.hero-icon'),
        scale: [0, 1],
        rotate: [180, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 400 }),
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
      })
    }

    // Cards Animation on Scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelectorAll('.stat-card'),
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.95, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutExpo'
          })
          cardObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (cardsRef.current) cardObserver.observe(cardsRef.current)

    // Features Animation
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelectorAll('.feature-card'),
            opacity: [0, 1],
            translateX: [-60, 0],
            delay: anime.stagger(150),
            duration: 1000,
            easing: 'easeOutExpo'
          })
          featureObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (featuresRef.current) featureObserver.observe(featuresRef.current)

    // CTA Animation
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelectorAll('.cta-item'),
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutExpo'
          })
          ctaObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    // Floating Animation for Icons
    anime({
      targets: '.floating-icon',
      translateY: [-10, 10],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    })

  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-dark flex items-center gap-2">
            <Leaf className="text-green-primary" />
            GreenThread
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#dashboard" className="text-gray-700 hover:text-green-dark transition flex items-center gap-2">
              <BarChart3 size={18} />
              Dashboard
            </a>
            <a href="#news" className="text-gray-700 hover:text-green-dark transition flex items-center gap-2">
              <FileText size={18} />
              News
            </a>
            <a href="#trends" className="text-gray-700 hover:text-green-dark transition flex items-center gap-2">
              <TrendingUp size={18} />
              Trends
            </a>
            <button className="bg-green-dark text-white px-6 py-2 rounded-full hover:bg-green-primary transition">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1200&h=800&fit=crop"
            alt="Background texture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="hero-text text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              STOP WASTEWATER VIOLATIONS.<br />
              <span className="text-green-dark">START COMPLIANCE.</span>
            </h1>
            <p className="hero-text text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Real-time monitoring. AI predictions. Verifiable compliance.<br />
              Protect your textile operations from costly fines and market access losses.
            </p>
            <button className="hero-text bg-green-primary hover:bg-green-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition flex items-center gap-2 mx-auto group">
              Learn More
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Stats Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Decorative Icons */}
            <div className="hero-icon floating-icon absolute -top-10 left-10 bg-green-light rounded-full p-4 shadow-lg">
              <Leaf className="text-green-dark" size={32} />
            </div>
            <div className="hero-icon floating-icon absolute -top-5 right-20 bg-green-light rounded-full p-4 shadow-lg">
              <Droplet className="text-green-dark" size={32} />
            </div>
            <div className="hero-icon floating-icon absolute bottom-10 right-10 bg-green-light rounded-full p-4 shadow-lg">
              <Zap className="text-green-dark" size={32} />
            </div>

            {/* Stat Cards */}
            <div className="stat-card bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img
                  src="https://plus.unsplash.com/premium_photo-1680103931756-b58c6df85669?q=80&w=872&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-green-light rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                <Shield className="text-green-dark" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">reduce wastewater violations</h3>
              <p className="text-2xl font-black text-green-dark mb-1 relative z-10">484B VND</p>
              <p className="text-sm text-gray-600 relative z-10">Prevent fines annually</p>
            </div>

            <div className="stat-card bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1732679216826-dbe10200cbfe?q=80&w=1374&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-green-light rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                <Activity className="text-green-dark" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">pollution prediction</h3>
              <p className="text-2xl font-black text-green-dark mb-1 relative z-10">1-6 hours</p>
              <p className="text-sm text-gray-600 relative z-10">Advance alerts</p>
            </div>

            <div className="stat-card bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=300&h=300&fit=crop"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-green-light rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                <CheckCircle className="text-green-dark" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">verified traceability</h3>
              <div className="flex gap-2 mb-2 relative z-10">
                <span className="bg-green-primary text-white px-3 py-1 rounded-full text-xs">Tag</span>
                <span className="bg-green-primary text-white px-3 py-1 rounded-full text-xs">Tag</span>
              </div>
              <p className="text-sm text-gray-600 relative z-10">Blockchain verified</p>
            </div>

            <div className="stat-card bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1695700753226-1066b5a9ce21?q=80&w=687&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-green-light rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                <Brain className="text-green-dark" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">AI optimization</h3>
              <p className="text-2xl font-black text-green-dark mb-1 relative z-10">Save 40%+</p>
              <p className="text-sm text-gray-600 relative z-10">Operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-green-dark py-4 overflow-hidden border-y-4 border-green-primary">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-white text-2xl font-bold mx-8 flex items-center gap-3">
              <Sparkles className="text-green-light" size={24} />
              Green The Thread
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                TURN WASTEWATER RISK INTO<br />
                <span className="text-green-dark">COMPETITIVE ADVANTAGE</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                GreenThread connects textile operators, waste management companies, and regulators
                with real-time IoT data, predictive AI, and blockchain-verified compliance—reducing
                pollution while boosting export revenue.
              </p>
              <div className="flex gap-4">
                <button className="bg-green-light border-2 border-green-dark text-green-dark px-6 py-3 rounded-full font-semibold hover:bg-green-dark hover:text-white transition">
                  About Us
                </button>
                <button className="text-green-dark font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View more <ArrowRight />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1695700753226-1066b5a9ce21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Green leaf texture"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-green-light rounded-full p-3">
                    <Leaf className="text-green-dark" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Our Product</p>
                    <p className="text-sm text-gray-600">AI-Powered Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Nature-Inspired <span className="text-green-dark">Sustainability</span>
            </h2>
            <p className="text-lg text-gray-600">
              Just as nature maintains its balance, GreenThread helps your operations stay in harmony
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all">
              <img
                src="https://plus.unsplash.com/premium_photo-1680103931756-b58c6df85669?q=80&w=872&auto=format&fit=crop"
                alt="Green textile texture"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Textile Innovation</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1732679216826-dbe10200cbfe?q=80&w=1374&auto=format&fit=crop"
                alt="Natural patterns"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Natural Balance</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&h=600&fit=crop"
                alt="Leaf detail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Growth & Renewal</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1695700753226-1066b5a9ce21?q=80&w=687&auto=format&fit=crop"
                alt="Green foliage"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Clean Future</p>
              </div>
            </div>
          </div>

          {/* Large Featured Image */}
          <div className="mt-8 relative overflow-hidden rounded-3xl h-96 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1584305113344-9fcd67b1cd26?w=1200&h=600&fit=crop"
              alt="Fern leaves pattern"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-dark/90 to-transparent flex items-center px-12">
              <div className="max-w-xl text-white">
                <h3 className="text-4xl font-black mb-4">Monitor. Predict. Protect.</h3>
                <p className="text-lg mb-6">
                  From nature's complexity comes simple solutions for sustainable operations
                </p>
                <button className="bg-white text-green-dark px-8 py-3 rounded-full font-bold hover:bg-green-light transition">
                  Discover How
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-6 bg-gradient-to-b from-transparent to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Our Product</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GreenThread is an AI-powered wastewater monitoring platform that transforms
              textile operations through real-time intelligence and verified compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Real-Time Monitoring */}
            <div className="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="mb-6">
                <div className="bg-green-light w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Activity className="text-green-dark" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">REAL-TIME MONITORING</h3>
              </div>

              {/* Gauge Visual */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="10"/>
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#5C7A3F" strokeWidth="10" strokeDasharray="314" strokeDashoffset="78" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-green-dark">7.4</span>
                      <span className="text-xs text-gray-600">pH Level</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Updated: 5:32:13 PM</span>
                  <span className="px-2 py-1 bg-green-primary text-white rounded-full">COMPLIANT</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-primary mt-1 flex-shrink-0" size={18} />
                  <span>Track critical parameters: COD, BOD, pH, dissolved oxygen, turbidity</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-primary mt-1 flex-shrink-0" size={18} />
                  <span>ESP32 IoT sensors capture data 24/7 from your wastewater discharge</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-primary mt-1 flex-shrink-0" size={18} />
                  <span>Instant alerts for anomalies and pollution spikes</span>
                </li>
              </ul>

              <button className="text-green-dark font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View more <ArrowRight size={18} />
              </button>
            </div>

            {/* AI Predictions */}
            <div className="feature-card bg-gradient-to-br from-green-light to-green-primary rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all text-white">
              <div className="mb-6">
                <div className="bg-white/20 backdrop-blur w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI PREDICTIONS & GUIDANCE</h3>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={24} />
                  <span className="font-semibold">Next 6 Hours Forecast</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">COD Level</span>
                    <span className="font-bold">Rising ↗</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-300 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <p className="text-xs opacity-90">Suggested: Increase aeration by 15%</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span>LSTM neural networks predict violations 1-6 hours ahead</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span>Actionable recommendations to prevent issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span>Optimize chemical dosing and treatment processes</span>
                </li>
              </ul>

              <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View more <ArrowRight size={18} />
              </button>
            </div>

            {/* Blockchain */}
            <div className="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="mb-6">
                <div className="bg-green-light w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="text-green-dark" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">BLOCKCHAIN VERIFICATION</h3>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-primary rounded-lg flex items-center justify-center text-white font-bold">1</div>
                    <span className="text-gray-700">Data captured</span>
                    <CheckCircle className="text-green-primary ml-auto" size={18} />
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-primary rounded-lg flex items-center justify-center text-white font-bold">2</div>
                    <span className="text-gray-700">Hash generated</span>
                    <CheckCircle className="text-green-primary ml-auto" size={18} />
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-green-primary rounded-lg flex items-center justify-center text-white font-bold">3</div>
                    <span className="text-gray-700">Blockchain stored</span>
                    <CheckCircle className="text-green-primary ml-auto" size={18} />
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-primary mt-1 flex-shrink-0" size={18} />
                  <span>Immutable compliance records that can't be altered</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-primary mt-1 flex-shrink-0" size={18} />
                  <span>Export-ready documentation for international buyers</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-green-primary mt-1 flex-shrink-0" size={18} />
                  <span>Build trust with transparent, verifiable data</span>
                </li>
              </ul>

              <button className="text-green-dark font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View more <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Large GreenThread Branding */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
          <div className="text-8xl font-black text-gray-200 tracking-wider">GREEN</div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582084954680-ebfebf33eff7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Leaf detail"
              className="w-48 h-48 rounded-full object-cover shadow-2xl border-8 border-white"
            />
          </div>
          <div className="text-8xl font-black text-gray-900 tracking-wider">THREAD</div>
        </div>
      </section>

      {/* Get Started Section */}
      <section ref={ctaRef} className="py-20 px-6 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        {/* Background decorative images */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1582084954680-ebfebf33eff7?q=80&w=687&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
          <img
            src="https://plus.unsplash.com/premium_photo-1680103931756-b58c6df85669?q=80&w=872&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                GET STARTED WITH GREENTHREAD
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                GreenThread serves textile operators, waste management companies, and environmental
                regulators. Choose your role and begin real-time compliance monitoring.
              </p>

              {/* Add visual element */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1732679216826-dbe10200cbfe?q=80&w=1374&auto=format&fit=crop"
                  alt="Sustainable operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/70 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-lg">Real-time compliance at your fingertips</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="cta-item bg-green-light rounded-2xl p-6 hover:bg-green-primary hover:text-white transition-all group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-3 group-hover:bg-green-dark transition">
                      <BarChart3 className="text-green-dark group-hover:text-white transition" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">ACCESS LIVE DASHBOARDS</h3>
                      <p className="text-sm opacity-80">Real-time monitoring of COD, BOD, pH, dissolved oxygen with trend visualizations</p>
                    </div>
                  </div>
                  <ArrowRight className="group-hover:translate-x-2 transition" />
                </div>
              </div>

              <div className="cta-item bg-white rounded-2xl p-6 hover:bg-green-primary hover:text-white transition-all group cursor-pointer shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-light rounded-full p-3 group-hover:bg-green-dark transition">
                      <FileText className="text-green-dark group-hover:text-white transition" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">REQUEST COMPLIANCE REPORTS</h3>
                      <p className="text-sm opacity-80">Generate blockchain-verified reports for regulators and buyers</p>
                    </div>
                  </div>
                  <ArrowRight className="group-hover:translate-x-2 transition" />
                </div>
              </div>

              <div className="cta-item bg-white rounded-2xl p-6 hover:bg-green-primary hover:text-white transition-all group cursor-pointer shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-light rounded-full p-3 group-hover:bg-green-dark transition">
                      <Sparkles className="text-green-dark group-hover:text-white transition" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">SEE AI PLAN & SUGGESTION</h3>
                      <p className="text-sm opacity-80">Get predictive insights and optimization recommendations</p>
                    </div>
                  </div>
                  <ArrowRight className="group-hover:translate-x-2 transition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            VIEW MONITORING DATA IN REAL-TIME<br />
            OR EXPLORE COMPLIANCE ANALYTICS
          </h2>
          <button className="bg-green-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-primary transition mb-12">
            Live Dashboard
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-dark text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={32} />
                <span className="text-2xl font-bold">GreenThread</span>
              </div>
              <p className="text-green-light text-sm">
                Transforming textile wastewater management with AI and blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-green-light text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-green-light text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-green-light text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-primary pt-8 text-center text-green-light text-sm">
            <p>&copy; 2025 GreenThread. Built with sustainability in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
