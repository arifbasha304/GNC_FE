// import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { CommentsCard, CommentsFormData, CostingFormData } from "@libs/ui";
import { useForm } from "@tanstack/react-form";

import { DOCUMENTS_SECTION_DEFINITION,  CONSTRUCTION_COSTS_SECTION_DEFINITION } from "../../../utils/data/documents-provided";


function DocumentsProvided({data}:{data:any}) {
  const form = useForm({
    defaultValues: {
      documents: DOCUMENTS_SECTION_DEFINITION.fields.reduce((acc, field) => {
        acc[field.name] = data.documents[field.name];
        return acc;
      }, {} as Record<string, boolean>),
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  return (
    <div>
      <h2 className="p-6 text-2xl font-semibold text-gray-500 capitalize w-3/5 h-12">Documents Provided</h2>
      <form onSubmit={form.handleSubmit} className="w-full p-6  space-y-6 ">
        <div>
          {DOCUMENTS_SECTION_DEFINITION.fields.map((field) => (
            <form.Field
              key={field.name}
              name={`documents.${field.name}`}
              children={(fieldApi) => (
                <div className="flex items-center gap-4 py-3">
                  <Checkbox
                    inputId={field.name}
                    checked={fieldApi.state.value}
                    onChange={(e) => fieldApi.handleChange(e.checked ?? false)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded w-1/4"
                  />
                  <label
                    className="text-gray-700 text-sm w-3/4"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                </div>
              )}
            />
          ))}
        </div>
      </form>

      {/* comments card where user can enter comments enabled input fields */}
      <div>
        <CommentsCard definition={CONSTRUCTION_COSTS_SECTION_DEFINITION} data={data} />
      </div>
    </div>
  );
}

export default DocumentsProvided;
