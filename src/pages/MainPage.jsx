import { useState, useEffect } from 'react';
import ConfessionBlock from './ConfessionBlock';

const MainPage = () => {
  return (
    <div className="container mx-auto p-4">
      {confessions.map((confession) => (
        <ConfessionBlock key={confession.id} confession={confession} />
      ))}
    </div>
  );
};

export default MainPage;
