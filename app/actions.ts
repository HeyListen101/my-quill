'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';

export async function signin(formData: FormData) {
  const supabase = await createClient()

  const data = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  const res = await supabase.from("users").select("password").eq("username", data.username);
  const passwords = res.data

  console.log(res)
  if (passwords != null) {
    passwords.forEach(({password} : {password: string}) => {
      console.log(password)
      console.log(data.password)
      if (password == data.password) {
        redirect("/")
      }  
    })
  }
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.from("users").insert([data]);
}