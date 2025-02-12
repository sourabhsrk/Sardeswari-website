import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function MenuItemCard({item}: any) {
  return (
    <div className="menuItemCard">
      <div className="itemdetails">
        <p className="itemName"><strong>{item?.name}</strong></p>
        <p className="itemDesc">{item?.description}</p>
        <div className="itemPQ">
          <p className='itemPrice'><strong>Price:&nbsp;</strong><CurrencyRupeeIcon sx={{fontSize: {xs: '12px', sm: '14px'}}}/>{item?.price}</p>
          {item?.quantity && <p className='itemQuantity'><strong>Qty:&nbsp;</strong>{item?.quantity}</p>}
        </div>
      </div>
      <div className="itemImage">
        <img src={item?.imgsrc} alt={item?.altTxt}/>
      </div>
    </div>
  )
}
