import PageHeading from '@/Components/Common/PageHeading/PageHeading'

export default function page() {
  return (
    <main>
      <PageHeading heading="Job" src="/jobbg.jpg" altTxt="jobbg"/>
      <div style={{padding: '20px'}}>
        <p style={{color: '#BD3336', fontSize: '25px'}}>Note : There are no job openings at the moment. However, we will keep you informed if any opportunities arise.</p>
      </div>
    </main>
  )
}
