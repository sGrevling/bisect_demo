import React, {useState} from 'react';


export const BinarySearch = ({version}) => {
    const [eliminated, setEliminated] = useState([]);
    const possibilities = {
        32: [0, 0],
        16: [2, 32],
        8: [2, 16],
        12: [9, 16],
        14: [13, 16],
        13: [13, 14],
    }

    const renderOptions = () => {
        const posi = possibilities[version];
        if (!posi) return <></>;

        const things = [];
        for (let i = 0; i < 32; i++) {
            const num = i + 1;
            const impossible = num < posi[0] || num > posi[1];
            const isEliminated = eliminated.includes(num);
            things.push(
                <div
                    // className={impossible || isEliminated ? 'impossible' : ''}
                    className={
                        [
                            impossible || isEliminated ? 'impossible' : '',
                            version === num ? 'active' : ''
                        ].join(' ')
                    }
                    onClick={() => {
                        setEliminated(pv => {
                            const eliminatedIndex = eliminated.findIndex(e => e === num);
                            if (eliminatedIndex === -1) return [...pv, num];
                            const nv = [...pv];
                            nv.splice(eliminatedIndex, 1);
                            return nv;
                        });
                    }}
                >
                    {num}
                </div>
            )
        }
        return (
            <>
                <br/>
                <h3>Resterende mulighetsrom:</h3>
                <div className="possibilities">
                    {things}
                </div>
            </>
        )
    }

    return (
        <div className="binarySearch">
            <h2>Hva er binærsøk?</h2>
            <p>En effektiv måte å søke i en sortert liste ved å halvere mulighetsrommet for hver itersjon.</p>
            <p>I dette tilfellet har vi en liste med 32 commits. De er i praksis sortert i gode og dårlige commits; De
                som kom før committen som inførte bugen er gode, de andre er dårlige.</p>
            {renderOptions()}
        </div>
    );
}