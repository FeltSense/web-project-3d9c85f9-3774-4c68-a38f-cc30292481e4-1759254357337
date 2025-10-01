'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">AL</span>
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-bold text-gray-900">Aflojale a la Toti</h1>
            <p className="text-xs text-gray-600">Leonel Lombardo</p>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Inicio
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Servicios
          </a>
          <a href="#campaigns" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Campañas
          </a>
          <a href="#analytics" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Analytics
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Nosotros
          </a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Contacto
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path className="menu-icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            <path className="close-icon hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className="mobile-menu hidden md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
      <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">
        Inicio
      </a>
      <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">
        Servicios
      </a>
      <a href="#campaigns" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">
        Campañas
      </a>
      <a href="#analytics" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">
        Analytics
      </a>
      <a href="#portfolio" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">
        Portfolio
      </a>
      <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors">
        Nosotros
      </a>
      <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors mx-3 mt-4">
        Contacto
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-32 h-32 bg-gray-800 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute bottom-32 right-16 w-24 h-24 bg-gray-700 rounded-full opacity-30 animate-bounce"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-600 rounded-full opacity-10 animate-ping"></div>
  </div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
      
      {/* Content Side */}
      <div className="text-white space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
            Transformación Fitness Online
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            <span className="block text-white">AFLÓJALE</span>
            <span className="block text-white">A LA TOTI</span>
            <span className="block text-2xl lg:text-3xl font-medium mt-2 text-white">
              con Leonel Lombardo
            </span>
          </h1>
        </div>

        <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-xl">
          Entrena desde casa con el método que ya transformó a <span className="font-bold text-white">+5,000 personas</span>. 
          Rutinas personalizadas, nutrición adaptada y seguimiento 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            🔥 Empezar Mi Transformación
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
            📱 Ver Testimonios
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-black text-white">5K+</div>
            <div className="text-sm text-white">Transformaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-white">98%</div>
            <div className="text-sm text-white">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-white">24/7</div>
            <div className="text-sm text-white">Soporte</div>
          </div>
        </div>
      </div>

      {/* Visual Side */}
      <div className="relative">
        <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-xl">Plan Personalizado</h3>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">GRATIS</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <span className="text-green-400 mr-3">✓</span>
                Rutina adaptada a tu nivel
              </div>
              <div className="flex items-center text-white">
                <span className="text-green-400 mr-3">✓</span>
                Plan nutricional personalizado
              </div>
              <div className="flex items-center text-white">
                <span className="text-green-400 mr-3">✓</span>
                Seguimiento con Leonel
              </div>
              <div className="flex items-center text-white">
                <span className="text-green-400 mr-3">✓</span>
                Comunidad exclusiva
              </div>
            </div>

            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-xl transition-all duration-300">
              Obtener Plan Gratis
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl animate-bounce">
          💪
        </div>
        <div className="absolute -bottom-4 -left-4 bg-teal-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold animate-pulse">
          🏆
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
      <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
    </svg>
  </div>
</section>

      {/* Your Routine Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Routine</h2>
            <p className="text-xl text-gray-600">Simple 2-step routine to transform your fitness</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Morning Workout</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Start your day with a 30-minute high-intensity workout designed to boost your metabolism and energy levels.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Warm-up exercises
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Core strength training
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Cardio burst
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Evening Recovery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Wind down with a 20-minute recovery session focused on flexibility, stretching, and muscle relaxation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Dynamic stretching
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Yoga poses
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✓</span>
                  Breathing exercises
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Servicios de <span className="text-orange-600">Aflojale a la Toti - Leonel Lombardo</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Transformamos profesionales del marketing con un sistema integral de fitness y bienestar diseñado para tu estilo de vida dinámico
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Planes de Entrenamiento Personalizados</h3>
        <p className="text-gray-600 text-center mb-4">
          Rutinas adaptadas a tu agenda de marketer: entrenamientos eficientes de 20-45 minutos que se ajustan a tus horarios de campañas y deadlines.
        </p>
        <div className="text-center">
          <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Aflojale a la Toti</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Guía Nutricional Estratégica</h3>
        <p className="text-gray-600 text-center mb-4">
          Planes alimenticios para profesionales ocupados: comidas rápidas y nutritivas, snacks para largas jornadas creativas y estrategias anti-estrés.
        </p>
        <div className="text-center">
          <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Leonel Lombardo</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Soporte 24/7 de Coach</h3>
        <p className="text-gray-600 text-center mb-4">
          Acompañamiento constante vía WhatsApp y plataforma digital. Respuestas rápidas para ajustar tu rutina según tus proyectos y eventos de marketing.
        </p>
        <div className="text-center">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Sistema Probado</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Comunidad Marketing Fit</h3>
        <p className="text-gray-600 text-center mb-4">
          Red exclusiva de profesionales del marketing en transformación. Comparte experiencias, retos y logros con colegas que entienden tu industria.
        </p>
        <div className="text-center">
          <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Formato Online</span>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Por qué elegir <span className="text-orange-600">Aflojale a la Toti - Leonel Lombardo</span>?
        </h3>
        <p className="text-gray-600 mb-6">
          Entendemos las demandas únicas del marketing: largas horas frente al ordenador, estrés por deadlines, 
          eventos nocturnos y la necesidad de mantener una imagen profesional impecable.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
          Comenzar Mi Transformación
        </button>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros clientes
      </h2>
      <p className="text-lg text-gray-600">
        Testimonios reales de empresas que han transformado su marketing
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
            alt="Carlos Mendoza" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Carlos Mendoza</h4>
            <p className="text-sm text-gray-600">Director de Marketing, TechStart</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Leonel Lombardo y su enfoque 'Aflojale a la Toti' revolucionó completamente nuestra estrategia digital. 
          Aumentamos nuestro ROI en un 300% en solo 6 meses. Su metodología disruptiva es exactamente lo que 
          necesitábamos para destacar en el mercado."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" 
            alt="María González" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">María González</h4>
            <p className="text-sm text-gray-600">CEO, Innovate Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "El programa 'Aflojale a la Toti - Leonel Lombardo' cambió por completo nuestra perspectiva del marketing. 
          Pasamos de campañas tradicionales aburridas a estrategias creativas que realmente conectan con nuestra 
          audiencia. Los resultados hablan por sí solos: +250% en engagement."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
            alt="Roberto Silva" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Roberto Silva</h4>
            <p className="text-sm text-gray-600">VP Marketing, GrowthCorp</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Trabajar con Leonel Lombardo fue un game-changer total. Su filosofía 'Aflojale a la Toti' nos enseñó 
          a ser más auténticos y menos rígidos en nuestras campañas. El resultado: triplicamos nuestras 
          conversiones y mejoramos significativamente la percepción de marca."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Aflojale a la Toti - Leonel Lombardo</h3>
        <p className="text-gray-300 mb-4">
          Estrategias de marketing innovadoras que impulsan tu negocio hacia el éxito.
        </p>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <span className="mr-2">📧</span>
            leonel@aflojale.com
          </p>
          <p className="flex items-center">
            <span className="mr-2">📱</span>
            +54 11 1234-5678
          </p>
          <p className="flex items-center">
            <span className="mr-2">📍</span>
            Buenos Aires, Argentina
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Servicios</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Redes Sociales</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Aflojale a la Toti - Leonel Lombardo. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}