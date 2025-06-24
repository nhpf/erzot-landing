import { ArrowRight, Clock, Globe, Zap, Users, CheckCircle, Mail, Lightbulb, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Smooth scroll utility function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Google Calendar scheduling function
const openGoogleCalendar = () => {
  // Open Google Calendar scheduling in a new window
  window.open(
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2rdh2Jz9mHXXE8RErMUewyf3q57pfkCqu853uSZ_D9CUaGhwNK2EABWiES-cq_mCLJssRGItOg?gv=true',
    '_blank',
    'noopener,noreferrer'
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Erzot" className="h-8" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={openGoogleCalendar}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building Digital Products with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Startup Agility
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Clockwork Precision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Founder-led engineers helping startups and enterprises bring ideas to market{" "}
              <strong>quickly and securely</strong>. We develop MVPs and scalable solutions as if they were our own – on-time, on-budget, every time.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="backdrop-blur-sm bg-white/40 rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="backdrop-blur-sm bg-white/40 rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-600 mb-2">45+</div>
                <div className="text-sm text-gray-600">Products Launched</div>
              </div>
              <div className="backdrop-blur-sm bg-white/40 rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="backdrop-blur-sm bg-white/40 rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Continents Served</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Founders First */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built by Founders,{" "}
                <span className="text-blue-600">For Founders</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Erzot was founded by <strong>startup entrepreneurs</strong> who have walked the same path as our clients. We know the challenges of iterating fast, scaling up, and meeting enterprise standards all at once.
                </p>
                <p>
                  That's why we <strong>dive in deep</strong> on every project – acting as true partners to our clients. When you work with Erzot, you get a team of experienced product builders who treat your venture like our own baby.
                </p>
                <p>
                  We combine <strong>startup agility</strong> with <strong>enterprise rigor</strong> – moving quickly but never cutting corners on security, compliance, or quality. Deadlines and budgets matter to us, and we have a get-it-done attitude to meet them.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Rapid Iteration</h3>
                    <p className="text-sm text-gray-600">Fast development cycles</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Ownership</h3>
                    <p className="text-sm text-gray-600">Your success is our success</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Security & Compliance</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade standards</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                    <p className="text-sm text-gray-600">Reliable and predictable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Idea to MVP{" "}
              <span className="text-blue-600">(and Beyond)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with you at every stage of your product journey, from initial concept to scaling success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover & Plan</h3>
                <p className="text-gray-600 mb-6">
                  We kick off every project by deeply understanding your business and vision. Through consulting workshops, market research, and technical assessments, we identify opportunities and craft a winning strategy.
                </p>
                <p className="text-gray-600">
                  Before a single line of code, we map out the product roadmap, user experience (UX), and technology stack to set you up for success.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Code className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design & Build</h3>
                <p className="text-gray-600 mb-6">
                  Our sweet spot is turning concepts into fully functional MVPs at lightning speed. We excel in UX/UI design and full-stack development, creating web and mobile applications that are user-friendly and scalable.
                </p>
                <p className="text-gray-600">
                  Whether it's a quick Proof-of-Concept to test an idea or a robust app ready for thousands of users, we deliver high-quality code on-time and on-budget.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale & Evolve</h3>
                <p className="text-gray-600 mb-6">
                  Launch is just the beginning. We offer dedicated teams to continuously improve your product, add new features, and ensure it scales smoothly as your user base grows.
                </p>
                <p className="text-gray-600">
                  Our long-term partnership services include performance optimization, maintenance, and even strategic product coaching. We become an extension of your team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Erzot */}
      <section id="why-us" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-purple-600">Erzot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another development team. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-sm bg-white/60 rounded-lg p-6 border border-white/20">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Founders First</h3>
              <p className="text-gray-600 text-sm">
                We're not just coders, we're entrepreneurs. We approach your product with a founder's mindset – focusing on product-market fit, user experience, and viability.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/60 rounded-lg p-6 border border-white/20">
              <Zap className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Rapid & Reliable</h3>
              <p className="text-gray-600 text-sm">
                Need to launch fast? We specialize in rapid development cycles to get your MVP out quickly, without ever compromising on quality or security.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/60 rounded-lg p-6 border border-white/20">
              <Globe className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Global Perspective</h3>
              <p className="text-gray-600 text-sm">
                With project experience across Europe, Latin America, and the USA, our team brings a global outlook to development and understands diverse markets.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/60 rounded-lg p-6 border border-white/20">
              <CheckCircle className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                In the past 5+ years, we've delivered dozens of successful projects, helping clients achieve digital transformation and tangible growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          </div>
          
          <div className="backdrop-blur-sm bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 text-center leading-relaxed">
              "First of all, I would like to say that we at Ábaco are immensely satisfied with your work and the results already achieved. In tests, we noticed our site has improved a lot in searches and it brought us an increase in potential customers. I must mention the <strong>seriousness and quality</strong> of your work, as well as always meeting the deadlines."
            </blockquote>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">Letícia Gomes</div>
              <div className="text-gray-600">Financial Administrator at Ábaco Consultoria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to turn your idea into reality? Wherever you're based – from Silicon Valley to here in <a href="https://www.investporto.pt/en/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline decoration-white underline-offset-2">Porto</a> – we're ready to collaborate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 border-2 border-transparent transition-all duration-300"
              onClick={() => window.location.href = 'mailto:hello@erzot.com?subject=Project Inquiry&body=Hi Erzot team,%0D%0A%0D%0AI would like to discuss a potential project with you.%0D%0A%0D%0ABest regards'}
            >
              <Mail className="mr-2 h-5 w-5" />
              hello@erzot.com
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-white via-blue-50 to-white text-blue-700 hover:text-blue-800 border-2 border-white/60 hover:border-white/90 text-lg px-8 py-6 font-semibold transition-all duration-300 backdrop-blur-sm"
              style={{
                boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 10px 20px -5px rgba(147, 51, 234, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.15))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -10px rgba(59, 130, 246, 0.4), 0 15px 30px -5px rgba(147, 51, 234, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 10px 20px -5px rgba(147, 51, 234, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={openGoogleCalendar}
            >
              Schedule a Call
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            Time zones are no obstacle for us. We're excited to hear about your project!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo_white.png" alt="Erzot" className="h-8" />
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-gray-400 mb-1">MVPs with Precision</div>
              <div className="text-sm text-gray-400">© 2025 Erzot. Made in <a href="https://www.investporto.pt/en/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline decoration-gray-400 underline-offset-2">Porto</a>, serving clients worldwide.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
