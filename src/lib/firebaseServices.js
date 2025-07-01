import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  orderBy, 
  query,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Volunteer Services
export const volunteerService = {
  // Create new volunteer
  async create(volunteerData) {
    try {
      const docRef = await addDoc(collection(db, 'volunteers'), {
        ...volunteerData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding volunteer:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all volunteers
  async getAll() {
    try {
      const q = query(collection(db, 'volunteers'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const volunteers = [];
      querySnapshot.forEach((doc) => {
        volunteers.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: volunteers };
    } catch (error) {
      console.error('Error getting volunteers:', error);
      return { success: false, error: error.message };
    }
  },

  // Get single volunteer
  async getById(id) {
    try {
      const docRef = doc(db, 'volunteers', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: 'Volunteer not found' };
      }
    } catch (error) {
      console.error('Error getting volunteer:', error);
      return { success: false, error: error.message };
    }
  },

  // Update volunteer
  async update(id, updateData) {
    try {
      const docRef = doc(db, 'volunteers', id);
      await updateDoc(docRef, {
        ...updateData,
        updatedAt: serverTimestamp()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating volunteer:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete volunteer
  async delete(id) {
    try {
      await deleteDoc(doc(db, 'volunteers', id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting volunteer:', error);
      return { success: false, error: error.message };
    }
  }
};

// Newsletter Services
export const newsletterService = {
  // Create new newsletter subscription
  async create(newsletterData) {
    try {
      const docRef = await addDoc(collection(db, 'newsletter'), {
        ...newsletterData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding newsletter subscription:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all newsletter subscriptions
  async getAll() {
    try {
      const q = query(collection(db, 'newsletter'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const subscriptions = [];
      querySnapshot.forEach((doc) => {
        subscriptions.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: subscriptions };
    } catch (error) {
      console.error('Error getting newsletter subscriptions:', error);
      return { success: false, error: error.message };
    }
  },

  // Get single newsletter subscription
  async getById(id) {
    try {
      const docRef = doc(db, 'newsletter', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: 'Newsletter subscription not found' };
      }
    } catch (error) {
      console.error('Error getting newsletter subscription:', error);
      return { success: false, error: error.message };
    }
  },

  // Update newsletter subscription
  async update(id, updateData) {
    try {
      const docRef = doc(db, 'newsletter', id);
      await updateDoc(docRef, {
        ...updateData,
        updatedAt: serverTimestamp()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating newsletter subscription:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete newsletter subscription
  async delete(id) {
    try {
      await deleteDoc(doc(db, 'newsletter', id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting newsletter subscription:', error);
      return { success: false, error: error.message };
    }
  }
};

// Do A Deed Services
export const doADeedService = {
  // Create new do a deed entry
  async create(deedData) {
    try {
      const docRef = await addDoc(collection(db, 'doADeed'), {
        ...deedData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding deed:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all deeds
  async getAll() {
    try {
      const q = query(collection(db, 'doADeed'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const deeds = [];
      querySnapshot.forEach((doc) => {
        deeds.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: deeds };
    } catch (error) {
      console.error('Error getting deeds:', error);
      return { success: false, error: error.message };
    }
  },

  // Get single deed
  async getById(id) {
    try {
      const docRef = doc(db, 'doADeed', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
      } else {
        return { success: false, error: 'Deed not found' };
      }
    } catch (error) {
      console.error('Error getting deed:', error);
      return { success: false, error: error.message };
    }
  },

  // Update deed
  async update(id, updateData) {
    try {
      const docRef = doc(db, 'doADeed', id);
      await updateDoc(docRef, {
        ...updateData,
        updatedAt: serverTimestamp()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating deed:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete deed
  async delete(id) {
    try {
      await deleteDoc(doc(db, 'doADeed', id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting deed:', error);
      return { success: false, error: error.message };
    }
  }
}; 