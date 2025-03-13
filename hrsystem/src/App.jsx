import Loginpage from './loginpage/loginpage'
import {Routes, Route} from "react-router-dom"
import Detailsscreen from './detailsscreen/detailsscreen'
import Payroll from './pages/payroll'
import Personalprofile from './pages/personalprofile'
import Timesheet from './pages/timesheet'

function App() {

  return (
    <Routes>
        <Route path= "/" element = {<Loginpage/>}/>
        <Route path= "/detailsscreen" element = {<Detailsscreen/>}/>
        <Route path= "/payroll" element = {<Payroll/>}/>
        <Route path= "/personalprofile" element = {<Personalprofile/>}/>
        <Route path= "/timesheet" element = {<Timesheet/>}/>
        
    </Routes>
  )
}

export default App
