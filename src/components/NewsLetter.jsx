import { useState } from 'react'
import Button from './Button'
import CopyRight from './CopyRight'

const NewsLetter = () => {
  const [error, setError] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    const patern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!patern.test(event.target.email.value)) setError('Please inserta valid email')
  }

  setTimeout(() => {
    setError('')
  }, 4000)

  return (
    <div className='news-letter'>
      <form onSubmit={submitForm}>
        <div className="form-control">
          <input type="text"
            name="email"
            placeholder='Updates in your inbox...'
            style={{
              border: error ? '1px solid red' : '',
              color: error ? 'red' : 'inherit'
            }}
          />
          <Button>Go</Button>
        </div>
        <div className="form-error">
          {error && <span className='error'>{error}</span>}
        </div>
      </form>
      <CopyRight/>
    </div>
  )
}

export default NewsLetter
