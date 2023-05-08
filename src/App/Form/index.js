import { useState } from 'react';

import { StyledForm, Header, Currency, Button, Amount, StyledResult } from "./styled";
import { militaryUnits } from './militaryUnits';

const Form = () => {

    const [unit, setUnit] = useState(militaryUnits[1]);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, unit);
    };

    const onCalculateMaterials = ({ target }) => {
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
                        {result.woodAmount}&nbsp;{"drewna"}<br></br>
                        {result.clayAmount}&nbsp;{"gliny"}<br></br>
                        {result.ironAmount}&nbsp;{"żelaza"}
                    </strong>
                </>
            )}
        </p>
    )

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Header> Przelicznik surowców i jednostek </Header>
            <>
                <p>
                    <label>
                        <span>
                            Wybierz jednostki i pisz ich liczbę:
                        </span>
                        <br></br>

                        <Currency
                            value={militaryUnits.short}
                            onChange={onCalculateMaterials}
                        >
                            {militaryUnits.map(unit => (<option key={unit.short}>{unit.short}</option>))};
                        </Currency>


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