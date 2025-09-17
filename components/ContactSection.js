import {useState} from 'react'
export default function ContactSection(){
  const [form, setForm] = useState({nome:'',telefone:'',email:'',mensagem:''})
  const [sent, setSent] = useState(false)
  function onChange(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function onSubmit(e){ e.preventDefault(); setSent(true); console.log('Simulated send', form) }
  return (
    <div className="contact-section" style={{backgroundImage:'url(/bg-contact.png)', width:'100%', backgroundSize: 'cover', backgroundPosition: '100%', padding: 10}}>
      <div className="container contact-inner">
        <div style={{width:320, height: '100%', padding: '20px 0'}}>
          <h2 style={{fontSize: 26, color: 'white', textAlign: 'start'}}>Fale agora <br></br>com um consultor <br></br>de vendas</h2>
          <p style={{color: 'white', textAlign: 'start'}}>Tire suas dúvidas e conheça de perto o seu novo jeito de morar.</p>
          <div className="consultants" style={{marginTop:46}}>
            <img src="/avatars.png" alt="avatares" style={{width:160,height:90}} />
          </div>
        </div>
        <div>
          <form className="contact-form" onSubmit={onSubmit}>
            <h1 style={{fontSize: 20, marginBottom: 12}}>Fale agora mesmo com a Liva</h1>
              <input name="nome" placeholder='Nome' value={form.nome} onChange={onChange} className="input" />
              <input name="telefone" placeholder='Telefone' value={form.telefone} onChange={onChange} className="input" />
              <input name="email" placeholder='E-mail' value={form.email} onChange={onChange} className="input" />
              <textarea name="mensagem" placeholder='Mensagem' value={form.mensagem} onChange={onChange} className="input textarea" />
              <button className="btn-contact" type="submit">ENVIAR MENSAGEM</button>
            {sent && <div style={{marginTop:12,color:'green'}}>Mensagem enviada (simulada)</div>}
          </form>
        </div>
      </div>
    </div>
  )
}
