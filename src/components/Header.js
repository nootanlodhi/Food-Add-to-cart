import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { DLT } from '../redux/action/action';

const Header = () => {

  const [price,setPrice]=useState(0);

  const getData=useSelector((state)=>state.cartreducer);
  // console.log(getData);
  // console.log(getData.carts.length);

  const dispatch=useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const dtl=(id)=>{
      dispatch(DLT(id));
    }

    const total=()=>{
      let price=0;
      getData.carts.map((e,i)=>{
        
        price=e.price+price;
        setPrice(price);
        
      });
    }

    useEffect(()=>{
      total();
    },[total])

  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height:'60px'}}>
    <Container>
    <NavLink to='/' className='text-decoration-none text-light mx-3'>Add to Cart</NavLink>
    <Nav className="me-auto">
      <NavLink to='/cart' className='text-decoration-none text-light'>Home</NavLink>
    </Nav>
    <Badge badgeContent={getData.carts.length} color="primary"
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
    <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:'pointer'}}></i>
    </Badge>
    </Container>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getData.carts.length? 
          <div className='card_details' style={{width:'24rem',padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurent Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getData.carts.map((e)=>{
                    return(
                      <>
                       <tr>
                         <td>
                           <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                           <img src={e.imgdata} alt='' style={{width:'5rem',height:'5rem'}}/>
                           </NavLink>
                         </td>
                         <td>
                           <p>{e.rname}</p>
                           <p>Price: ₹{e.price}</p>
                           <p>Quentity: {e.qnty}</p>
                           <p style={{color:'red', fontSize:20,cursor:'pointer'}} onClick={()=>dtl(e.id)}><i className='fas fa-trash smalltrash'></i></p>
                         </td>
                         <td style={{color:'red', fontSize:20,cursor:'pointer'}}>
                         <i className='fas fa-trash largetrash' onClick={()=>dtl(e.id)}></i>
                         </td>
                       </tr>
                      </>
                    )
                  })
                }
                <p className='text-center'>Total: ₹{price}</p>
                
              </tbody>
            </Table>
          </div>:
        
        <div className='card_details d-flex justify-content-center align-items-center' style={{width:'24rem',padding:10,position:'relative'}}>
            <i className='fas fa-close smallclose' style={{position:'absolute',right:20,top:2,fontSize:23,cursor:'pointer'}} onClick={handleClose}></i>
        <p style={{fontSize:22}}>Your cart is empty</p>
        <img src='https://i.gifer.com/origin/fa/facea5f248b44d00d0c2e8ca37902267_w200.gif' alt='' className='emptycart_img' style={{width:'5rem',padding:10}}/>
        </div>
}
      </Menu>
  </Navbar>
    </>
  )
}

export default Header