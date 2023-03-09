import React, { useEffect, useState } from 'react'
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
  })
  const getData = async () => {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:4000/get-one-model/${id}`,
    })
    setData(response.data.data)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'patch',
        url: `http://localhost:4000/update-model/${id}`,
        data: data,
      })
      if (response.status === 201) {
        alert('Car Model updated successfully')
        navigate(-1)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getData()
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
        <input type="submit" value={'Update'} />
      </form>
    </div>
  )
}

export default CreateCarModelForm
