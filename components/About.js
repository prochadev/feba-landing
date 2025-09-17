export default function About(){
  return (
    <section className="container">
      <div className="about-grid">
        <div className="about-img">
          <img src="/about.png" alt="sobre"/>
        </div>
        <div>
          <h2 style={{fontSize: 40}}>Construimos confiança e <span style={{color: 'var(--primary)'}}>realizamos sonhos!</span></h2>
          <p>Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar. Espaços que entregam histórias de vida e que são desenvolvidos para que você viva momentos incríveis ao lado de sua família.</p>
          <button className="btn btn-outline" style={{marginTop:32}}>SAIBA MAIS</button>
        </div>
      </div>
    </section>
  )
}
