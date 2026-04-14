'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      // In a real app, you might show a toast or a modal.
      // For development, we want this to be loud.
      console.error('Firebase Permission Error:', error.context);
      
      // We throw a generic error to trigger the Next.js error boundary/overlay
      // in development mode, which helps debugging Security Rules.
      const diagnosticMessage = `
        Firestore Security Rules Denied Request:
        Path: ${error.context.path}
        Operation: ${error.context.operation}
        Data: ${JSON.stringify(error.context.requestResourceData, null, 2)}
      `;
      throw new Error(diagnosticMessage);
    };

    errorEmitter.on('permission-error', handlePermissionError);
    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, []);

  return null;
}
