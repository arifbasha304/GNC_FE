import * as React from "react";
import { Button } from "primereact/button";
export interface IAppProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  onClick?: () => void;
}

export default function CommonButton(props: IAppProps) {
  return (
    <div>
      <Button
        className={props.className}
        label={props.value}
        onClick={props.onClick}
      />
    </div>
  );
}
