import type { OptionProps } from "react-select"

export default function SelectOption(props: OptionProps<{
    label: string;
    value: string;
    icon: string;
}>) {
    const data = props.data;
    const isDisabled = props.isDisabled;
    const isSelected = props.isSelected;
    const isFocused = props.isFocused;
    const ref = props.innerRef;
    const innerProps = props.innerProps;

    // these are the classes passed in the classNames 'option' object in the main Select component
    const classNames = props.getClassNames("option", props)

    console.debug({
        data,
        isDisabled,
        isSelected,
        isFocused,
        classNames
    })

    return (
        <div ref={ref} {...innerProps}>
            <img src={data.icon} alt={data.value} />
            <p>label: {data.label}</p>
            <p>value: {data.value}</p>
        </div>
    )
}