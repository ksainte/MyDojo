import Homepage from "./Homepage";
import Blog from "./Blog_Page";



export default function Home() {
  return (
    <main style={{width:'100vw'}}>
     <div className='App_body'>
        <Homepage/>
        <Blog/>
      </div>
    </main>
  );
}
