import React, { useState } from 'react'
import '../styles/carCompanyInputForm.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { toast } from 'react-toastify'
const CarCompanyInputForm = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    companyName: '',
    marketShare: '',
    headquarter: '',
    ceo: '',
    foundedIn: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'post',
        url: 'https://one-mdm-server.vercel.app/create-company',
        data: data,
      })
      if (response) {
        alert(response.data.message)
        navigate(-1)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
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
      <form className="inputForm" onSubmit={handleSubmit}>
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
          value={data.ceo}
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
