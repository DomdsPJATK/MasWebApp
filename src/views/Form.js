import { Steps, Step } from "react-step-builder";
import { ContentWrapper } from "../styles/GlobalStyles";
import { StepFour } from "../components/FormSteps/StepFour";
import { StepOne } from "../components/FormSteps/StepOne";
import { StepTwo } from "../components/FormSteps/StepTwo";
import { StepThree } from "../components/FormSteps/StepThree";

//React step builder - Formularz wielokrokowy
export default function Form() {

    return (
        <ContentWrapper>
            <Steps>
                <Step component={StepOne} />
                <Step component={StepTwo} />
                <Step component={StepThree} />
                <Step component={StepFour} />
            </Steps>
        </ContentWrapper>
    );
}

