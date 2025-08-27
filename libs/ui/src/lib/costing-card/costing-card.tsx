import React, { useMemo } from "react";
import { useForm, useStore } from "@tanstack/react-form";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { CostingFormData, CostingFieldType } from "../types";

export const CostingCard: React.FC<{
  definition: CostingFormData;
  data: any;
}> = ({ definition, data }) => {
  const defaultValues = {
    label: definition.label,
    name: definition.name,
    fields: definition.fields.map((field) => {
      const fieldData = data[field.name]?.value;
      const value =
        fieldData !== undefined && !isNaN(Number(fieldData))
          ? `$${fieldData}`
          : "$0.00";

      return {
        isChecked: data[field.name]?.isChecked ?? false,
        value,
      };
    }),
  };

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  const fieldsState = useStore(form.store, (state) => state.values.fields);

  // Calculate sum of checked values
  const subSectionTotal = useMemo(() => {
    if (!fieldsState || !Array.isArray(fieldsState)) return "$0.00";
  
    const total = fieldsState.reduce((sum, field) => {
      if (!field.isChecked) return sum;
  
      const cleanedValue = String(field.value).replace(/[^0-9.]/g, ""); // removes $ and commas
      const numericValue = parseFloat(cleanedValue);
  
      return sum + (isNaN(numericValue) ? 0 : numericValue);
    }, 0);
  
    return `$${total.toFixed(2)}`;
  }, [fieldsState]);
  

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="w-full p-6 "
      >
        {/* Title */}

        {/* Disabled input for name */}
        <div className="flex py-5">
          <h2 className="text-2xl font-bold text-gray-800 capitalize w-3/5">
            {definition.label}
          </h2>
          <InputText
            disabled
            id={definition.name}
            className="w-2/5 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-600"
            value={subSectionTotal}
          />
        </div>

        {/* Fields */}
        <div className="space-y-4">
          {definition.fields.map((field: CostingFieldType, index: number) => (
            <form.Field
              key={index}
              name={`fields[${index}]`}
              children={(fieldState) => {
                const { isChecked, value } = fieldState.state.value ?? {
                  isChecked: false,
                  value: "",
                };

                return (
                  <div className="flex items-center ">
                    <div className="flex items-center gap-4 w-3/5">
                      <Checkbox
                        inputId={field.name}
                        checked={isChecked}
                        onChange={(e) =>
                          fieldState.handleChange({
                            isChecked: e.checked ?? false,
                            value,
                          })
                        }
                        className="h-4 text-blue-600 border-gray-300 rounded "
                      />

                      <span className="text-gray-700 text-sm">
                        {field.label || "Unnamed Field"}
                      </span>
                    </div>

                    <InputText
                      disabled={!isChecked}
                      id={field.name}
                      className="p-inputtext-sm flex-1 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 w-2/5"
                      value={isChecked ? value : ""}
                      onChange={(e) =>
                        fieldState.handleChange({
                          isChecked,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>
                );
              }}
            />
          ))}
        </div>

        {/* Submit button */}
      </form>

      <hr className="border-t border-dotted border-gray-200 py-6" />
    </>
  );
};
