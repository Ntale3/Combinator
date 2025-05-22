import Form from 'next/form'
import SearchBarReset from './SearchBarReset'

const SearchBar = ({query}:{query?:string}) => {

    
    
  return (
 <Form action="/" scroll={false} className="search-form" id='fom'>
    <input 
    type="text"
    name="query"
    defaultValue={query}
    placeholder="search startUps"
    className="search-input"
    />
    <div className="flex gap-2">
       {query && <SearchBarReset/>}
       <button type='submit' className='search-btn text-white'>
        S
       </button>


    </div>
 </Form>
  )
}

export default SearchBar