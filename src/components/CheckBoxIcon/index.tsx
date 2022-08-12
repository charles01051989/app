import * as S from './style'
import React, {HTMLAttributes} from 'react';

type DivType = HTMLAttributes<HTMLDivElement>;

export type CheckBoxIconProps = {
    icon?: React.ReactNode;
    active?: boolean;
    value: string;
} & DivType;

const CheckBoxIcon = ({icon, value, active = false, ...props}: CheckBoxIconProps) => {
    return (
        <S.CheckboxIcon active={active} {...props}>
            {active && <S.CheckboxIconCheck />}
            {icon && <div>{icon}</div>}
            <div>{value}</div>
        </S.CheckboxIcon>
    )
}

export default CheckBoxIcon;