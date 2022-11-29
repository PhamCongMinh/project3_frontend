import { Routes } from '../routes/constant'
import Link from 'next/link'

export default function Home() {
  return <Link href={Routes.HOME} replace></Link>
}
