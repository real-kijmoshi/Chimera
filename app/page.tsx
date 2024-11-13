"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Users, Sparkles, Menu, X, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = () => {
    const snapElements = document.querySelectorAll(".snap-start");
    const snapIndex = Math.min(snapElements.length - 1, Math.floor(scrollY / window.innerHeight) + 1);
    const nextSnap = snapElements[snapIndex];
    console.log(nextSnap);
    nextSnap.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav className={`fixed w-full z-50  ${
        scrollY > 50 ? "bg-black/80 backdrop-blur-lg" : ""
      }`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Chimera
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#community" className="hover:text-purple-400 transition-colors">Community</a>
              <a href="#safety" className="hover:text-purple-400 transition-colors">Safety</a>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg transition-all transform hover:scale-105">
                Open App
              </button>
            </div>

            <button 
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#community" className="hover:text-purple-400 transition-colors">Community</a>
              <a href="#safety" className="hover:text-purple-400 transition-colors">Safety</a>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg transition-all">
                Open App
              </button>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Snap Scroll Container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        {/* Hero Section */}
        <section className="snap-start min-h-screen flex items-center relative bg-gradient-to-b from-[#0A0A0B] to-[#13151A]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-20 relative">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Connect. Create. Conquer.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12">
                Where communities thrive and conversations come alive. Join millions building 
                the future of digital connection.
              </p>
              <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 bg-white p-2 rounded-full animate-bounce opacity-50 cursor-pointer"
            onClick={scroll}
          >
            <ArrowDown className="w-8 h-8 mx-auto text-black" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="snap-start min-h-screen flex items-center bg-[#13151A]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="w-8 h-8" />,
                  title: "Real-time Chat",
                  description: "Experience lightning-fast messaging with crystal-clear voice and video."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community First",
                  description: "Build and grow your community with powerful moderation tools."
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Custom Experience",
                  description: "Personalize your space with custom themes, roles, and integrations."
                }
              ].map((feature, index) => (
                <motion.div
                key={index}
                className="group bg-gradient-to-b from-purple-900/20 to-indigo-900/20 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: index * 0.2 
                }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="snap-start min-h-screen flex items-center bg-gradient-to-b from-[#13151A] to-[#0A0A0B]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: -40 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  >
  
                  Join a thriving community
                </motion.h2>
                <p className="text-xl text-gray-400 mb-8">
                  Discover servers filled with people who share your interests. From gaming to art, 
                  music to education - there&apos;s a place for everyone.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Gaming", "Art", "Music", "Tech", "Education", "Sports"].map((tag, index) => (
                    <motion.span
                      key={index}
                      className="bg-purple-900/30 border border-purple-500/30 px-4 py-2 rounded-lg text-purple-400"
                      initial={{ opacity: 0, x: 300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.2
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-[#1A1B1F] border border-white/10 rounded-2xl p-6">
                    {/* Mock community interface */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <motion.div 
                          key={item} 
                          className="flex items-center space-x-4"
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: item * 0.2
                          }}
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                          <div className="flex-1">
                            <div className="h-4 w-24 bg-white/10 rounded" />
                            <div className="h-3 w-32 bg-white/5 rounded mt-2" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section id="safety" className="snap-start min-h-screen flex items-center bg-[#0A0A0B]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Security at its core
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Built with privacy and security in mind. Advanced encryption, customizable privacy settings, 
                and powerful moderation tools keep your conversations safe.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Learn More About Safety
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="snap-start min-h-screen flex items-center bg-gradient-to-b from-[#0A0A0B] to-[#13151A]">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join millions (more like tens) of others in shaping the future of digital communities.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 px-12 py-6 rounded-lg font-medium text-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center mx-auto">
              Create Your Space
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 4 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                >
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}