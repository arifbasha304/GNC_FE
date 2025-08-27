
import * as React from "react";
import { Button } from "primereact/button";

export interface IAppProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: string;
  label?: string;
  ariaLabel?: string;
}

export default function CommonButton(props: IAppProps) {
  return (
    <Button
      icon={props.icon}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      unstyled
      label={props.value ?? '\u200B'}
    />
  );
}