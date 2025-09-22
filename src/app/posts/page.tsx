export default async function posts() {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  return(
    <div className="justify-center items-center flex flex-col">
    <h1 className="text-5xl mt-[2%] mb-2.5 font-bold">
      Posts
      </h1>
      <ul>
        {data.posts.map((post:{id:number;title:string})=>(
          <li key={post.id} className="mb-2"><a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">{post.title}</a></li>
        ))}
      </ul>
      </div>
  )
}
