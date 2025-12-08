'use client';

export const Contact = () => {
  const handleSubmit = () => console.log('Hello');
  return (
    <section id='contact' className='min-h-screen bg-white py-20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='space-y-16'>
          <div className='text-center space-y-4'>
            <h2 className='text-5xl md:text-7xl font-black text-black uppercase tracking-tight'>
              Contact Us
            </h2>
            <div className='h-2 w-24 bg-[#304CC9] mx-auto'></div>
            <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
              Ready to transform your business? Let&apos;s discuss how we can
              help you achieve your goals.
            </p>
          </div>
          <div className='grid grid-rows-2 gap-12'>
            <div className='space-y-8'>
              <div className='bg-black p-8 border-4 border-[#304CC9]'>
                <h3 className='text-2xl font-black text-white uppercase mb-6'>
                  Get In Touch
                </h3>
                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='text-[#304CC9] text-2xl font-black'>→</div>
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
                    <div className='text-[#304CC9] text-2xl font-black'>→</div>
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
                    <div className='text-[#304CC9] text-2xl font-black'>→</div>
                    <div>
                      <div className='text-white font-bold uppercase text-sm mb-1'>
                        Location
                      </div>
                      <div className='text-gray-300'>
                        30 N Gould St, STE R Sheridan, WY 82801, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='bg-gray-100 p-8 border-4 border-black flex-1'>
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
              <div className='bg-gray-900 p-8 border-4 border-black flex-1'>
                <h3 className='text-2xl font-black text-white uppercase mb-6'>
                  Send Us A Message
                </h3>
                <form onSubmit={handleSubmit} className='space-y-6'>
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
                  <button
                    type='submit'
                    className='w-full bg-[#304CC9] cursor-pointer text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors border-4 border-white'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
