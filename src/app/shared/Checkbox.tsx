import { StyledLabel, StyledCheckIcon } from './Checkbox.styles';

import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({
  label,
  checked,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <StyledLabel>
      <input type="checkbox" {...props} checked={checked} onChange={onChange} />
      <span>{checked && <StyledCheckIcon />}</span>
      {label}
    </StyledLabel>
  );
};
