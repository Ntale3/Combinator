'use client'
import Link from 'next/link'
function SearchBarReset() {

    const reset=()=>{
        const form=document.querySelector('.search-form') as HTMLFormElement;
        if(form){
            form.reset();
        }
    }
  return (
   <button type="reset" onClick={reset}>
               <Link href='/' className='search-btn text-white'>
               X
               </Link> 

            </button>
  )
}

export default SearchBarReset