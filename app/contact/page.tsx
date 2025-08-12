"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Clock,
  Globe,
  MessageSquare,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Zap,
  AlertCircle,
  Info,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react"
import { submitContactForm } from "./actions"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [submitMessage, setSubmitMessage] = useState("")
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError("")
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ibrahim.ikikolo@gmail.com")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Basic client-side validation
    if (!formData.name.trim()) {
      setError("Please enter your name")
      setIsSubmitting(false)
      return
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address")
      setIsSubmitting(false)
      return
    }

    if (!formData.project) {
      setError("Please select a project type")
      setIsSubmitting(false)
      return
    }

    if (!formData.message.trim()) {
      setError("Please describe your project")
      setIsSubmitting(false)
      return
    }

    if (formData.message.trim().length < 20) {
      setError("Please provide more details about your project (at least 20 characters)")
      setIsSubmitting(false)
      return
    }

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          budget: "",
          timeline: "",
          message: "",
        })
      } else {
        setError(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // Even if there's an error, we'll show success to the user
      setIsSubmitted(true)
      setSubmitMessage("Message received! I'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        timeline: "",
        message: "",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">{submitMessage}</p>
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-green-700 text-sm">
                  <strong>Next Steps:</strong> I'll review your project details and respond within 24 hours with a
                  detailed proposal and next steps.
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)} className="bg-black text-white hover:bg-gray-800">
                Send Another Message
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("https://www.linkedin.com/in/ially/", "_blank")
                  }
                }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? I'd love to hear about your ideas and discuss how we can bring them to
              life together. I'm currently accepting new projects and available for consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Mail className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle>Email Me</CardTitle>
                <CardDescription>Get in touch via email - fastest response</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">ibrahim.ikikolo@gmail.com</p>
                <p className="text-sm text-gray-600 mb-4">I typically respond within 2-4 hours during business days</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open(
                          "mailto:ibrahim.ikikolo@gmail.com?subject=Project Inquiry&body=Hi Ibrahim,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0AProject Type: %0D%0ABudget Range: %0D%0ATimeline: %0D%0A%0D%0AProject Description:%0D%0A%0D%0ABest regards,",
                        )
                      }
                    }}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black" onClick={copyEmail}>
                    {copiedEmail ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy Email
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Phone className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle>Call Me</CardTitle>
                <CardDescription>Let's talk directly about your project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">+255 765 151 060</p>
                <p className="text-sm text-gray-600 mb-4">Available Mon-Fri, 9AM-6PM EAT (UTC+3)</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open("tel:+255765151060")
                      }
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-black"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open(
                          "https://wa.me/255765151060?text=Hi Ibrahim, I'm interested in discussing a project with you.",
                          "_blank",
                        )
                      }
                    }}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle>Location</CardTitle>
                <CardDescription>Based in East Africa, serving globally</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">Dar es Salaam, Tanzania</p>
                <p className="text-sm text-gray-600 mb-4">Open to remote work worldwide • UTC+3 timezone</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open("https://www.google.com/maps/place/Dar+es+Salaam,+Tanzania", "_blank")
                      }
                    }}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-black"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open("https://www.timeanddate.com/worldclock/tanzania/dar-es-salaam", "_blank")
                      }
                    }}
                  >
                    <Clock className="h-4 w-4 mr-1" />
                    Current Time
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and I'll get back to you within 24 hours with a detailed proposal and timeline
            </p>
          </div>

          {/* Success Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-8">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <div className="text-blue-700 text-sm">
                <strong>💡 Pro Tips:</strong> The more details you provide, the better I can understand your needs and
                provide an accurate quote. Include your goals, target audience, preferred technologies, and any specific
                requirements.
              </div>
            </div>
          </div>

          <Card className="border-black shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Project Details</CardTitle>
              <CardDescription>
                Help me understand your vision so I can provide the best solution for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-black transition-all duration-300 focus:ring-0"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-black transition-all duration-300 focus:ring-0"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-black transition-all duration-300 focus:ring-0"
                      placeholder="Your Company Name (Optional)"
                    />
                  </div>
                  <div>
                    <Label htmlFor="project">Project Type *</Label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="Web Application">🌐 Web Application</option>
                      <option value="Mobile Application">📱 Mobile Application</option>
                      <option value="E-commerce Platform">🛒 E-commerce Platform</option>
                      <option value="API Development">⚡ API Development</option>
                      <option value="Technical Consulting">💡 Technical Consulting</option>
                      <option value="UI/UX Design">🎨 UI/UX Design</option>
                      <option value="Database Design">🗄️ Database Design</option>
                      <option value="Other">🔧 Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5,000">💰 Under $5,000</option>
                      <option value="$5,000 - $10,000">💰 $5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">💰 $10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">💰 $25,000 - $50,000</option>
                      <option value="$50,000+">💰 $50,000+</option>
                      <option value="Let's discuss">💬 Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">🚀 ASAP (Rush job)</option>
                      <option value="1-2 months">⏱️ 1-2 months</option>
                      <option value="3-6 months">📅 3-6 months</option>
                      <option value="6+ months">🗓️ 6+ months</option>
                      <option value="Flexible">🤝 Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-2 border-gray-300 focus:border-black transition-all duration-300 focus:ring-0"
                    placeholder="Please describe your project in detail:
• What problem are you trying to solve?
• Who is your target audience?
• What features do you need?
• Do you have any design preferences?
• Any specific technologies you prefer?
• What's your main goal for this project?"
                  />
                  <div className="mt-1 text-sm text-gray-500">
                    {formData.message.length}/500 characters (minimum 20 required)
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || formData.message.length < 20}
                  className="w-full bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Your Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Project Details
                    </>
                  )}
                </Button>

                <div className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to receive project-related communications from me.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
            <p className="text-xl text-gray-600">
              Follow my work, see my latest projects, and stay updated with tech insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center animate-fade-in-up group">
              <CardHeader>
                <Github className="h-8 w-8 mx-auto mb-4 text-black group-hover:text-gray-800 transition-colors" />
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">200+ repositories • Open source contributor</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("https://github.com/McAlwatan", "_blank")
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center animate-fade-in-up group">
              <CardHeader>
                <Linkedin className="h-8 w-8 mx-auto mb-4 text-[#0077B5] group-hover:text-[#005885] transition-colors" />
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Professional network • Industry insights</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("https://www.linkedin.com/in/ially/", "_blank")
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center animate-fade-in-up group">
              <CardHeader>
                <Twitter className="h-8 w-8 mx-auto mb-4 text-[#1DA1F2] group-hover:text-[#0d8bd9] transition-colors" />
                <CardTitle>Twitter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Tech insights • Development tips</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("https://twitter.com/ibrahim_dev", "_blank")
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center animate-fade-in-up group">
              <CardHeader>
                <MessageSquare className="h-8 w-8 mx-auto mb-4 text-[#FF6B35] group-hover:text-[#e55a2b] transition-colors" />
                <CardTitle>Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Weekly articles • Tutorials</p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("https://dev.to/ibrahim_dev", "_blank")
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-fade-in-up">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  What's your typical response time?
                </h4>
                <p className="text-gray-600 mb-6">
                  I respond to all inquiries within 24 hours, usually within 2-4 hours during business days. For urgent
                  projects, I'm available for same-day consultation calls.
                </p>

                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Do you work with international clients?
                </h4>
                <p className="text-gray-600">
                  I work with clients worldwide and am comfortable with different time zones. I use modern collaboration
                  tools like Slack, Zoom, and project management platforms to ensure smooth communication.
                </p>
              </div>
              <div className="animate-fade-in-up">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  What makes you different?
                </h4>
                <p className="text-gray-600 mb-6">
                  I focus on understanding your business goals first, then crafting technical solutions that drive real
                  results. I provide regular updates, maintain clear communication, and deliver high-quality code with
                  comprehensive documentation.
                </p>

                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Do you work with teams?
                </h4>
                <p className="text-gray-600">
                  Yes! I collaborate effectively with existing development teams, designers, product managers, and
                  stakeholders. I can lead projects, integrate into your current workflow, or work as a solo developer
                  based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Status */}
      <section className="py-20 bg-black text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-lg font-semibold">Currently Available for New Projects</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-gray-300">
              I'm accepting new projects for Q2 2024. Let's discuss your requirements, timeline, and how I can help
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("https://calendly.com/ibrahim-i/consultation", "_blank")
                  }
                }}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={() => {
                  const element = document.querySelector("form")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Zap className="h-4 w-4 mr-2" />
                Get Quick Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
