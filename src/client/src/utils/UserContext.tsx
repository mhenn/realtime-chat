// copied from supabase examples
// https://github.com/supabase/examples-archive/blob/main/supabase-js-v1/todo-list/expo-todo-list/components/UserContext.tsx

import React, { useEffect, useState, createContext, useContext } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'

export const UserContext = createContext<{ user: User | null; session: Session | null }>({
  user: null,
  session: null,
})

export const UserContextProvider = (props: any) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const session = await supabase.auth.getSession()
    setSession(session)
    setUser(session?.user ?? null)
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`)
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => {
      authListener!.unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    session,
    user,
  }
  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
