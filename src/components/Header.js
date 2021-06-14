import { StyledButton } from "../styles/GlobalStyles";
import { HeaderWrapper } from "../styles/HeaderStyles";
import Menu from "./Menu";


export default function Header() {
    return (
        <HeaderWrapper>
            <Menu />
            <StyledButton variant="danger" height="40px" width="105px">Wyloguj</StyledButton>
        </HeaderWrapper>
    );

}