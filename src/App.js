import React, { useState } from 'react';
import ThankYouStep from './components/ThankYouStep';
import SelectRatingStep from './components/SelectRatingStep';

const App = () => {
	const [step, setStep] = useState(1);
	const [selectedRating, setSelectedRating] = useState(null);

	return (
		<main className="main-container">
			{step === 1 && (
				<SelectRatingStep
					setSelectedRating={setSelectedRating}
					selectedRating={selectedRating}
					setStep={setStep}
				/>
			)}
			{step === 2 && <ThankYouStep selectedRating={selectedRating} />}
		</main>
	);
};

export default App;
