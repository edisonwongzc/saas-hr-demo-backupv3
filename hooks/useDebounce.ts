'use client';

import { useState, useEffect } from 'react';

/**
 * 防抖Hook
 * 
 * @param value 需要防抖的值
 * @param delay 延迟时间(毫秒)
 * @returns 防抖后的值
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    // 设置定时器
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    // 清理函数
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}