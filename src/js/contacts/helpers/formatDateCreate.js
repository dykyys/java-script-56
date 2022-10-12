import { formatDistance } from 'date-fns';
export function formatDateCreate(data) {
  return formatDistance(new Date(), new Date(data), {
    addSuffix: true,
  });
}
