import { surveyItems } from "../Survey/survey.data";
import SurveyItem from "./components/SurveyItem";

const Surveys = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {surveyItems.map((survey) => (
        <SurveyItem {...survey} key={survey._id} />
      ))}
    </div>
  );
};

export default Surveys;
