import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ContactSection from '../components/ContactSection'
import PropertiesGrid from '../components/PropertiesGrid'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section className="container">
          <About />
        </section>
        <section className="container" style={{marginTop:24}}>
          <ContactSection />
        </section>
        <section className="container" style={{marginTop:40}}>
          <PropertiesGrid />
        </section>
      </main>
      <Footer />
    </div>
  )
}
