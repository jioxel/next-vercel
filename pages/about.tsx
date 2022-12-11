import Head from "next/head"
import Link from "next/link"
import { MainLayouts } from "../components/layouts/MainLayouts"
import { Navbar } from "../components/Navbar"
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function about() {
  return (
    <DarkLayout>
    <MainLayouts title='Home'>
    <h1 className='title'>
    Ir a <Link href="/about"> About</Link>
  </h1>

  <p className='description'>
    Get started by editing{' '}
    <code className='code'>pages/index.tsx</code>
  </p>
  </MainLayouts></DarkLayout>


  )
}
