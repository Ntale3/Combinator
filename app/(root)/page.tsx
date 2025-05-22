import SearchBar from "../components/SearchBar";
import StartUpCard from "../components/StartUpCard";



export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
 const query=(await searchParams).query;
 const posts=[{
  _createdAt:new Date(),
  views:4,
  author:{id:1,name:'ntale'},
  _id:1,
  description:'This is the Description',
  image:'',
  category:'Robots',
  title:'We Robots'
 }]

  return (
    <>
 <section className="pink_container pattern">
   <h1 className="heading ">Pitch your startUps <br/> get with investors</h1>
   <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Pitches, and Get Noticed in virtual competitions
   </p>
   <SearchBar query={query}/>
 </section>

 <section className="section_container">
<p className="text-30-semibold">
{query?`Search results for ${query}`:'All Startups'}
</p>

<ul className="mt-7 card_grid">
{
  posts?.length>0 ?(
    posts.map((post,index)=>(
      <StartUpCard key={post?._id}{...post}/>
    ))
  ):(
    <p></p>
  )
}
</ul>
 </section>
</>
 
  );
}
