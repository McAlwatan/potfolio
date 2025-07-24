import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, Users, Award, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gray-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-16 transform transition-all duration-1000 hover:scale-105 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              Ibrahim
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-700 font-light animate-fade-in-up animation-delay-400">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-600 animate-fade-in-up animation-delay-600">
              Software Engineer & Digital Architect
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-700 leading-relaxed animate-fade-in-up animation-delay-800">
              Crafting exceptional digital experiences through innovative code. Specializing in scalable web
              applications, modern frameworks, and cutting-edge technologies that drive business growth and user
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up animation-delay-1000">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-black hover:text-white shadow-lg transition-all duration-300 hover:shadow-xl bg-transparent transform hover:scale-105 hover:-translate-y-1"
                >
                  Discover My Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                >
                  Start a Conversation
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1200">
              {[
                { icon: Github, href: "https://github.com/McAlwatan" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ially/" },
                { icon: Mail, href: "ibrahim.ikikolo@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110 hover:-translate-y-1 animate-bounce-in"
                  style={{ animationDelay: `${1400 + index * 200}ms` }}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Code, number: "9+", label: "Years Experience" },
              { icon: Zap, number: "50+", label: "Projects Completed" },
              { icon: Users, number: "25+", label: "Happy Clients" },
              { icon: Award, number: "5+", label: "Technologies Mastered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:text-gray-600">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of recent projects that demonstrate my expertise in full-stack development, user experience
              design, and innovative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Enterprise-level online marketplace",
                tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
                detail:
                  "Built a comprehensive e-commerce solution handling 10,000+ daily transactions with advanced inventory management, real-time analytics, and multi-vendor support.",
                metric: "300% increase in conversion rate",
              },
              {
                title: "SaaS Analytics Dashboard",
                description: "Real-time business intelligence platform",
                tags: ["Next.js", "Python", "MongoDB", "Nest.js"],
                detail:
                  "Developed an AI-powered analytics platform processing 1M+ data points daily with predictive insights, custom reporting, and automated alerts.",
                metric: "50% faster decision making",
              },
              {
                title: "Mobile Banking App",
                description: "Secure financial management solution",
                tags: ["React Native", "Express.js", "Flutter", "AWS"],
                detail:
                  "Created a secure mobile banking application with biometric authentication, real-time transactions, and advanced fraud detection systems.",
                metric: "99.9% uptime achieved",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 transform animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Star className="h-5 w-5 text-black transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-125" />
                    <ExternalLink className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1" />
                  </div>
                  <CardTitle className="text-xl transition-all duration-300 group-hover:text-gray-600">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="transition-all duration-300 hover:scale-105 animate-fade-in"
                        style={{ animationDelay: `${index * 200 + tagIndex * 100}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{project.detail}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-1 transition-all duration-300 group-hover:text-green-500" />
                    <span>{project.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent transform hover:scale-105 hover:-translate-y-1"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in-up animation-delay-400">
              Let's collaborate on your next project and create digital solutions that exceed expectations.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up animation-delay-600"
              >
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
