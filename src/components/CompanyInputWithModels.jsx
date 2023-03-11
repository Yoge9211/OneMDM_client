import '../styles/multipleModelInput.scss'
import React, { useEffect, useState } from 'react'
import '../styles/carCompanyInputForm.scss'

// import axios from 'axios'

const CarCompanyInputWithManyModels = (props) => {
  const { data } = props

  const [modelsData, setModelsData] = useState([
    {
      modelName: '',
      length: '',
      width: '',
      seatingCapacity: '',
    },
  ])
  const [formData, setFormData] = useState({
    ...data,
  })

  const addMore = (e) => {
    setModelsData([
      ...modelsData,
      {
        modelName: '',
        length: '',
        width: '',
        seatingCapacity: '',
      },
    ])
  }

  const handleRemove = (i) => {
    const newModelsData = [...modelsData]
    newModelsData.splice(i, 1)
    setModelsData(newModelsData)
  }

  const handleChange = (e, i) => {
    const newModelsData = [...modelsData]
    newModelsData[i][e.target.name] = e.target.value
    setModelsData(newModelsData)
  }

  const settingData = async () => {
    await setFormData((preData) => {
      return {
        ...data,
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(modelsData)
    settingData()
    console.log(formData)
  }

  return (
    <div className="formContainer">
      <form className="inputForm" onSubmit={handleSubmit}>
        <div className="modelInput">
          {modelsData.map((model, index) => {
            return (
              <div className="modelForm" key={index}>
                <label htmlFor="modelName">Model Name</label>
                <input
                  type="text"
                  placeholder="Enter Model Name"
                  name="modelName"
                  id="modelName"
                  value={model.modelName}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="length">length(mm)</label>
                <input
                  type="Number"
                  placeholder="Enter Length Of Vehicle"
                  name="length"
                  id="length"
                  value={model.length}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="width">Width(mm)</label>
                <input
                  type="Number"
                  placeholder="Enter Width Of Vehicle"
                  name="width"
                  id="width"
                  value={model.width}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="seatingCapacity">seatingCapacity</label>
                <input
                  type="Number"
                  placeholder="Enter Seating Capacity"
                  name="seatingCapacity"
                  id="seatingCapacity"
                  value={model.seatingCapacity}
                  onChange={(e) => handleChange(e, index)}
                />
                {index == 0 ? (
                  ''
                ) : (
                  <button onClick={() => handleRemove(index)}>Remove</button>
                )}
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addMore()
                    }}
                  >
                    Add More Models
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="submitBtn">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default CarCompanyInputWithManyModels
