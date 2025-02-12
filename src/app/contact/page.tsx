import PageHeading from '@/Components/Common/PageHeading/PageHeading'
import Contact from '@/Components/Contact/Contact'

export default function page() {
  return (
    <main>
      <PageHeading heading="Contact" src="/servicesbg.jpg" altTxt="contactbg"/>
      <Contact/>
    </main>
  )
}
