import { collection, onSnapshot, query, doc } from 'firebase/firestore';
import { useLayoutEffect, useMemo, useState } from 'react';
import { db } from './index';

export function useDataState(collectionKey, documentKey) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  if (collectionKey.includes('/') && !documentKey) {
    const collectionAndDocumentKey = collectionKey.split('/');
    // eslint-disable-next-line prefer-destructuring, no-param-reassign
    collectionKey = collectionAndDocumentKey[0];
    // eslint-disable-next-line prefer-destructuring, no-param-reassign
    documentKey = collectionAndDocumentKey[1];
  }

  useLayoutEffect(() => {
    let unsubscribe;

    if (documentKey) {
      const q = query(doc(db, collectionKey, documentKey));

      unsubscribe = onSnapshot(
        q,
        // eslint-disable-next-line no-shadow
        doc => {
          setData(doc.data());
        },
        // eslint-disable-next-line no-shadow
        error => {
          setError(error);
        },
      );
    } else {
      const q = query(collection(db, collectionKey));

      unsubscribe = onSnapshot(
        q,
        querySnapshot => {
          // eslint-disable-next-line no-shadow
          const data = [];
          // eslint-disable-next-line no-shadow
          querySnapshot.forEach(doc => {
            data.push(doc.data());
          });
          setData(data);
        },
        // eslint-disable-next-line no-shadow
        error => {
          setError(error);
        },
      );
    }

    return unsubscribe;
  }, [collectionKey, documentKey]);

  return useMemo(() => ({ data, error }), [data, error]);
}
