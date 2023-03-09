import React, { useEffect, useState } from 'react'
import '../styles/carCompany.scss'
import AddIcon from '@mui/icons-material/Add'
import { Link, useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

// const rows = [
//   {
//     CompanyName: 'Maruti Suzuki',
//     MarketShare: '50%',
//     Headquarters: 'Mumbai',
//     CEO: 'na guhi oska',
//     FoundedIn: 1956,
//   },
// ]
const CarCompany = (props) => {
  // console.log(companyData)
  const navigate = useNavigate()
  const [companyData, setCompanyData] = useState({})

  const getCompanies = async () => {
    const response = await axios.get('http://localhost:4000/companies')
    // console.log(response.data)
    setCompanyData(response.data)
  }
  useEffect(() => {
    getCompanies()
  }, [])
  const handleDelete = async (id) => {
    // console.log(id)
    const response = await axios.delete(
      `http://localhost:4000/delete-company/${id}`,
    )
    if (response.status === 200) {
      alert('Company deleted successfully')
      getCompanies()
    }
  }
  return (
    <div className="carCompaniesContainer">
      <div className="btnContainer">
        <Link to="/create/company" className="btn">
          <AddIcon />
        </Link>
      </div>
      <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#121e52' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Company Name</TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Market Share(%)
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Headquarter
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                CEO
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Founded In
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                View
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
            {companyData.length > 0 &&
              companyData.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.companyName}
                  </TableCell>
                  <TableCell align="right">{row.marketShare}</TableCell>
                  <TableCell align="right">{row.headquarter}</TableCell>
                  <TableCell align="right">{row.ceo.ceo}</TableCell>
                  <TableCell align="right">{row.foundedIn}</TableCell>
                  <TableCell align="right" sx={{ cursor: 'pointer' }}>
                    <button
                      style={{
                        outline: 'none',
                        cursor: 'pointer',
                        border: 'none',
                        color: 'green',
                        backgroundColor: '#fff',
                      }}
                      onClick={() => {
                        navigate(`/view/companyModels/${row._id}`)
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </button>
                  </TableCell>
                  <TableCell align="right" sx={{ cursor: 'pointer' }}>
                    <button
                      onClick={() => {
                        navigate(`/update-company/${row._id}`)
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

export default CarCompany
