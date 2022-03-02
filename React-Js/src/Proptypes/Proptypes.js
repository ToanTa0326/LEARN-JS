import propTypes from "prop-types";

export default function Proptypes() {
    const propType = {
        arrayProp: propTypes.array,
        stringProp: propTypes.string,
        numberProp: propTypes.number,
        boolProp: propTypes.bool
    }

    const props = {
        arrayProp: ['Ram', 'Shyam', 'Raghav'],
        stringProp: "GeeksforGeeks",
        numberProp: "10",
        boolProp: true
    }

    return(
        <div>
            {/* printing all props */}
            <h1>
                {props.arrayProp}
                <br />

                {props.stringProp}
                <br />

                {props.numberProp}
                <br />

                {props.boolProp}
                <br />
            </h1>
        </div>
    );
}
