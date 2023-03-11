import React, { useState } from 'react'
import '../styles/carCompanyInputForm.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const CreateCarModelForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState({
    modelName: '',
    length: '',
    width: '',
    seatingCapacity: '',
    companyId: id,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'post',
        url: 'https://one-mdm-server.vercel.app/create-model',
        data: data,
      })
      if (response) {
        alert(response.data.message)
        setData({
          modelName: '',
          length: '',
          width: '',
          seatingCapacity: '',
          companyId: id,
        })
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
        <label htmlFor="modelName">Model Name</label>
        <input
          type="text"
          placeholder="Enter Model Name"
          name="modelName"
          id="modelName"
          value={data.modelName}
          // onChange={handleChange}
          onChange={(e) => {
            setData({ ...data, modelName: e.target.value })
          }}
        />
        <label htmlFor="length">length(mm)</label>
        <input
          type="Number"
          placeholder="Enter Length Of Vehicle"
          value={data.length}
          name="length"
          id="length"
          onChange={(e) => {
            setData({ ...data, length: e.target.value })
          }}
        />
        <label htmlFor="width">Width(mm)</label>
        <input
          type="Number"
          placeholder="Enter Width Of Vehicle"
          value={data.width}
          name="width"
          id="width"
          onChange={(e) => {
            setData({ ...data, width: e.target.value })
          }}
        />
        <label htmlFor="seatingCapacity">seatingCapacity</label>
        <input
          type="Number"
          placeholder="Enter Seating Capacity"
          value={data.seatingCapacity}
          name="seatingCapacity"
          id="seatingCapacity"
          onChange={(e) => {
            setData({ ...data, seatingCapacity: e.target.value })
          }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateCarModelForm
