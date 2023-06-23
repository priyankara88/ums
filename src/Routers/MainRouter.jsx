import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainCategory from "../Pages/MainCategory.jsx";
import SubCategory from "../Pages/SubCategory.jsx";
import CategoryUnit from "../Pages/CategoryUnit.jsx";
import Login from "../Pages/Login.jsx";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/MainCategory" Component={MainCategory} />
        <Route path="/MainCategory/:SubCatId/" Component={SubCategory} />
        <Route
          path="/MainCategory/:SubCatId/:UnitId/"
          Component={CategoryUnit}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
