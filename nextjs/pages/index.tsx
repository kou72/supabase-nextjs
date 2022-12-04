import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import type { Session } from '@supabase/supabase-js'
import Auth from '../components/Auth'
import Account from '../components/Account'

export default function Home() {
  const [session, setSession] = useState<Session | null>()

  useEffect(() => {
    const initialAuthState = async () => {
      const session = (await supabase.auth.getSession()).data.session
      setSession(session)

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }
    initialAuthState()
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  )
}
