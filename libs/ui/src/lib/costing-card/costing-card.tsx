 import React from "react";
import { useForm } from "@tanstack/react-form";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { CostingFormData, CostingFieldType } from "../types"



export const CostingCard: React.FC<{ data: CostingFormData }> = ({ data }) => {
  const form = useForm({
    defaultValues: {
      label: data.label,
      name: data.name,
      fields: data.fields.map(() => false),
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

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
            {data.label}
          </h2>
          <InputText
            disabled
            id={data.name}
            className="w-2/5 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-600"
            value={data.name}
          />
        </div>

        {/* Fields */}
        <div className="space-y-4">
          {data.fields.map((field: CostingFieldType, index: number) => (
            <form.Field
              key={index}
              name={`fields[${index}]`}
              children={(fieldState) => (
                <div className="flex items-center ">
                  <div className="flex items-center gap-4 w-3/5">
                    <Checkbox
                      inputId={field.name}
                      checked={fieldState.state.value}
                      onChange={(e) =>
                        fieldState.handleChange(e.checked ?? false)
                      }
                      className="h-4 text-blue-600 border-gray-300 rounded "
                    />

                    <span className="text-gray-700 text-sm">
                      {field.label || "Unnamed Field"}
                    </span>
                  </div>

                  <InputText
                    disabled
                    id={field.name}
                    className="p-inputtext-sm flex-1 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 w-2/5"
                    value={"$0.00"}
                  />
                </div>
              )}
            />
          ))}
        </div>

        {/* Submit button */}
      </form>

      <hr className="border-t border-dotted border-gray-200 py-6" />
    </>
  );
};
