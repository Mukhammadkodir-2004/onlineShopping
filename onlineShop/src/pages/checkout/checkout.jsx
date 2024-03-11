import { Link } from "react-router-dom"
import "./checkout.css";
import Cart1 from "../../assets/images/cart1.jpg";
import Verify from "../../assets/images/verified.png";
import { Footer } from "../../components";
export const Checkout =()=>{
    return(
        <>
        <section className= "pageBoard">
          <div className="container">
            <div className="boardContent">
              <h3 className="pageTitle">Shop</h3>
              <div className="breadcrumb">
                <Link className="pageLink" to="/">Home</Link> / <span>Checkout</span>
              </div>
            </div>
          </div>
        </section>
        <section className="paymentDetails">
           <div className="container">
           <div className="paymentContent">
           <div className="paymentBox">
                <div className="billingDetails">
                    <p className="billingTitle">Billing Details</p>
                    <div className="formBox">
                        <input className="checkoutInputs" type="text"placeholder="FULL NAME" />
                        <input className="checkoutInputs" type="text" placeholder="ADDRESS" />
                        <div className="zipCodeForm">
                            <input className="zipForm" type="text" placeholder="ZIP CODE" />
                            <input className="cityForm"  type="text" placeholder="CITY" />
                        </div>
                        <input className="checkoutInputs" type="text" placeholder="COUNTRY" />
                    </div>
                </div>
                <div className="paymentMethod">
                    <p className="paymentTitle">Payment Method</p>
                    <div className="cardBox">
                        <p className="cardDetails">Credit Cart Details (Secure payment)</p>
                        <input className="cardInput" type="text" placeholder="CARD NUMBER*  **** **** **** ****" />
                        <input className="cardInput" type="text" placeholder="EXPIRY DATE (MM/YY)" />
                        <input className="cardInput" type="text" placeholder="CARD CODE* CVC" />
                        <button className="orderBtn">Place Order</button>
                    </div>
                </div>
            </div>
            <div className="orderSummery">
                <p className="orderTitle">Order Summary</p>
                <div className="orderInformation">
                    <div className="orderItems">
                    <div className="orderItemsBox">
                    <div className="orderImg">
                    <img src={Cart1} alt="cart 1" width={80} height={107} />
                    </div>
                    <div className="orderItemInfo">
                        <Link className="orderLink">
                            <p className="orderItemTitle">
                            Ambassador Heritage 1921
                            </p>
                        </Link>
                            <p className="orderCost">1 x $249</p>
                            <p className="orderRemove">Remove</p>
                    </div>
                    </div>
                    <div className="discountBox">
                        <p className="discountText">Have a discount ?</p>
                        <Link className="orderLink">
                        <p className="discountText">
                            entire it here
                        </p>
                        </Link>
                    </div>
                    <div className="totalBox">
                        <p className="totalText">Subtotal: <span className="totalCost">$190</span> </p>
                        <p className="totalText">Shipping: <span className="totalCost">Free</span> </p>
                        <p className="total">Total <span className="totalCosts">$250</span> </p>
                    </div>
                    <img className="verify" src={Verify} alt="verify" width={330} />
                    </div>
                </div>
            </div>
           </div>
           </div>
        </section>
        <Footer />
        </>
    )
}