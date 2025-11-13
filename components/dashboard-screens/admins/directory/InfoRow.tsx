import React from "react";

interface Props {
  icon?: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
}

const InfoRow: React.FC<Props> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default InfoRow;
