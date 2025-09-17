export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:24}}>
        <div>
          <img src="/logo-placeholder.png" alt="logo" style={{height:36}}/>
          <p style={{maxWidth:320,color:'#bcd3cf'}}>Liva - todos os direitos reservados.</p>
        </div>
        <div style={{flex:1}}>
          <h4>NAVEGUE NO SITE</h4>
          <ul style={{listStyle:'none',padding:0}}>
            <li>HOME</li>
            <li>SOBRE A LIVA</li>
            <li>EMPREENDIMENTOS</li>
          </ul>
        </div>
        <div>
          <h4>CONTATO</h4>
          <p>+55 (11) 99999-0000</p>
          <p>contato@liva.com.br</p>
        </div>
      </div>
    </footer>
  )
}
