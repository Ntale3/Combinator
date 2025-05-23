
import Image from 'next/image';
import Link from 'next/link'
interface statupType{
   _createdAt?:any;
  views:number;
  author:{id:number,name:string};
  _id:number;
  description:string;
  image:string;
  category:string;
  title:string;
}

function dateFormat(date:string){
    return new Date(date).toLocaleDateString('en-US',{
        month:'long',
        day:'numeric',
        year:'numeric'
    })
}



const StartUpCard = ({_createdAt,views,author,_id,description,image,category,title}:statupType) => {

  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>{dateFormat(_createdAt)}</p>
            <div className='flex gap-1.5'>
                <p className='text-red-900'>Views</p>
                <span className='text-red-900'>{views}</span>
                
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${author.id}`}>
                   <p className='text-16-medium line-clamp-1'>{author.name}</p>
                </Link>

                <Link href={`/startup/${_id}`}>
                <h3 className='text-26-semibold line-clamp-1'>
                    {title}
                </h3>
                </Link>
            </div>
           <Link href={`/user/${author.id}`}>
           <Image src='https://placehold.co/48x48' alt='placeholder' width={48} height={48} className='rounded-full'/>
           </Link>
        </div>
        <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>
        {description}
        </p>
        <img src={image} alt="image" className='startup-card_img' />
        </Link>

        <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category.toLocaleLowerCase()}`}>
        <p className='text-16-medium'>{category}</p>
        </Link>
        <button className='startup-card_btn' >
           <Link href={`startup/${_id}`}>
            Details
           </Link>
        </button>
        </div>
    </li>
  )
}

export default StartUpCard;