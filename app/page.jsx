import ContactUs from '@/containers/ContactUs'
import Hero from '@/containers/Hero'
import LatestProperties from '@/containers/LatestProperties'
import PropertiesByArea from '@/containers/PropertiesByArea'
import PropertiesByLocation from '@/containers/PropertiesByLocation'
import ServicesSection from '@/containers/ServicesSection'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className='hero__section py-[120px] px-[10px] sm:px-[25px] xl:px-[50px] justify-center'>
        <Hero />
      </main>

      <section className='py-[85px] px-[10px] sm:px-[25px] xl:px-[50px]'>
        <PropertiesByArea />
      </section>

      <section className='py-[85px] px-[10px] sm:px-[25px] xl:px-[50px]'>
        <ServicesSection />
      </section>

      <section className='py-[85px] px-[10px] sm:px-[25px] xl:px-[50px]'>
        <LatestProperties />
      </section>

      <section className='py-[85px] px-[10px] sm:px-[25px] xl:px-[50px]'>
        <PropertiesByLocation />
      </section>

      <section className='py-[85px] px-[10px] sm:px-[25px] xl:px-[50px]'>
        <ContactUs />
      </section>
    </>
  )
}
