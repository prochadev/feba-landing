const cards = new Array(9).fill(0).map((_,i)=>({
  id:i,
  title: 'Horizonte Residence',
  img: '/card'+((i%3)+1)+'.jpg',
  tag: i%2===0 ? 'PRÉ LANÇAMENTO' : ''
}))
export default function PropertiesGrid(){
  return (
    <section>
      <h3>Confira todos os empreendimentos da Liva</h3>
      <div className="filters">
        <select><option>Estágio do empreendimento</option></select>
        <select><option>Localização</option></select>
        <select><option>Tipo de imóvel</option></select>
        <button className="btn btn-outline">X FILTROS</button>
      </div>
      <div className="grid">
        {cards.map(c=>(
          <div key={c.id} className="card">
            <img src={c.img} alt={c.title}/>
            <div className="meta">
              {c.tag && <div style={{background:'rgba(0,0,0,0.6)',padding:'6px 8px',borderRadius:6,fontSize:12,display:'inline-block',marginBottom:6}}>{c.tag}</div>}
              <div style={{fontSize:16}}>{c.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:18}}>
        <button className="load-more">CARREGAR MAIS</button>
      </div>
    </section>
  )
}
