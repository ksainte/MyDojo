import Homepage from "./Homepage";
import Blog from "./Blog_Page";
import Disciplines from "./Disciplines_Page";
import SchedulePage from "./Schedule_Page";
import CotisationPage from "./Cotisation_Page";
import ProfesseursPage from "./Professeurs_Page";
import ContactPage from "./Contact_Page";


export default function Home() {
  return (
    <main style={{width:'100vw'}}>
     <div className='App_body'>
        <Homepage/>
        <Blog/>
        <Disciplines/>
        <SchedulePage/>
        <CotisationPage/>
        <ProfesseursPage/>
        <ContactPage/>
      </div>
    </main>
  );
}
