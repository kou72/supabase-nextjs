import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSingUp = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({
        email: email,
        password: 'password',
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSingIn = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: 'password',
      })
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleSingUp(email)
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Send magic link'}</span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleSingIn(email)
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'singin'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
