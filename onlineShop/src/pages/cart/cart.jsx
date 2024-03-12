import { Link } from "react-router-dom"

export const Cart = ()=>{
    return(
        <>
        <section className= "pageBoard">
            <div className="container">
            <div className="boardContent">
                <h3 className="pageTitle">Shop</h3>
                <div className="breadcrumb">
                <Link className="pageLink" to="/">Home</Link> / <span>Cart</span>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}