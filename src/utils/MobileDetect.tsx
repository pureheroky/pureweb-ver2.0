import React from 'react';
import { useDeviceContext } from './DeviceProvider';

interface MobileDetectProps {
  children: React.ReactNode;
}

const MobileDetect: React.FC<MobileDetectProps> = ({ children }) => {
  const { isMobile } = useDeviceContext();

  return (
    <>
      {isMobile && children}
    </>
  );
};

export default MobileDetect;
