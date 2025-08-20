import React from 'react'
import { useForm } from '@tanstack/react-form'

// Define types
export type CostingFieldType = {
  name: string;
  label: string;
}

export type CostingFormData = {
  name: string
  label: string
  fields: CostingFieldType[]
}

// type FormValues = {
//   name: string
//   fields: boolean[] // represents checkbox state
// }

export const CostingCard: React.FC<{ data: CostingFormData }> = ({ data }) => {
  const form = useForm({
    defaultValues: {
      label:data.label,
      name: data.name,
      fields: data.fields.map(() => false),
    },
    onSubmit: async ({ value }) => {
      console.log('Submitted:', value)
    },
  })

  return (
    <>
     <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      {/* Title */}
      

      {/* Disabled input for name */}
      <div className='flex'>
      <h2 className="text-2xl font-bold text-gray-800 capitalize w-3/4">{data.label}</h2>
        <input
          type="text"
          value={data.name}
          disabled
          className="w-1/4 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
        />
      </div>

      {/* Fields */}
      <div className="space-y-4">
        {data.fields.map((field: CostingFieldType, index: number) => (
          <form.Field
            key={index}
            name={`fields[${index}]`}
            children={(fieldState) => (
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={fieldState.state.value}
                  onChange={(e) => fieldState.handleChange(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded w-1/4"
                />

                <span className="text-gray-700 text-sm w-1/2">{field.label || 'Unnamed Field'}</span>

                <input
                  type="text"
                  value={"$0.00"}
                  disabled
                  className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md bg-gray-100 text-gray-600 w-1/4"
                />
              </div>
            )}
          />
        ))}
      </div>

      {/* Submit button */}
  
    </form>
    </>
   
  )
}

