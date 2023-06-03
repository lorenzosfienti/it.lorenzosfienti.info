import './App.scss'

function App() {
  const links = [
    {
      'link': 'https://www.lorenzosfienti.it',
      'name': 'Website'
    },
    {
      'link': 'https://www.linkedin.com/in/lorenzosfienti',
      'name': 'Linkedin'
    },
    {
      'link': 'https://twitter.com/lorenzosfienti',
      'name': 'Twitter'
    },
    {
      'link': 'https://github.com/lorenzosfienti',
      'name': 'Github'
    }
  ];
  return (
    <>
      <div className='App'>
        <header className='mb-4'>
          <h1 className='mb-4 mt-4'>Lorenzo Sfienti<small className='mt-2'>AWS, Terraform, Wordpress</small></h1>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='list-group'>
                {links.map((link) => (
                  <a key={link.name} href={link.link} target='_blank' rel='noreferrer' className='list-group-item'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
