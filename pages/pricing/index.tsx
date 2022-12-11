import Link from "next/link"
import { MainLayouts } from "../../components/layouts/MainLayouts"

const index = () => {
  return (
    <MainLayouts title="pricing">
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
export default index