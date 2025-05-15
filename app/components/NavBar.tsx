
import { auth ,signIn,signOut} from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
  const session= await auth()
  return (
    <header className='px-6 py-3 bg-white '>
        <nav className='flex justify-between items-center'>
            <Link href='/'>
            <Image src='/logo.png' alt='Logo' width={144} height={63}/>
            </Link>

            {/*  */}
            <div className='flex items-center justify-center gap-5 text-black'>
                {session&&session?.user?(
                  <>
                    <Link href='startup/create'>
                      <span className='font-bold text-[20px]'>Create</span>
                    </Link>

                    <form action={async()=>{
                      "use server";
                        await signOut({redirectTo:'/'});
                    }}>
                     <button type='submit'>
                     <span className='text-[#EF4444] text-[20px]'>Logout</span>
                     </button>
                    </form>
                    <Link href={`user/${session?.user.id}`}>
                    <span>{session?.user?.name}</span>
                    </Link>
                  </>
                ):(
                 <form action={async()=>{
                  "use server";
                    await signIn('github')
                 }}>
                  <button type='submit'>
                  <span className='text-[20px] font-bold'>Login</span>
                  </button>
                 </form>
                
                
                )}

                


            </div>
            
        </nav>
    </header>
  )
}

export default NavBar