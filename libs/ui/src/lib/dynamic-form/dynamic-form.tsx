import { useForm } from "@tanstack/react-form";
import CommonButton from "../common-ui/CommonButon";
export type FieldType = "text" | "select";

export type FormFieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  options?: string[];
  colSpan?: number; // 1 to 8, defaults to 1
};

type DynamicFormProps = {
  fields: FormFieldConfig[];
  onSubmit: (values: Record<string, string>) => void;
  submitButtonText?: string;
};

export function DynamicForm({
  fields,
  onSubmit,
  submitButtonText = "Submit",
}: DynamicFormProps) {
  const form = useForm({
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>),

    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-orange-50 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
      {/* <div className="bg-orange-50"> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {fields.map((field) => {
            // Clamp colSpan between 1 and 8, default to 1
            const colSpan = Math.min(Math.max(field.colSpan ?? 2, 1), 8);

            return (
              <form.Field
                key={field.name}
                name={field.name}
                validators={{
                  onChange: field.required
                    ? ({ value }) =>
                        !value
                          ? `${field.label.replace("*", "")} is required.`
                          : undefined
                    : undefined,
                }}
                children={(fieldState) => (
                  <div className={`col-span-${colSpan}`}>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>

                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={fieldState.state.value}
                        onChange={(e) =>
                          fieldState.handleChange(e.target.value)
                        }
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={fieldState.state.value}
                        onChange={(e) =>
                          fieldState.handleChange(e.target.value)
                        }
                        placeholder={field.placeholder || ""}
                      />
                    )}

                    {fieldState.state.meta.errors?.[0] && (
                      <p className="text-red-500 text-sm mt-1">
                        {fieldState.state.meta.errors[0]}
                      </p>
                    )}

                    {field.helperText && (
                      <p className="text-sm text-gray-500 mt-1">
                        {field.helperText}
                      </p>
                    )}
                  </div>
                )}
              />
            );
          })}

          {/* Submit button spans all 8 columns */}
          <div className="col-span-2 md:col-span-4 lg:col-span-8 text-right mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              {submitButtonText}
            </button>
            <CommonButton
              className="ml-2"
              value={submitButtonText}
              onClick={() => form.handleSubmit()}
            />
          </div>
        </form>
      </div>
    // </div>
  );
}
