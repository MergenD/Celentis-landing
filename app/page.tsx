import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <header className='sticky top-0 z-50 bg-black border-b-4 border-[#304CC9]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Image
                src='/logo_full.svg'
                alt='Celentis Logo'
                width={140}
                height={35}
                className='brightness-0 invert'
              />
            </div>
            <nav className='hidden md:flex items-center gap-8'>
              <a
                href='#home'
                className='text-white font-bold text-sm uppercase tracking-wider hover:text-[#304CC9] transition-colors'
              >
                Home
              </a>
              <a
                href='#about'
                className='text-white font-bold text-sm uppercase tracking-wider hover:text-[#304CC9] transition-colors'
              >
                About Us
              </a>
              <a
                href='#contact'
                className='text-white font-bold text-sm uppercase tracking-wider hover:text-[#304CC9] transition-colors'
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section
          id='home'
          className='min-h-screen bg-white flex items-center justify-center border-b-8 border-black'
        >
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <h1 className='text-6xl md:text-8xl font-black text-black leading-tight'>
                    CELENTIS
                  </h1>
                  <div className='h-2 w-32 bg-[#304CC9]'></div>
                </div>
                <p className='text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed'>
                  AI • ML • WEB DEVELOPMENT
                </p>
                <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl'>
                  Transforming ideas into intelligent solutions. We specialize
                  in artificial intelligence, machine learning, and cutting-edge
                  web development that drives your business forward.
                </p>
                <div className='flex gap-4 pt-4'>
                  <a
                    href='#contact'
                    className='bg-[#304CC9] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors border-4 border-black'
                  >
                    Get Started
                  </a>
                  <a
                    href='#about'
                    className='bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors border-4 border-black'
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='bg-gray-900 p-12 border-8 border-black'>
                  <div className='space-y-6'>
                    <div className='h-4 bg-[#304CC9] w-3/4'></div>
                    <div className='h-4 bg-gray-700 w-full'></div>
                    <div className='h-4 bg-gray-700 w-5/6'></div>
                    <div className='h-4 bg-[#304CC9] w-2/3'></div>
                    <div className='h-4 bg-gray-700 w-4/5'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='about'
          className='min-h-screen bg-black text-white py-20 border-b-8 border-[#304CC9]'
        >
          <div className='max-w-7xl mx-auto px-6 lg:px-10'>
            <div className='space-y-16'>
              <div className='text-center space-y-4'>
                <h2 className='text-5xl md:text-7xl font-black uppercase tracking-tight'>
                  About Us
                </h2>
                <div className='h-2 w-24 bg-[#304CC9] mx-auto'></div>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                <div className='bg-gray-900 p-8 border-4 border-white space-y-4'>
                  <div className='text-[#304CC9] text-5xl font-black mb-4'>
                    AI
                  </div>
                  <h3 className='text-2xl font-bold uppercase'>
                    Artificial Intelligence
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    We build intelligent systems that learn, adapt, and evolve.
                    From natural language processing to computer vision, we
                    create AI solutions that solve real-world problems.
                  </p>
                </div>

                <div className='bg-gray-900 p-8 border-4 border-white space-y-4'>
                  <div className='text-[#304CC9] text-5xl font-black mb-4'>
                    ML
                  </div>
                  <h3 className='text-2xl font-bold uppercase'>
                    Machine Learning
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Data-driven insights power our machine learning models. We
                    develop predictive analytics, recommendation systems, and
                    automated decision-making tools that transform your data
                    into competitive advantages.
                  </p>
                </div>

                <div className='bg-gray-900 p-8 border-4 border-white space-y-4'>
                  <div className='text-[#304CC9] text-5xl font-black mb-4'>
                    WEB
                  </div>
                  <h3 className='text-2xl font-bold uppercase'>
                    Web Development
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Modern, scalable, and performant web applications. We craft
                    digital experiences using cutting-edge technologies,
                    ensuring your platform is fast, secure, and user-centric.
                  </p>
                </div>
              </div>
              <div className='bg-gray-900 p-12 border-4 border-white mt-12'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                  <div className='space-y-6'>
                    <h3 className='text-3xl font-black uppercase text-[#304CC9]'>
                      Our Mission
                    </h3>
                    <p className='text-lg text-gray-300 leading-relaxed'>
                      At Celentis, we believe technology should be accessible,
                      powerful, and transformative. We combine the latest
                      advances in AI and ML with exceptional web development to
                      create solutions that don&apos;t just meet your needs—they
                      exceed expectations.
                    </p>
                    <p className='text-lg text-gray-300 leading-relaxed'>
                      Every project is an opportunity to push boundaries,
                      challenge conventions, and deliver results that make a
                      difference.
                    </p>
                  </div>
                  <div className='space-y-4'>
                    <div className='bg-black p-6 border-2 border-white'>
                      <div className='text-4xl font-black text-[#304CC9] mb-2'>
                        100+
                      </div>
                      <div className='text-gray-300 uppercase text-sm font-bold'>
                        Projects Delivered
                      </div>
                    </div>
                    <div className='bg-black p-6 border-2 border-white'>
                      <div className='text-4xl font-black text-[#304CC9] mb-2'>
                        50+
                      </div>
                      <div className='text-gray-300 uppercase text-sm font-bold'>
                        Happy Clients
                      </div>
                    </div>
                    <div className='bg-black p-6 border-2 border-white'>
                      <div className='text-4xl font-black text-[#304CC9] mb-2'>
                        24/7
                      </div>
                      <div className='text-gray-300 uppercase text-sm font-bold'>
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='min-h-screen bg-white py-20 border-b-8 border-black'
        >
          <div className='max-w-7xl mx-auto px-6 lg:px-10'>
            <div className='space-y-16'>
              <div className='text-center space-y-4'>
                <h2 className='text-5xl md:text-7xl font-black text-black uppercase tracking-tight'>
                  Contact Us
                </h2>
                <div className='h-2 w-24 bg-[#304CC9] mx-auto'></div>
                <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
                  Ready to transform your business? Let&apos;s discuss how we
                  can help you achieve your goals.
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                  <div className='bg-black p-8 border-4 border-[#304CC9]'>
                    <h3 className='text-2xl font-black text-white uppercase mb-6'>
                      Get In Touch
                    </h3>
                    <div className='space-y-6'>
                      <div className='flex items-start gap-4'>
                        <div className='text-[#304CC9] text-2xl font-black'>
                          →
                        </div>
                        <div>
                          <div className='text-white font-bold uppercase text-sm mb-1'>
                            Email
                          </div>
                          <a
                            href='mailto:info@celentis.dev'
                            className='text-gray-300 hover:text-[#304CC9] transition-colors'
                          >
                            info@celentis.dev
                          </a>
                        </div>
                      </div>
                      <div className='flex items-start gap-4'>
                        <div className='text-[#304CC9] text-2xl font-black'>
                          →
                        </div>
                        <div>
                          <div className='text-white font-bold uppercase text-sm mb-1'>
                            Phone
                          </div>
                          <a
                            href='tel:+1234567890'
                            className='text-gray-300 hover:text-[#304CC9] transition-colors'
                          >
                            +90 548 412 1546
                          </a>
                        </div>
                      </div>
                      <div className='flex items-start gap-4'>
                        <div className='text-[#304CC9] text-2xl font-black'>
                          →
                        </div>
                        <div>
                          <div className='text-white font-bold uppercase text-sm mb-1'>
                            Location
                          </div>
                          <div className='text-gray-300'>
                            30 N Gould St, STE R
                            <br />
                            Sheridan, WY 82801, USA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-100 p-8 border-4 border-black'>
                    <h3 className='text-xl font-black text-black uppercase mb-4'>
                      Why Choose Celentis?
                    </h3>
                    <ul className='space-y-3 text-gray-700'>
                      <li className='flex items-start gap-2'>
                        <span className='text-[#304CC9] font-black'>■</span>
                        <span>Expert team with years of experience</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-[#304CC9] font-black'>■</span>
                        <span>Cutting-edge technology stack</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-[#304CC9] font-black'>■</span>
                        <span>Agile development methodology</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-[#304CC9] font-black'>■</span>
                        <span>Dedicated support and maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='bg-gray-900 p-8 border-4 border-black'>
                  <h3 className='text-2xl font-black text-white uppercase mb-6'>
                    Send Us A Message
                  </h3>
                  <form className='space-y-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-white font-bold uppercase text-sm mb-2'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        required
                        className='w-full bg-black text-white border-4 border-white px-4 py-3 font-bold focus:border-[#304CC9] focus:outline-none transition-colors'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-white font-bold uppercase text-sm mb-2'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        className='w-full bg-black text-white border-4 border-white px-4 py-3 font-bold focus:border-[#304CC9] focus:outline-none transition-colors'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='message'
                        className='block text-white font-bold uppercase text-sm mb-2'
                      >
                        Message
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        rows={6}
                        required
                        className='w-full bg-black text-white border-4 border-white px-4 py-3 font-bold focus:border-[#304CC9] focus:outline-none transition-colors resize-none'
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='w-full bg-[#304CC9] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors border-4 border-white'
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-black text-white border-t-4 border-[#304CC9]'>
        <div className='max-w-7xl mx-auto px-6 lg:px-10 py-12'>
          <div className='grid md:grid-cols-3 gap-8 mb-8'>
            <div>
              <Image
                src='/logo_full.svg'
                alt='Celentis Logo'
                width={140}
                height={35}
                className='brightness-0 invert mb-4'
              />
              <p className='text-gray-400 text-sm'>
                Transforming ideas into intelligent solutions through AI, ML,
                and web development.
              </p>
            </div>
            <div>
              <h4 className='font-black uppercase text-sm mb-4 text-[#304CC9]'>
                Quick Links
              </h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#home'
                    className='text-gray-400 hover:text-[#304CC9] transition-colors text-sm'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className='text-gray-400 hover:text-[#304CC9] transition-colors text-sm'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-gray-400 hover:text-[#304CC9] transition-colors text-sm'
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-black uppercase text-sm mb-4 text-[#304CC9]'>
                Services
              </h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
          <div className='border-t-2 border-gray-800 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p className='text-gray-400 text-sm'>
                © {new Date().getFullYear()} Celentis. All rights reserved.
              </p>
              <div className='flex gap-6'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-[#304CC9] transition-colors text-sm font-bold'
                >
                  Privacy
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-[#304CC9] transition-colors text-sm font-bold'
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
