export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:24}}>
        <div style={{width: 400}}>
          <img src="/logo-footer.png" alt="logo" style={{height:36}}/>
          <p>
            Duis aute irure dolor in reprehenderit<br/>
            in voluptate velit esse cillum dolore<br/>
            eu fugiat nulla pariatur.
          </p>
          <p style={{maxWidth:320,color:'#bcd3cf'}}>Liva - todos os direitos reservados.</p>
        </div>
        <div style={{flex:1}}>
          <h4 style={{color: "#06a87a"}}>NAVEGUE NO SITE</h4>
          <ul style={{listStyle:'none',padding:0, lineHeight:2}}>
            <li>HOME</li>
            <li>SOBRE A LIVA</li>
            <li>EMPREENDIMENTOS</li>
            <li>NOTICIAS</li>
            <li>CONTATO</li>
          </ul>
        </div>
        <div style={{width: 100, margin: 100}}>
          <img src="/social-media-ft.png" alt="map" style={{height:50}}/>
        </div>
        <div style={{width: 300, justifyContent:'flex-end', textAlign:'right'}}>
          <p>
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
          </p>
          <p style={{fontWeight: 'bold'}}>+55 (11) 99999-0000</p>
          <p>contato@liva.com.br</p>
          <button className="btn-footer">
            <img src="/whatsapp.png" alt="whatsapp" style={{height:20}}/>WHATSAPP
          </button>
        </div>
      </div>
    </footer>
  )
}
