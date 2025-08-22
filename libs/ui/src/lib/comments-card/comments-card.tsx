

import React from "react";
import { useForm } from "@tanstack/react-form";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from 'primereact/inputtextarea';
// Types
export type CommentsFieldType = {
  name: string;
  label: string;
};

export type CommentsFormData = {
  name: string;
  label: string;
  fields: CommentsFieldType[];
};

export const CommentsCard: React.FC<{ data: CommentsFormData }> = ({ data }) => {
  // Initialize TanStack form
  const form = useForm({
    defaultValues: {
      label: data.label,
      name: data.name,
      fields: data.fields.map(() => ({
        checked: false,
        comment: '',
      })),
      generalComments: "",
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
      className="w-full p-6"
    >
      {/* Title */}
      <div className="flex justify-between items-center py-5">
        <h2 className="text-2xl font-semibold text-gray-500 capitalize">
          {data.label}
        </h2>
        <span className="text-gray-600 text-sm">Comments</span>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        {data.fields.map((field, index) => (
          <div className="flex items-center gap-4" key={index}>
            {/* Checkbox field */}
            <form.Field
              name={`fields[${index}].checked`}
              children={(fieldState) => (
                <div className="flex items-center gap-2 w-3/5">
                  <Checkbox
                    inputId={`checkbox-${field.name}`}
                    checked={fieldState.state.value}
                    onChange={(e) =>
                      fieldState.handleChange(e.checked ?? false)
                    }
                    className="h-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor={`checkbox-${field.name}`} className="text-gray-700 text-sm">
                    {field.label}
                  </label>
                </div>
              )}
            />

            {/* Comment input field */}
            <form.Field
              name={`fields[${index}].comment`}
              children={(fieldState) => (
                <InputText
                  id={`comment-${field.name}`}
                  className="p-inputtext-sm px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 w-3/4"
                  value={fieldState.state.value}
                  onChange={(e) => fieldState.handleChange(e.target.value)}
                  placeholder=""
                />
              )}
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <form.Field
          name="generalComments"
          children={(fieldApi) => (
            <InputTextarea
              rows={6}
              value={fieldApi.state.value}
              onChange={(e) => fieldApi.handleChange(e.target.value)}
              placeholder=""
              className="w-full p-4 border border-gray-300 rounded-lg text-sm resize-none "
            />
          )}
        />
      </div>
    </form>
    </>
   
  );
};

