import logo from './assets/logo.png'

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <div className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt="logo" className='mr-2' />
            <div>PMA</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
