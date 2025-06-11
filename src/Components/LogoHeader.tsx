'use client';

import React from 'react';

const LogoHeader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 glow-shadow">
        is.OK.ai
      </h1>
    </div>
  );
};

export default LogoHeader;
