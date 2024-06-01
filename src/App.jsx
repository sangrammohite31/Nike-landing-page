import Nav from './Components/Nav'
import { Hero,Subscribe,Services,Specialoffers,Footer,CstomerReview,PopularProducts,SuperQuality} from './section';
 const  App=()=> 
  (
    <main className="relative">
     <Nav/>
      <section className="x1:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>
<section className="">
<PopularProducts/>

</section>
<section className="padding">
  <SuperQuality/>

</section>
<section className="padding">
  <Services/>

</section>



    </main>
  )

export default App;