import {useState} from 'react'
export default function ContactSection(){
  const [form, setForm] = useState({nome:'',telefone:'',email:'',mensagem:''})
  const [sent, setSent] = useState(false)
  function onChange(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function onSubmit(e){ e.preventDefault(); setSent(true); console.log('Simulated send', form) }
  return (
    <div className="contact-section">
      <div className="container contact-inner">
        <div>
          <h2 style={{fontSize: 26}}>Fale agora com um consultor de vendas</h2>
          <p>Tire suas dúvidas e conheça de perto o seu novo jeito de morar.</p>
          <div className="consultants" style={{marginTop:12}}>
            <img src="/avatars.png" alt="avatares" style={{width:160,height:90}} />
          </div>
        </div>
        <div>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>Nome
              <input name="nome" value={form.nome} onChange={onChange} className="input" />
            </label>
            <label>Telefone
              <input name="telefone" value={form.telefone} onChange={onChange} className="input" />
            </label>
            <label>E-mail
              <input name="email" value={form.email} onChange={onChange} className="input" />
            </label>
            <label>Mensagem
              <textarea name="mensagem" value={form.mensagem} onChange={onChange} className="input textarea" />
            </label>
            <div style={{marginTop:12}}>
              <button className="btn btn-primary" type="submit">ENVIAR MENSAGEM</button>
            </div>
            {sent && <div style={{marginTop:12,color:'green'}}>Mensagem enviada (simulada)</div>}
          </form>
        </div>
      </div>
    </div>
  )
}
