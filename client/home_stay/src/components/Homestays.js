import React, { useEffect, useState } from "react";
import styles from "../styles/Homestays.module.css";
// import homestays from "../assets/homestayData";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getHomestays } from "../services/homestayService";
import { Toaster, toast } from "react-hot-toast";
export default function Homestays() {
  const [homestay, setHomestay] = useState([]);
  const navigate = useNavigate();

  const handleClick =(h)=>{
    navigate('/singlehomestay',{state:h}); 
  }

  const fetchHomestay = async() => {
   
    try {
      const homedata =  await getHomestays();
      console.log(homedata.data);
      setHomestay(homedata.data);

    } catch (error) {
      toast.error("Login is needed!",{
        position:'top-center'
      });
      setTimeout(() => {
        navigate('/guestlogin');
      },1000);
      return;
      // console.log("inside catch block");
      // console.log(error.response.data);
      // console.log(error.response.status);
    }

  };

  useEffect(()=>{
    fetchHomestay();
  });

  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}/>
      <h2 className={styles.headings}>Homestays</h2>
      <Container>
        <Row >
          {homestay.map((h) => {
            return (
              <Col className={styles.cols} sm="12" md="6" lg="4">
                <Card className={styles.cards} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={h.images[0]} />
                  <Card.Body>
                    <Card.Title>price : {h.price.single}</Card.Title>
                    <Card.Text>
                      <div>
                         {
                              h.homestaytitle
                         },
                      </div>
                     <span>
                     {'\u00A0'}
                      {
                        h.city
                      },{'\u00A0'}
                      {
                        h.state
                      }
                      </span>
                    </Card.Text>
                    
                    <Button variant="primary" onClick={()=>{handleClick(h)}} >View</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
