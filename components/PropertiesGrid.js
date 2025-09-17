import { useState } from "react";

const cards = new Array(9).fill(0).map((_,i)=>({
  id:i,
  title: 'Horizonte Residence',
  img: '/card'+((i%9)+1)+'.png'
}))
export default function PropertiesGrid(){
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section>
      <div className="props-header">
        <h2 style={{fontSize: 40}}>Confira todos os <br/><span style={{color: 'var(--primary)'}}>empreendimentos da Liva</span></h2>
        <div className="filters">
          {showFilters && (
            <>
              <select>
                <option>Estágio do empreendimento</option>
              </select>
              <select>
                <option>Localização</option>
              </select>
              <select>
                <option>Tipo de imóvel</option>
              </select>
            </>
          )}

          <button
            className="btn btn-properties"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            {showFilters ? "X FILTROS" : "FILTROS"}
          </button>
        </div>
      </div>
      <div className="grid">
        {cards.map(c=>(
          <div key={c.id} className="card">
            <img src={c.img}/>
            <div className="meta">
              {<div style={{background:'rgba(0,0,0,0.6)',padding:'6px 8px',borderRadius:6,fontSize:12,display:'inline-block',marginBottom:6}}>{c.tag}</div>}
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:18}}>
        <button className="load-more" style={{margin:42}}>CARREGAR MAIS</button>
      </div>
    </section>
  )
}
