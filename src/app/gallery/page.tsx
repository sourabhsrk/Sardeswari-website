import PageHeading from '@/Components/Common/PageHeading/PageHeading'
import Gallery from '@/Components/Gallery/Gallery'

export default function page() {
  return (
    <main>
      <PageHeading heading="Gallery" src="/gallerybg.jpg" altTxt="gallerybg"/>
      <Gallery/>
    </main>
  )
}
