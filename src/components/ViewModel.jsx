/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import '../styles/viewCompany.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

const ViewCompanModels = (props) => {
  const [models, setModels] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const getModels = async () => {
    const response = await axios(
      `http://localhost:4000/view/companyModels/${id}`,
    )
    setModels(response.data.data)
  }

  useEffect(() => {
    getModels()
  }, [])

  const handleDelete = async (id) => {
    // console.log(id)
    const response = await axios.delete(
      `http://localhost:4000/delete-model/${id}`,
    )
    if (response.status === 200) {
      alert('Car Model deleted successfully')
      getModels()
    }
  }
  return (
    <div className="viewCarCompaniesContainer">
      <div className="btnContainer">
        <button
          className="btn"
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate(`/create-model/${id}`)
          }}
        >
          <AddIcon />
          Add Model
        </button>
      </div>
      <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#121e52' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Model Name</TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Length (mm)
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Width(mm)
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Seating Capacity
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Edit
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {models.length > 0 &&
              models.map((row) => (
                <TableRow key={row._id}>
                  <TableCell align="center">{row.modelName}</TableCell>
                  <TableCell align="center">{row.length}</TableCell>
                  <TableCell align="center">{row.width}</TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.seatingCapacity}
                  </TableCell>

                  <TableCell align="right" sx={{ cursor: 'pointer' }}>
                    <button
                      onClick={() => {
                        navigate(`/update-model/${row._id}`)
                      }}
                      style={{
                        outline: 'none',
                        cursor: 'pointer',
                        border: 'none',
                        color: 'blue',
                        backgroundColor: '#fff',
                      }}
                    >
                      <EditIcon />
                    </button>
                  </TableCell>
                  <TableCell align="right" sx={{ cursor: 'pointer' }}>
                    <button
                      onClick={() => {
                        handleDelete(row._id)
                      }}
                      style={{
                        outline: 'none',
                        cursor: 'pointer',
                        border: 'none',
                        color: 'red',
                        backgroundColor: '#fff',
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewCompanModels
