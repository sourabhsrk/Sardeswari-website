import About from '@/Components/About/About'
import PageHeading from '@/Components/Common/PageHeading/PageHeading'

export default function page() {
  return (
    <main>
      <PageHeading heading="About Us" src="/aboutbg.jpg" altTxt="aboutbg"/>
      <About/>
    </main>
  )
}
