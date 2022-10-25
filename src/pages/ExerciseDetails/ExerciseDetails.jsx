import "./styles/ExerciseDetails.css";
import { useNavigate } from "react-router-dom";

export default function ExerciseDetails() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <h1>Details</h1>
      <button onClick={goBack}>Go Back</button>
    </>
  );
}
