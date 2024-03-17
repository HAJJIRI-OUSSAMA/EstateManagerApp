
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PropsList } from './component/props.list.comp.jsx';
import { PropsNew } from './component/props.new.comp.jsx';
import { AdminLayout } from './component/admin.layout.comp.jsx';
import { Signup } from './component/signup.comp.jsx';
import { PropsEdit } from './component/edit.props.comp.jsx';
import { Login } from './component/login.comp.jsx';
import { LocDetails } from './component/loc.details.com.jsx';

function App() {

  const token = localStorage.getItem("jwtToken");


  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        { token ? (
        <>
        <Route path="" element={<PropsList/>} ></Route>
        <Route path="properties" element={<PropsList/>} ></Route>
        <Route path="properties/new" element={<PropsNew/>} ></Route>
        <Route path="properties/edit/:id" element={<PropsEdit/>} ></Route>
        <Route path="properties/details/:id" element={<LocDetails/>} ></Route>
        </>
          
        ):
        (
          <>
          <Route path="" element={<Login />} ></Route>
          <Route path="signup" element={<Signup />} ></Route>
          <Route path="login" element={<Login />} ></Route>
          </>
        )
        }
                
      </Route>
    </Routes>
  );
}

export default App;
