import Head from 'next/head'
import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayouts'
import { Navbar } from '../../components/Navbar'

function contact() {
  return (
     <MainLayouts title='Contact'>
      <h1 className="title">
         Ir a <Link href="/"> Home</Link>
       </h1>

       <p className="description">
         Get started by editing{' '}
         <code className="code">pages/Contact.tsx</code>
       </p>
     </MainLayouts>
  )
}
export default contact