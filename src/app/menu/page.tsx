import PageHeading from "@/Components/Common/PageHeading/PageHeading";
import MenuItems from "@/Components/MenuItems/MenuItems";

export default function page() {
  return (
    <main>
      <PageHeading heading="Our Menu" src="/menubg.jpg" altTxt="menubg"/>
      <MenuItems />
    </main>
  )
}
