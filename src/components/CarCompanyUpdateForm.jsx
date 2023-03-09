/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import '../styles/carCompanyInputForm.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import { toast } from 'react-toastify'
const CarCompanyInputForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  //   console.log(id)
  const [data, setData] = useState({
    companyName: '',
    marketShare: '',
    headquarter: '',
    ceo: '',
    foundedIn: '',
  })

  const getCompanyData = async () => {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:4000/get-company/${id}`,
    })
    if (response.status === 200) {
      console.log(response.data.data)
      setData(response.data.data)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'patch',
        url: `http://localhost:4000/update-company/${id}`,
        data: data,
      })
      if (response.status === 201) {
        console.log(response)
        alert('Success')
        navigate(-1)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getCompanyData()
  }, [])
  return (
    <div className="formContainer">
      <div className="backBtn">
        <button
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
      </div>
      <form className="inputForm" onSubmit={handleUpdate}>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          placeholder="Enter Company Name"
          name="companyName"
          id="companyName"
          value={data.companyName}
          // onChange={handleChange}
          onChange={(e) => {
            setData({ ...data, companyName: e.target.value })
          }}
        />
        <label htmlFor="marketShare">Market Share</label>
        <input
          type="Number"
          placeholder="Enter Current Market Share"
          value={data.marketShare}
          name="marketShare"
          id="marketShare"
          onChange={(e) => {
            setData({ ...data, marketShare: e.target.value })
          }}
        />
        <label htmlFor="headquarter">Headquarter</label>
        <input
          type="text"
          placeholder="Enter Headquarter of company"
          value={data.headquarter}
          name="headquarter"
          id="headquarter"
          onChange={(e) => {
            setData({ ...data, headquarter: e.target.value })
          }}
        />
        <label htmlFor="ceo">CEO</label>
        <input
          type="text"
          placeholder="Enter CEO of company"
          value={data.ceo.ceo}
          name="ceo"
          id="ceo"
          onChange={(e) => {
            setData({ ...data, ceo: e.target.value })
          }}
        />
        <label htmlFor="foundedIn">founded In</label>
        <input
          type="number"
          placeholder="Founded In"
          value={data.foundedIn}
          name="foundedIn"
          id="foundedIn"
          onChange={(e) => {
            setData({ ...data, foundedIn: e.target.value })
          }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default CarCompanyInputForm
