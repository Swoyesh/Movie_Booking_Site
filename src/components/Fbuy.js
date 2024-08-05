import React, { useContext } from "react";
import "../fbuy.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../logo.jpg'
import axios from "axios";
import { saveAs} from "file-saver";
import movieContext from "../Context/movieContext";

const Fbuy = () => {
  const context = useContext(movieContext)
  const {user} = context
    const location = useLocation()
    const value = location.state
    const {selectedSeat , price, time, date, title} = value
    const data = { selectedSeat, price, time, date, title }
    const generatePDF = async () => {
          await axios.post('http://localhost:5000/seats/generatePDF', data).then(()=>
            axios.get('http://localhost:5000/seats/fetchPDF', {responseType:'blob'})
          .then((res)=>{
            const pdfBlob = new Blob([res.data], {type:'application/pdf'})
            saveAs(pdfBlob, "ReceiptDocument.pdf")
          })
          .then(()=>{
            axios.post('http://localhost:5000/seats/deliverPDF', user.email).then(response=>{
              console.log(response)
              alert(response.data)
            })
          })
        )}
  
  return (
    <>
      <div className="container" style={{ padding: "60px 0px" }}>
        <div className="total" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h5 style={{ color: "white", fontWeight: "bold", margin: 0 }}>My Cart</h5>
          <table width="100%" border="0" style={{ marginTop: "10px" }} className="bb">
            <tbody>
              <tr className="bb">
                <td style={{ color: "#db322b", textAlign: "left" }} className="bb">Ticket Total</td>
                <td style={{ textAlign: "right" }} className="bb">Rs. {price.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="stable" style={{display: "flex", width: "100%", justifyContent: "flex-end", flexDirection: "row"}}>
          <table width="50%" border="0" style={{ marginTop: "10px" }} className="bb">
            <tbody>
              <tr className="bb">
                <td style={{textAlign: "left", fontWeight: "100", padding: "12px 0px", fontSize: "14.5px" }} className="bb">Sub Total</td>
                <td style={{ textAlign: "right", fontWeight: "100", padding: "12px 0px", fontSize: "14.5px" }} className="bb">Rs. {price.toFixed(2)}</td>
              </tr> 
            </tbody>
          </table>
          </div>
          <div className="ttable" style={{display: "flex", width: "100%", justifyContent: "flex-end", flexDirection: "row"}}>
          <table width="50%" border="0" style={{ marginTop: "10px" }} className="bc">
            <tbody>
              <tr className="bb">
                <td style={{textAlign: "right", color: "#db322b"}} className="bc">Grand Total</td>
                <td style={{ textAlign: "right", padding: "12px 0px", color: "#ffa84e"}} className="bc">Rs. {price.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="hline" style={{height: "0px"
          }}>
          <span style={{ color: "white", padding: "0px 15px", textAlign: "center" }}>Or</span>
        </div>
        <div className="ldiv">
            <h5 className="lhead">Buy Online With</h5>
            <ul className="book">
                <li>
                   <span className="sstyle" onClick={generatePDF}><img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp" style={{height: "40px", width: "55px"}}></img></span>
                </li>
                <li>
                    <span className="sstyle" onClick={generatePDF}><img src="data:image/png;base64,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" style={{height: "40px", width: "55px"}}></img></span>
                </li>
            </ul>
        </div>
        </div>
      </div>
      <div className="container p_section" style={{backgroundColor: "#091138", color: "white", fontSize: "14px", paddingBottom: "15px", marginBottom: "65px"}}>
        <div className="small_cont">
            <div className="row_div" style={{display:"flex"}}>
                <div className="frow">
                    <div className="items">
                        <img src={logo} width="130px" height="52px"></img>
                        <br></br><br></br>
                        <div className="socials">
                            <ul>
                                <li><Link to = "https://www.facebook.com/bigmoviesnepal"><i class="fa-brands fa-facebook"></i></Link></li>
                                <li><Link to = "https://www.instagram.com/bigmovies_official"><i class="fa-brands fa-instagram"></i></Link></li>
      <li><Link to = "https://twitter.com/BigmoviesNepal"><i class="fa-brands fa-square-twitter"></i></Link></li>
      <li><Link ><i class="fa-brands fa-whatsapp"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="srow">
                    <div className="items">
                        <h4>QUICKLINKS</h4>
                        <ul className="links">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Moments</li>
                            <li>Ticket Rate</li>
                            <li>Contact</li>
                            <li>Career</li>
                        </ul>
                    </div>
                </div>
                <div className="trow">
                    <div className="items">
                        &nbsp;
                    </div>
                </div>
                <div className="frow">
                    <div className="contact">
                        <h3 className="trials">
                            For Booking
                        </h3>
                        <ul className="finale"> 
                            <li>
                                For Marketing and enquiries:<br>
                                </br>Email:hr@bigmovies.com.np
                            </li>
                            <li>
                                For Complains and Support<br></br>
                                Email:pradesh@bigmovies.com.np
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lfooter">
                <div className="insider">
                    <div className="sf">
                        <h5 style={{fontSize: "12px", marginTop: "10px", marginBottom: "10px", fontWeight: "600", color: "#888888"}}>
                            Copyright @ 2017 Bigmovies | 4th Floor NLIC  City Center Mail, 33, Kamalpokhari, Kathmandu, Nepal |
                        <span style={{fontSize: "12px", marginTop: "10px", marginBottom: "10px", fontWeight: "600", color: "red"}}> Terms & Conditions</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Fbuy;