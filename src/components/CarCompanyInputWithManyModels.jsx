import '../styles/multipleModelInput.scss'
import React, { useEffect, useState } from 'react'
import '../styles/carCompanyInputForm.scss'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import CompanyInputWithModels from './CompanyInputWithModels'

const CarCompanyInputWithManyModels = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    companyName: '',
    marketShare: '',
    headquarter: '',
    ceo: '',
    foundedIn: '',
  })

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
      <div className="inputForm">
        <div className="submitBtnAndInputContainer">
          <div className="companyInput">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              placeholder="Enter Company Name"
              name="companyName"
              id="companyName"
              value={data.companyName}
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
          </div>
          <CompanyInputWithModels data={data} />
        </div>
      </div>
    </div>
  )
}

export default CarCompanyInputWithManyModels
