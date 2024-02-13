import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Edit() {


  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
  })
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }
  return (
    <div className='container'>
      <NavLink to='/'> Back to Home</NavLink>
      <form className='mt-4'>
        <div className='row'>
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="email" value={inpval.name} onChange={setdata} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Email address</label>
            <input type="password" value={inpval.email} onChange={setdata} name='email' class="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Age</label>
            <input type="password" value={inpval.age} onChange={setdata} name='age' class="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Mobile</label>
            <input type="password" value={inpval.mobile} onChange={setdata} name='mobile' class="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Work</label>
            <input type="password" value={inpval.work} onChange={setdata} name='work' class="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">Address</label>
            <input type="password" value={inpval.add} onChange={setdata} name='add' class="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">Discription</label>
            <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
          </div>



          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Edit