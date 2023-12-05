import { renderHook, act } from '@testing-library/react';
import { useVisibilityOnScrollUp } from '../../src/hooks/useVisibilityOnScrollUp';

describe('useVisibilityOnScrollUp', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  test('initial state', () => {
    const { result } = renderHook(() => useVisibilityOnScrollUp());
    expect(result.current.visible).toBe(true);
    expect(result.current.lastScroll).toBe(0);
  });

  test('scroll event changes visibility', () => {
    const { result } = renderHook(() => useVisibilityOnScrollUp());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.visible).toBe(false);
    expect(result.current.lastScroll).toBe(100);

    // Simulate scrolling up
    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.visible).toBe(true);
  });
});
