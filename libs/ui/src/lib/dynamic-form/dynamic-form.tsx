import { useForm } from "@tanstack/react-form";
import CommonButton from "../common-ui/CommonButon";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';



export type FieldType = "text" | "select";

export type FormFieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  options?: string[];
  colSpan?: number; // 1 to 8, defaults to 2
  rowSpan?: 1|2;
  disabled?: boolean,
  marginBottom?: 2
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
    <div className=" bg-orange-50 shadow-md rounded-md border border-orange-200 p-7">
      <h2 className="text-2xl text-custom-black font-semibold mb-6">Project Details</h2>
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
            const fieldHeight = field.rowSpan===2?'h-16': 'h-12'
            const fieldDisabled = field.disabled ? true : false 
            const projectNumberField =  field.marginBottom===2 ? 'mb-2' : ''
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
                  <div className={`col-span-${colSpan} ${projectNumberField ?? ''}`}>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>

                    {field.type === "select" ? (
                      <Dropdown
                        id={field.name}
                        value={fieldState.state.value}
                        onChange={(e) => fieldState.handleChange(e.value)}
                        options={
                          field.options?.map((opt) => ({
                            label: opt,
                            value: opt,
                          })) || []
                        }
                        
                        className={"flex items-center w-full text-sm py-2 px-3 " + fieldHeight}
                      />
                    ) : (
                      <InputText
                        disabled ={ fieldDisabled }
                        id={field.name}
                        className={"p-inputtext-sm w-full bg-white border border-gray-300 rounded-md px-3 py-2 " + fieldHeight  }
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
            
          </div>
        </form>
      </div>
    // </div>
  );
}
