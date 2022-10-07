import { useState } from 'react';

function App() {
  const [text] = useState<string>('Alo tio!');
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
