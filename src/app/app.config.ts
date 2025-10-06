import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "lemarcheadmin-6e1b0", appId: "1:736508925275:web:c9f2d10c49f9e1678cb67e", storageBucket: "lemarcheadmin-6e1b0.firebasestorage.app", apiKey: "AIzaSyDKcvr_vbj5-0y_l_xuq-hP6p5cM8M1yz4", authDomain: "lemarcheadmin-6e1b0.firebaseapp.com", messagingSenderId: "736508925275", measurementId: "G-VMVHFNLV1Y", projectNumber: "736508925275", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())
  ]
};
