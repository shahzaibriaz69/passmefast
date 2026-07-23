// src/components/CourseWizard.js
'use client';
import { useState } from 'react';

export default function CourseWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    transmission: 'Manual', // Manual ya Automatic
    experience: 'Beginner', // Beginner, Intermediate, Refresher
  });
  const [recommendedCourse, setRecommendedCourse] = useState(null);

  // Handle Selection
  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Calculate Recommendation
  const handleCalculate = () => {
    let result = '';
    if (formData.experience === 'Beginner') {
      result = '40 Hour Course (Ideal for complete beginners)';
    } else if (formData.experience === 'Intermediate') {
      result = '25 Hour Course (Perfect if you have basic control)';
    } else {
      result = '15 Hour Refresher Course (Quick test-ready preparation)';
    }
    setRecommendedCourse(result);
    setStep(3); // Result step
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl -mt-12 relative z-20 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Find Your Perfect Driving Course
      </h2>

      {/* Step Indicator */}
      <div className="flex justify-center mb-8 gap-2">
        <div className={`h-2 w-16 rounded ${step >= 1 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
        <div className={`h-2 w-16 rounded ${step >= 2 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
        <div className={`h-2 w-16 rounded ${step === 3 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
      </div>

      {/* Step 1: Transmission Choice */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Step 1: Choose Transmission Type
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {['Manual', 'Automatic'].map((type) => (
              <button
                key={type}
                onClick={() => handleSelect('transmission', type)}
                className={`p-4 rounded-xl border-2 font-bold text-lg transition ${
                  formData.transmission === type
                    ? 'border-blue-900 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Next Step →
          </button>
        </div>
      )}

      {/* Step 2: Driving Experience */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Step 2: What is your driving experience?
          </h3>
          <div className="space-y-3 mb-6">
            {[
              { id: 'Beginner', title: 'Complete Beginner', desc: 'No or very little driving experience' },
              { id: 'Intermediate', title: 'Intermediate', desc: 'Have practiced basic controls and turns' },
              { id: 'Refresher', title: 'Nearly Test Ready', desc: 'Need a quick brush up before practical test' },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect('experience', item.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                  formData.experience === item.id
                    ? 'border-blue-900 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-bold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="w-1/3 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
            <button
              onClick={handleCalculate}
              className="w-2/3 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Get Recommendation
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Result Display */}
      {step === 3 && (
        <div className="text-center py-4">
          <div className="inline-block bg-green-100 text-green-800 p-3 rounded-full mb-4">
            ✓ Recommended For You
          </div>
          <h3 className="text-2xl font-extrabold text-blue-900 mb-2">
            {recommendedCourse}
          </h3>
          <p className="text-gray-600 mb-6">
            Transmission: <strong>{formData.transmission}</strong>
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-200"
            >
              Start Over
            </button>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 shadow-md">
              Book This Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
}