import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Card, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Details() {
	return (
		<div className="container mt-3">
			<h1 style={{ fontWeight: 400 }}>Welcome</h1>

			<Card sx={{ maxWidth: 600 }}>
				<CardContent>
					<div className="add_btn">
						<NavLink>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
						<button className="btn btn-danger" ><DeleteOutlineIcon /></button>
					</div>
					<div className="row">
						<div className="left_view col-lg-6 col-md-6 col-12">
							<img src="/profile.png" style={{ width: 50 }} alt="profile" />
							<h5 className="mt-3">Name:Archana  <span ></span></h5>
							<h5 className="mt-3">Age:20 <span ></span></h5>
							<p className="mt-3"><MailOutlineIcon />Email:kumariarchana65@gmail.com <span></span></p>
							<p className="mt-3"><WorkIcon />Occuption: work<span></span></p>
						</div>
						<div className="right_view  col-lg-6 col-md-6 col-12">

							<p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 9801322567</span></p>
							<p className="mt-3"><LocationOnIcon />location: <span>Mumbai</span></p>
							<p className="mt-3">Description:Full stack developer <span></span></p>
						</div>
					</div>
					

				</CardContent>
			</Card>
		</div>
	)
}

export default Details