import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT,ADD,RMV } from "../redux/action/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const { id } = useParams();
  console.log(id);

  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send =(e)=>{
    dispatch(ADD(e));
 }

  const dlt=(id)=>{
    dispatch(DLT(id));
    navigate("/");
  }

  const rmv=(item)=>{
    dispatch(RMV(item))
  }

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          {data.map((element) => {
            return (
              <>
                <div className="iteamsdetails">
                  <div className="items_img">
                    <img
                      src={element.imgdata}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant:</strong> {element.rname}
                          </p>
                          <p>
                            <strong>Price: ₹</strong> {element.price}
                          </p>
                          <p>
                            <strong>Dishes:</strong> {element.address}
                          </p>
                          <p>
                            <strong>Total: ₹</strong> 300
                          </p>
                          <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:'pointer',backgroundColor:'#ddd', color:'#111'}}>
                  <span style={{fontSize:24}} onClick={()=>rmv(element)}>-</span>
                  <span style={{fontSize:24}}>{element.qnty}</span>
                  <span style={{fontSize:24}} onClick={()=>send(element)}>+</span>
                </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong>{" "}
                            <span
                              style={{
                                backgroundColor: "green",
                                color: "#fff",
                                padding: "2px 5px",
                              }}
                            >
                              {element.rating} ★
                            </span>
                          </p>

                          <p>
                            <strong>Order Review :</strong>{element.somedata}
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={()=>dlt(element.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </div>
              </>
            );
          })}
          
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
