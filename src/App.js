import {useQuery} from 'react-query'
import Item from './Item'

function App() {
  const {data,isLoading,error} = useQuery(['posts'],getPosts)
  
async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await res.json()
    return response
  }
  
  if(error) return(
    <div>Failed</div>
  )
  if(isLoading) return(
    <div>loading...</div>
    )
    
    
  return (
   <>
   <Item data={data}/>
   </>
  )
}

export default App
