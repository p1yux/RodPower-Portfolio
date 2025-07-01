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