import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CarCompany from './components/CarCompany'
import CarModels from './components/CarModels'
import CompanyCeo from './components/CompanyCeo'
import CarCompanyInputForm from './components/CarCompanyInputForm'
import ViewModel from './components/ViewModel'
import CreateCarModelForm from './components/CreateCarModelForm'
import UpdateModelForm from './components/UpdateModelForm'
import CarCompanyUpdateForm from './components/CarCompanyUpdateForm'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CarCompany />} />
        <Route path="/models" element={<CarModels />} />
        <Route path="/ceos" element={<CompanyCeo />} />
        <Route path="/create/company" element={<CarCompanyInputForm />} />
        <Route path="/view/companyModels/:id" element={<ViewModel />} />
        <Route path="/create-model/:id" element={<CreateCarModelForm />} />
        <Route path="/update-model/:id" element={<UpdateModelForm />} />
        <Route path="/update-company/:id" element={<CarCompanyUpdateForm />} />
      </Routes>
    </Router>
  )
}

export default App
