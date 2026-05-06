import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-8'>
      <h2 className='text-3xl'>404 NOT FOUND - Ở đây hem coá xe ớ</h2>
      <div><Link className='bg-white text-black p-4' href="/">Quay lại trang chủ</Link></div>
    </div>
  )
} 