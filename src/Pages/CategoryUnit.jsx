import { useParams } from "react-router-dom";

const CategoryUnit = () => {
  const { UnitId } = useParams();

  return <div>{UnitId}</div>;
};

export default CategoryUnit;
