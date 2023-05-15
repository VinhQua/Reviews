import { useState } from "react";

import reviews from "./data";
import Person from "./Components/Person";
const App = () => {
  const [order, setOrder] = useState(0);
  const person = reviews[order];
  const handleNext = () => {
    setOrder((prev) => {
      return (prev + 1) % reviews.length;
    });
  };

  const handlePrev = () => {
    setOrder((prev) => {
      return (prev - 1 + reviews.length) % reviews.length;
    });
  };
  const handleSurprise = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === order) {
      randomNumber = randomNumber + 1;
    }
    setOrder(() => {
      return randomNumber % reviews.length;
    });
  };

  return (
    <main>
      <Person
        {...person}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSurprise={handleSurprise}
      />
    </main>
  );
};
export default App;
