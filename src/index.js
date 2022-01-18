import React from "react";
import { render } from "react-dom";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/main";
import Home from "./routes/home";
import Posts from "./routes/posts";
import Post from "./routes/post";
import NotFound from "./routes/404";
// import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/font.module.scss";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
// import Invoice from "./routes/invoice";
// import "./styles/index.css";
// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />}>
//           <Route
//             index
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//           <Route path=":invoiceId" element={<Invoice />} />
//         </Route>
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
