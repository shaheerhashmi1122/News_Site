import AuthorLayout from '@/Layouts/AuthLayout'
import React from 'react'
import UpdateNews from "@/Components/AuthorComponents/UpdateNews"
export default function Update({auth}) {
  return (
    <>
      <AuthorLayout auth={auth}>
    <UpdateNews/>
    
      </AuthorLayout>
    </>
  )
}
