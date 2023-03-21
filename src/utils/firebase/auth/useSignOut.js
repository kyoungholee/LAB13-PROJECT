import { useState, useCallback, useMemo } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle
import { auth } from './index';

/* -------------------------------------------------------------------------- */

/**
 * Firebase 인증: 로그아웃 유틸리티 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  signOut: () => Promise<void>;
 * }}
 */
export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line consistent-return
  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      return await firebaseSignOut(auth);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      signOut,
    }),
    [isLoading, error, signOut],
  );
}
