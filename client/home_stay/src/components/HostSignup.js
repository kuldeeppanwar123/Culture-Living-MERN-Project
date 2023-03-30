import { useFormik } from 'formik';
import React, { useState } from 'react';
import s from '../styles/HostSignup.module.css';
import convertToBase64 from '../helper/convert';
import{Row , Col} from 'react-bootstrap'
export default function HostSignup() {
    const [file, setfile] = useState();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            address: '',
            streetaddress: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
            price: {single:'',double:'',extra:''},
            hosttime: '',
            ishosted: '',
            rooms: '',
            capacity: '',
            termandcondition: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async function (value) {
            value = await Object.assign(value, { profile: file || '' });
            console.log(value);
            console.log(file);

        }
    })

    const onupload = async e => {
        console.log(e.target.value);
        const base64 = await convertToBase64(e.target.files[0])
        setfile(base64)
    }

    return (
        <div className={s.hostsignup}>
            <section className={`container my-2  w-50 text-dark p-2 ${s.container}`} style={{}}>
                <form onSubmit={formik.handleSubmit} className="row g-3 p-3" >
                    <h5 className={s.heading}>Signup</h5>
                    <div className={s.line}><span> Personal Info </span></div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">First name</label>
                        <input {...formik.getFieldProps('firstname')} type="text" className="form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                        <input {...formik.getFieldProps('lastname')} type="text" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input {...formik.getFieldProps('email')} type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    {/* <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Gender</label>
                        <select {...formik.getFieldProps('gender')} id="inputState" className="form-select" style={{marginTop: "22px"}} required>
                            <option value=''>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div> */}
                    {/* <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">Date Of Birth</label>
                        <input {...formik.getFieldProps('dob')} type="date" className="form-control" id="validationDefault01" required />
                    </div> */}
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
                        <input {...formik.getFieldProps('phonenumber')} type="text" className="form-control" id="validationDefault02" required />
                    </div>

                    <div className={s.line}><span> Location </span></div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input {...formik.getFieldProps('address')} type="text" className="form-control" id="inputAddress" placeholder="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Street Address</label>
                        <input {...formik.getFieldProps('streetaddress')} type="text" className="form-control" id="inputAddress2" placeholder="" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input {...formik.getFieldProps('city')} type="text" className="form-control" id="inputCity" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <input {...formik.getFieldProps('state')} type="text" className="form-control" id="inputState" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Zip Code</label>
                        <input {...formik.getFieldProps('zipcode')} type="text" className="form-control" id="inputZip" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Country</label>
                        <input {...formik.getFieldProps('country')} type="text" className="form-control" id="inputCountry" required />
                    </div>

                    <div className={s.line}><span> Other Info </span></div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">How long can you host?</label>
                        <input {...formik.getFieldProps('hosttime')} type="text" className="form-control" required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Have you hosted before?</label>
                        <select {...formik.getFieldProps('ishosted')} id="inputState" className="form-select" required>
                            <option value=''>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className="col-5">
                        <label htmlFor="" className="form-label">No of Rooms</label>
                        <input {...formik.getFieldProps('rooms')} type="text" className={`form-control `} required  />
                    </div>
                    <div className="col-7">
                        <label htmlFor="" className="form-label">Capacity of Rooms?</label>
                        <input {...formik.getFieldProps('capacity')} type="text" className="form-control" required />
                    </div>
                    <div className="col-12">
                        <h5>Tariff:</h5>
                        <Row>
                            <Col className="col-6" style={{marginTop:"20px", textAlign:"center"}}>Single Occupancy: </Col>
                            <Col className="col-6" ><input {...formik.getFieldProps(`price[single]`)} type="text" className="form-control" required /></Col>
                        </Row>
                        <Row>
                            <Col className="col-6" style={{marginTop:"20px", textAlign:"center"}}>Double Occupancy: </Col>
                            <Col className="col-6" ><input {...formik.getFieldProps(`price[double]`)} type="text" className="form-control" required /></Col>
                        </Row>
                        <Row>
                            <Col className="col-6" style={{marginTop:"20px", textAlign:"center"}}>Extra Person: </Col>
                            <Col className="col-6" ><input {...formik.getFieldProps(`price[extra]`)} type="text" className="form-control" required /></Col>
                        </Row>
                        {/* <span><label htmlFor="" className="form-label">What is the price of hosting</label></span> */}
                     {/* <span col>single :</span> <input {...formik.getFieldProps('price')} type="text" className="form-control" required /> */}
                    </div>
                    <div className="col-12">
                        <label htmlFor="formFileMultiple" class="form-label">Upload images of your house</label>
                        <input onChange={onupload} className="form-control" type="file" id="formFileMultiple" multiple required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Write Terms and Conditions</label>
                        <textarea {...formik.getFieldProps('termandcondition')} class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary rounded">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
