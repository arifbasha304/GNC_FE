import React, { useState } from 'react';

// Types for the component
interface DocumentItem {
  id: string;
  label: string;
  checked: boolean;
}

interface ConstructionCostItem {
  id: string;
  label: string;
  checked: boolean;
  comment: string;
}

interface DocumentsProvidedData {
  documents: DocumentItem[];
  constructionCosts: ConstructionCostItem[];
  generalComments: string;
}

function DocumentsProvided() {
  const [data, setData] = useState<DocumentsProvidedData>({
    documents: [
      { id: 'asBuilts', label: 'As-Builts', checked: false },
      { id: 'constructionExhibit', label: 'Construction Exhibit', checked: false },
      { id: 'constructionResponsibilityMatrix', label: 'Construction Responsibility Matrix', checked: false },
      { id: 'designCriteria', label: 'Design Criteria', checked: false },
      { id: 'electronicMall', label: 'Electronic Mall', checked: false },
      { id: 'photographs', label: 'Photographs', checked: false },
      { id: 'spaceDrawings', label: 'Space Drawings', checked: false },
      { id: 'others', label: 'Others', checked: false },
    ],
    constructionCosts: [
      { id: 'ceramicFlooring', label: 'Ceramic Flooring', checked: false, comment: '' },
      { id: 'concrete', label: 'Concrete', checked: false, comment: '' },
      { id: 'demisingWalls', label: 'Demising Walls', checked: false, comment: '' },
      { id: 'demolition', label: 'Demolition', checked: false, comment: '' },
      { id: 'drinkingFountain', label: 'Drinking Fountain', checked: false, comment: '' },
      { id: 'topCeiling', label: 'Top Ceiling', checked: false, comment: '' },
    ],
    generalComments: '',
  });

  const handleDocumentChange = (id: string) => {
    setData(prev => ({
      ...prev,
      documents: prev.documents.map(doc =>
        doc.id === id ? { ...doc, checked: !doc.checked } : doc
      )
    }));
  };

  const handleConstructionCostChange = (id: string) => {
    setData(prev => ({
      ...prev,
      constructionCosts: prev.constructionCosts.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const handleCommentChange = (id: string, comment: string) => {
    setData(prev => ({
      ...prev,
      constructionCosts: prev.constructionCosts.map(item =>
        item.id === id ? { ...item, comment } : item
      )
    }));
  };

  const handleGeneralCommentsChange = (comments: string) => {
    setData(prev => ({
      ...prev,
      generalComments: comments
    }));
  };

  const handleSubmit = () => {
    console.log('Documents Provided Data:', data);
    // Handle form submission here
  };

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto">
      {/* Documents Provided Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Documents Provided</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            {data.documents.map((document) => (
              <div key={document.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={document.id}
                  checked={document.checked}
                  onChange={() => handleDocumentChange(document.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label 
                  htmlFor={document.id}
                  className="text-gray-700 text-sm cursor-pointer"
                >
                  {document.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Construction Cost Inclusions Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Construction Cost Inclusions</h2>
          <span className="text-gray-600 text-sm">Comments</span>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-6">
            {data.constructionCosts.map((item) => (
              <div key={item.id} className="grid grid-cols-2 gap-6 items-start">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={item.id}
                    checked={item.checked}
                    onChange={() => handleConstructionCostChange(item.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label 
                    htmlFor={item.id}
                    className="text-gray-700 text-sm cursor-pointer"
                  >
                    {item.label}
                  </label>
                </div>
                <textarea
                  value={item.comment}
                  onChange={(e) => handleCommentChange(item.id, e.target.value)}
                  placeholder="Add comments..."
                  rows={2}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* General Comments Section */}
      <div className="mb-8">
        <textarea
          value={data.generalComments}
          onChange={(e) => handleGeneralCommentsChange(e.target.value)}
          placeholder="General comments..."
          rows={6}
          className="w-full p-4 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      
    </div>
  );
}

export default DocumentsProvided;