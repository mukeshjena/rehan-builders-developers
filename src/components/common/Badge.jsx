// src/components/common/Badge.jsx
import { getStatusColor } from '../../utils/formatters';

export default function Badge({ status, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getStatusColor(status)} ${className}`}
    >
      {status}
    </span>
  );
}
