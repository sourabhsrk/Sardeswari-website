import "./MenuItemsStyles.css";
import MenuItemCard from "../Common/MenuItemCard";
import MenuCms from "../../../public/cms/MenuItems.model.json";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItemType} from "@/types/commonTypes";

export default function MenuItems() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemCards = (key: string, item: any) => {
    return (
      <Accordion defaultExpanded sx={{backgroundColor: '#F9F9F9'}} key={key}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="h2" sx={{fontSize: { xs: '24px', md: '30px'}, fontFamily: 'inherit', fontWeight: '600'}}>{item?.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="itemContainer">
            {item?.value && (Object.entries(item.value) as [string, MenuItemType][])?.map(([key, item]: [string, MenuItemType]) => {
              return <MenuItemCard key={key} item={item} />;
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    )
  }
  return (
    <div className="menuPage">
      <p className="note">Note: All the Dishes are pure vegetarian.</p>
      {Object.entries(MenuCms)?.map(([key,item])=>{
        return itemCards(key,item);
      })}
    </div>
  );
}
