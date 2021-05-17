import React from "react";
import TitleLogo from '../title-logo.png';

interface LogoProps {
  isDark: boolean;
  width: number;
}

const LogoText: React.FC<LogoProps> = ({ width, isDark,}) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img
          src={TitleLogo}
          width={width}
          alt="keyneswap logo"
        />
  );
};

export default React.memo(LogoText, (prev, next) => prev.isDark === next.isDark);
