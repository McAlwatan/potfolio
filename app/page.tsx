"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Globe } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-black z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Ibrahim</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-gray-600 transition-colors ${
                  activeSection === "home" ? "border-b-2 border-black" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-gray-600 transition-colors ${
                  activeSection === "about" ? "border-b-2 border-black" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-gray-600 transition-colors ${
                  activeSection === "contact" ? "border-b-2 border-black" : ""
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-black">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-100 w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-100 w-full text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-100 w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Ibrahim</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">Full Stack Developer & Software Engineer</p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems. Specializing in modern web technologies and
            scalable applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white hover:bg-gray-800"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-gray-700 mb-4">
                I'm Ibrahim, a dedicated software engineer with over 5 years of experience in building robust web
                applications and scalable systems. I thrive on turning complex requirements into clean, efficient code.
              </p>
              <p className="text-gray-700 mb-4">
                My journey in programming started with curiosity and has evolved into a passion for creating digital
                experiences that make a difference. I believe in writing code that is not only functional but also
                maintainable and elegant.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or mentoring aspiring developers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Frontend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Vue.js</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Database className="h-4 w-4 mr-2" />
                    Backend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">GraphQL</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    DevOps & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                    <Badge variant="outline">Linux</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-black">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    E-Commerce Platform
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Full-stack e-commerce solution with payment integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Built a complete e-commerce platform with user authentication, product management, and secure
                    payment processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-black">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Task Management App
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Collaborative project management tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">WebSocket</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Real-time collaboration tool with drag-and-drop functionality and team management features.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-black">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    API Analytics Dashboard
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Real-time API monitoring and analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Redis</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Comprehensive dashboard for monitoring API performance, usage patterns, and system health metrics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-black">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">ibrahim.dev@email.com</p>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <Github className="h-8 w-8 mx-auto mb-4" />
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">github.com/ibrahim</p>
              </CardContent>
            </Card>

            <Card className="border-black">
              <CardHeader>
                <Linkedin className="h-8 w-8 mx-auto mb-4" />
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">linkedin.com/in/ibrahim</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <Mail className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 Ibrahim. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
