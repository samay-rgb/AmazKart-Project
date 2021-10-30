import React,{useState} from 'react'

export default function BuyerForm() {
    const [role,setRole] = useState(true);
    console.log(role);
    return (
        <div>
            <form className="m-3">
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control medium-field" id="name" aria-describedby="username" />
                    <div id="fullname" className="form-text">Enter full name.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="User-name" className="form-label">Username</label>
                    <input type="text" className="form-control medium-field" id="User-name" aria-describedby="username" />
                    <div id="username" className="form-text">Please add a username.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control medium-field" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control medium-field" id="exampleInputPassword1" placeholder="Password"/>
                    <div id="pswd" className="form-text">Enter your password.</div>
                    </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact</label>
                    <input type="number" className="form-control medium-field" id="contact" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Enter your contact number</div>
                </div>
                <div className="mb-3 small-field" >
                <label htmlFor="Select" className="form-label">Role</label>
                <select id="Select" className="form-select" onChange={()=>{setRole(!role);}}>
                    <option>Buyer</option>
                    <option>Seller</option>
                </select>
                </div>
                <div className= {role ? "mb-3" : "hide"}>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">Area Pincode</label>
                    <input type="number" className="form-control small-field" id="pincode" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Enter your area pincode.</div>
                </div>
                </div>
                <div className= {role ? "hide" : "mb-3"}>
                    <div className="mb-3">
                        <label htmlFor="w-state" className="form-label">Warehouse State</label>
                        <input type="text" className="form-control small-field" id="w-state" aria-describedby="username" />
                        <div id="warehouse-state" className="form-text">Enter state where warehouse is present.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="w-address" className="form-label">Warehouse Address</label>
                        <textarea className="form-control" id="w-address" rows="3"></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="w-pincode" className="form-label">Warehouse Pincode</label>
                        <input type="number" className="form-control small-field" id="w-pincode" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter warehouse area pincode.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ifsc" className="form-label">IFSC Code</label>
                        <input type="number" className="form-control small-field" id="ifsc" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter IFSC code.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ac-no" className="form-label">AC Number</label>
                        <input type="number" className="form-control medium-field" id="ac-no" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter account number.</div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
