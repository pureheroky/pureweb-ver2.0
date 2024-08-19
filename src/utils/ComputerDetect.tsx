import React from 'react';
import { useDeviceContext } from './DeviceProvider';

interface DeviceDetectProps {
  children: React.ReactNode;
}

const ComputerDetect: React.FC<DeviceDetectProps> = ({ children }) => {
  const { isMobile } = useDeviceContext();

  return (
    <>
      {!isMobile && children}
    </>
  );
};

export default ComputerDetect;
