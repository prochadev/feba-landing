export default function Header(){
  return (
    <header className="container site-header">
      <div className="brand">
        <img src="/logo.png" alt="logo" style={{height:50}}/>
      </div>
      <nav className="nav">
        <a href="#">HOME</a>
        <a href="#about">SOBRE A LIVA</a>
        <a href="#properties">EMPREENDIMENTOS</a>
        <a href="#">NOTÍCIAS</a>
        <a href="#contact">CONTATO</a>
        <div className="media">
          <img src="/social-media.png" alt="redes-sociais" style={{height:28}}/>
        </div>
        <button className="btn btn-primary">
          <img src="/whatsapp.png" alt="whatsapp" style={{height:20}}/>WHATSAPP
        </button>
      </nav>
    </header>
  )
}
