import { Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Contacts } from './Contacts/Contacts';
import { About } from "./About/About";

export const App = () => {
  console.log(Contacts)
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>            
          </Route>
        </Routes>
      </Suspense>       
    </div>
  );
};
