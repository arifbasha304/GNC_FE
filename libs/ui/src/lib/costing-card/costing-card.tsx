import React from "react";
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
    fields: definition.fields.map((field) => ({
      isChecked: data[field.name]?.isChecked ?? false,
      value: data[field.name]?.value !== undefined ? `$${data[field.name].value}` : "",
    })),
  };
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });
  // Inside your component
  const fieldsState = useStore(form.store, (state) => state.values.fields);

  // Calculate sum of checked values
  const total = fieldsState
    ?.filter((f) => f.isChecked)
    .reduce((sum, f) => sum + (parseFloat(f.value) || 0), 0)
    .toFixed(2);

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
            value={total}
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
