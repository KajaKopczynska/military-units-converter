import { useState } from 'react';
import { StyledForm, Header, Unit, Button, Amount, StyledResult } from "./styled";
import { militaryUnits } from './militaryUnits';
import woodIcon from "./icons/Drewno.png";
import clayIcon from "./icons/Glina.png";
import ironIcon from "./icons/Żelazo.png";


const Form = () => {

    const [unit, setUnit] = useState(militaryUnits[1]);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, unit);
    };

    const onChangeUnit = ({ target }) => {
        const selectUnit = militaryUnits.find(unit => unit.short === target.value);
        setUnit(selectUnit);
    };

    const calculateResult = (amount, unit) => {
        const wood = unit?.wood;
        const clay = unit?.clay;
        const iron = unit?.iron;
        setResult({
            sourceAmount: +amount,
            woodAmount: +amount * wood,
            clayAmount: +amount * clay,
            ironAmount: +amount * iron,
            unit
        });
    };

    const Result = ({ result }) => (
        <p>
            {!!result && (
                <>
                    <strong>
                        {result.woodAmount.toLocaleString('pl-PL', { useGrouping: 'true' })}&nbsp;{<img src={woodIcon} alt="drewna" />}<br />
                        {result.clayAmount.toLocaleString('pl-PL', { useGrouping: 'true' })}&nbsp;{<img src={clayIcon} alt="gliny" />}<br />
                        {result.ironAmount.toLocaleString('pl-PL', { useGrouping: 'true' })}&nbsp;{<img src={ironIcon} alt="żelaza" />}
                    </strong>
                </>
            )}
        </p>
    )

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Header> Przelicznik surowców<br />i jednostek </Header>
            <>
                <p>
                    <label>
                        <span>
                            Wybierz jednostki i wpisz ich liczbę:
                        </span>
                        <br></br>
                        <Unit
                            value={militaryUnits.short}
                            onChange={onChangeUnit}
                        >
                            {militaryUnits.map(unit => (
                                <option key={unit.name}>
                                    {unit.short}
                                </option>
                            ))};
                        </Unit>
                        <Amount
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            step="1"
                            placeholder="0"
                            min="0"
                            required
                        />
                    </label>
                </p>
                <p>
                    <Button> Przelicz</Button>
                </p>
                <StyledResult>
                    Potrzebne surowce:
                    <Result result={result} />
                </StyledResult>
            </>
        </StyledForm >
    );
};

export default Form;
