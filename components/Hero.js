import {useState} from 'react'
const slides = [
  {title:'Barra View', subtitle:'Apartamento com 3 dormitórios sendo 1 suíte', img:'/hero1.png'},
  {title:'Barra View', subtitle:'Apartamento com 3 dormitórios sendo 1 suíte', img:'/hero2.png'},
  {title:'Barra View', subtitle:'Apartamento com 3 dormitórios sendo 1 suíte', img:'/hero3.png'}
]
export default function Hero(){
  const [i,setI] = useState(0)
  function next(){ setI((i+1)%slides.length) }
  function prev(){ setI((i-1+slides.length)%slides.length) }
  const s = slides[i]
  return (
    <section className="container" style={{marginTop:16}}>
      <div className="hero-slide">
        <img src={s.img} alt={s.title}/>
        <div className="hero-content">
          <div className="tag">PRÉ LANÇAMENTO</div>
          <h2 className="hero-title">{s.title}</h2>
          <div className="hero-sub">{s.subtitle}</div>
          <div className="hero-cta"><button className="btn btn-outline-hero">SAIBA MAIS</button></div>
        </div>
        <button className="hero-nav prev" onClick={prev}>&larr;</button>
        <button className="hero-nav next" onClick={next}>&rarr;</button>
      </div>
    </section>
  )
}
