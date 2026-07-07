import { useEffect, useState } from 'react';
import { getDashboardSnapshot } from './api';
import type { DashboardSnapshot } from './types';

const fallback: DashboardSnapshot = {
  title: 'Hyperlocal order control',
  primaryMetric: '94.2%',
  secondaryMetric: '18 min',
  alerts: ['inventory risk', 'rider delay']
};

export const useDashboardSnapshot = () => {
  const [data, setData] = useState<DashboardSnapshot>(fallback);

  useEffect(() => {
    void getDashboardSnapshot().then(setData).catch(() => setData(fallback));
  }, []);

  return data;
};
