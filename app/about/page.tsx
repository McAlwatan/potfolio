import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Brain,
  Award,
  BookOpen,
  Users,
  Coffee,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Ibrahim</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate software engineer dedicated to crafting exceptional digital experiences through innovative
              technology and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 animate-fade-in-up delay-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">My Journey</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  My journey into software development began during my computer science studies at university, where I
                  discovered the power of code to solve real-world problems. What started as curiosity quickly evolved
                  into a deep passion for creating digital solutions that make a meaningful impact.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the past 5 years, I've had the privilege of working with startups, established companies, and
                  individual entrepreneurs, helping them bring their visions to life through technology. Each project
                  has taught me something new and reinforced my belief that great software is built on understanding
                  both technical excellence and human needs.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  mentoring aspiring developers, or enjoying a good cup of coffee while planning the next big idea. I
                  believe in continuous learning and staying at the forefront of technological innovation.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 mr-3 text-black animate-float" />
                  <span>Coffee consumed: 2,847+ cups</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-3 text-black animate-float" />
                  <span>Lines of code written: 500,000+</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-black animate-float" />
                  <span>Years of experience: 5+</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-black animate-float" />
                  <span>Developers mentored: 15+</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-3 text-black animate-float" />
                  <span>Certifications earned: 8</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-3 text-black animate-float" />
                  <span>Open source contributions: 200+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-gray-50 animate-fade-in-up delay-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technical Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set spanning modern web technologies, cloud platforms, and development
              methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Code className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>Creating engaging user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#61DAFB] text-[#61DAFB]">
                        React
                      </Badge>
                      <Badge variant="outline" className="border-black text-black">
                        Next.js
                      </Badge>
                      <Badge variant="outline" className="border-[#3178C6] text-[#3178C6]">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="border-[#4FC08D] text-[#4FC08D]">
                        Vue.js
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Styling & Design</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#06B6D4] text-[#06B6D4]">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" className="border-[#CC6699] text-[#CC6699]">
                        Sass
                      </Badge>
                      <Badge variant="outline" className="border-[#DB7093] text-[#DB7093]">
                        Styled Components
                      </Badge>
                      <Badge variant="outline" className="border-[#F24E1E] text-[#F24E1E]">
                        Figma
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">State Management</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#764ABC] text-[#764ABC]">
                        Redux
                      </Badge>
                      <Badge variant="outline" className="border-[#2D3748] text-[#2D3748]">
                        Zustand
                      </Badge>
                      <Badge variant="outline" className="border-[#61DAFB] text-[#61DAFB]">
                        Context API
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Server className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Building robust server-side solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Runtime & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#339933] text-[#339933]">
                        Node.js
                      </Badge>
                      <Badge variant="outline" className="border-[#000000] text-[#000000]">
                        Express.js
                      </Badge>
                      <Badge variant="outline" className="border-[#3776AB] text-[#3776AB]">
                        Python
                      </Badge>
                      <Badge variant="outline" className="border-[#009688] text-[#009688]">
                        FastAPI
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">APIs & Integration</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#FF6C37] text-[#FF6C37]">
                        REST APIs
                      </Badge>
                      <Badge variant="outline" className="border-[#E10098] text-[#E10098]">
                        GraphQL
                      </Badge>
                      <Badge variant="outline" className="border-[#010101] text-[#010101]">
                        WebSocket
                      </Badge>
                      <Badge variant="outline" className="border-[#2496ED] text-[#2496ED]">
                        Microservices
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#000000] text-[#000000]">
                        JWT
                      </Badge>
                      <Badge variant="outline" className="border-[#EB5424] text-[#EB5424]">
                        OAuth
                      </Badge>
                      <Badge variant="outline" className="border-[#EB5424] text-[#EB5424]">
                        Auth0
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Database className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Database & Storage</CardTitle>
                <CardDescription>Managing data efficiently and securely</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Relational Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#336791] text-[#336791]">
                        PostgreSQL
                      </Badge>
                      <Badge variant="outline" className="border-[#4479A1] text-[#4479A1]">
                        MySQL
                      </Badge>
                      <Badge variant="outline" className="border-[#003B57] text-[#003B57]">
                        SQLite
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">NoSQL Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#47A248] text-[#47A248]">
                        MongoDB
                      </Badge>
                      <Badge variant="outline" className="border-[#DC382D] text-[#DC382D]">
                        Redis
                      </Badge>
                      <Badge variant="outline" className="border-[#FFCA28] text-[#FFCA28]">
                        Firebase
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">ORMs & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#2D3748] text-[#2D3748]">
                        Prisma
                      </Badge>
                      <Badge variant="outline" className="border-[#880000] text-[#880000]">
                        Mongoose
                      </Badge>
                      <Badge variant="outline" className="border-[#3ECF8E] text-[#3ECF8E]">
                        Supabase
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Globe className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Cloud & DevOps</CardTitle>
                <CardDescription>Deploying and scaling applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cloud Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#FF9900] text-[#FF9900]">
                        AWS
                      </Badge>
                      <Badge variant="outline" className="border-[#000000] text-[#000000]">
                        Vercel
                      </Badge>
                      <Badge variant="outline" className="border-[#00C7B7] text-[#00C7B7]">
                        Netlify
                      </Badge>
                      <Badge variant="outline" className="border-[#0080FF] text-[#0080FF]">
                        Digital Ocean
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Containerization</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#2496ED] text-[#2496ED]">
                        Docker
                      </Badge>
                      <Badge variant="outline" className="border-[#326CE5] text-[#326CE5]">
                        Kubernetes
                      </Badge>
                      <Badge variant="outline" className="border-[#2496ED] text-[#2496ED]">
                        Docker Compose
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">CI/CD & Monitoring</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#2088FF] text-[#2088FF]">
                        GitHub Actions
                      </Badge>
                      <Badge variant="outline" className="border-[#D33833] text-[#D33833]">
                        Jenkins
                      </Badge>
                      <Badge variant="outline" className="border-[#362D59] text-[#362D59]">
                        Sentry
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Smartphone className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Cross-platform mobile solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#61DAFB] text-[#61DAFB]">
                        React Native
                      </Badge>
                      <Badge variant="outline" className="border-[#000020] text-[#000020]">
                        Expo
                      </Badge>
                      <Badge variant="outline" className="border-[#02569B] text-[#02569B]">
                        Flutter
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Native Features</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Push Notifications</Badge>
                      <Badge variant="outline">Biometric Auth</Badge>
                      <Badge variant="outline">Camera Integration</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">App Store</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#007AFF] text-[#007AFF]">
                        iOS App Store
                      </Badge>
                      <Badge variant="outline" className="border-[#34A853] text-[#34A853]">
                        Google Play
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <Brain className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Emerging Technologies</CardTitle>
                <CardDescription>Staying ahead of the curve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#412991] text-[#412991]">
                        OpenAI API
                      </Badge>
                      <Badge variant="outline" className="border-[#FF6F00] text-[#FF6F00]">
                        TensorFlow
                      </Badge>
                      <Badge variant="outline" className="border-[#1C3C3C] text-[#1C3C3C]">
                        Langchain
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Web3 & Blockchain</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#627EEA] text-[#627EEA]">
                        Ethereum
                      </Badge>
                      <Badge variant="outline" className="border-[#F16822] text-[#F16822]">
                        Web3.js
                      </Badge>
                      <Badge variant="outline" className="border-[#363636] text-[#363636]">
                        Smart Contracts
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#654FF0] text-[#654FF0]">
                        WebAssembly
                      </Badge>
                      <Badge variant="outline" className="border-[#000000] text-[#000000]">
                        Service Workers
                      </Badge>
                      <Badge variant="outline" className="border-[#5A0FC8] text-[#5A0FC8]">
                        PWA
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 animate-fade-in-up delay-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
            <p className="text-xl text-gray-600">A timeline of my career journey and key achievements</p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-black slide-in-right">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Senior Full Stack Developer</h3>
                  <p className="text-lg text-gray-600">TechCorp Solutions</p>
                </div>
                <div className="text-gray-500">2022 - Present</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Led development of microservices architecture serving 100K+ daily active users</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Implemented CI/CD pipelines reducing deployment time by 75%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Mentored 5 junior developers and established coding standards</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-gray-400 slide-in-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                  <p className="text-lg text-gray-600">StartupXYZ</p>
                </div>
                <div className="text-gray-500">2020 - 2022</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Built MVP from scratch that secured $2M in Series A funding</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Developed real-time chat system handling 10K concurrent users</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Optimized database queries improving response time by 60%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-gray-400 slide-in-right">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Frontend Developer</h3>
                  <p className="text-lg text-gray-600">Digital Agency Pro</p>
                </div>
                <div className="text-gray-500">2019 - 2020</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Created responsive websites for 20+ clients across various industries</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Improved website performance scores by average of 40%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                  <span>Collaborated with design team to implement pixel-perfect UIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-20 bg-gray-50 animate-fade-in-up delay-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Achievements & Certifications</h2>
            <p className="text-xl text-gray-600">Recognition and continuous learning milestones</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-black shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <Award className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Professional Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <TrendingUp className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">Developer of the Year 2023</h4>
                      <p className="text-sm text-gray-600">TechCorp Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 mr-3 mt-0.5 text-yellow-600" />
                    <div>
                      <h4 className="font-semibold">Innovation Award</h4>
                      <p className="text-sm text-gray-600">Best Technical Solution 2022</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 mt-0.5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Team Leadership Excellence</h4>
                      <p className="text-sm text-gray-600">Successfully led 3 major projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="h-5 w-5 mr-3 mt-0.5 text-red-600" />
                    <div>
                      <h4 className="font-semibold">Performance Optimization</h4>
                      <p className="text-sm text-gray-600">Improved system efficiency by 80%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-4 text-black" />
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
                      <p className="text-sm text-gray-600">Amazon Web Services - 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">Google Cloud Professional Developer</h4>
                      <p className="text-sm text-gray-600">Google Cloud Platform - 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">MongoDB Certified Developer</h4>
                      <p className="text-sm text-gray-600">MongoDB University - 2022</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">React Advanced Patterns</h4>
                      <p className="text-sm text-gray-600">Meta (Facebook) - 2022</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white animate-fade-in-up delay-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 shadow-2xl group">
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Extraordinary</h2>
            <p className="text-xl mb-8 text-gray-300">
              Ready to bring your ideas to life? Let's discuss how my expertise can help achieve your goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
