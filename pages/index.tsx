import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayouts } from '../components/layouts/MainLayouts'
import { Navbar } from '../components/Navbar'


export default function Home() {
  return (
    <MainLayouts title='Home'>
      <h1 className='title'>
      Ir a <Link href="/about"> About</Link>
    </h1>

    <p className='description'>
      Get started by editing{' '}
      <code className='code'>pages/index.tsx</code>
    </p>
  </MainLayouts>
  )
}
