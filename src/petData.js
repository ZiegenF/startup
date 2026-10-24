// Pets and log entries are saved in localStorage for now.
// These will move to the service and database in later deliverables.

export function loadPets(userName) {
  return JSON.parse(localStorage.getItem(`pets_${userName}`) || '[]');
}

export function savePets(userName, pets) {
  localStorage.setItem(`pets_${userName}`, JSON.stringify(pets));
}

export function loadEntries(userName) {
  return JSON.parse(localStorage.getItem(`entries_${userName}`) || '[]');
}

export function saveEntries(userName, entries) {
  localStorage.setItem(`entries_${userName}`, JSON.stringify(entries));
}

// Mock of the third-party breed API. Waits a moment like a real network call.
const breedInfo = {
  'labrador retriever': 'Labrador Retriever: typical weight 55–80 lbs. Friendly and active.',
  'german shepherd': 'German Shepherd: typical weight 50–90 lbs. Loyal and smart.',
  'golden retriever': 'Golden Retriever: typical weight 55–75 lbs. Gentle and eager to please.',
  'beagle': 'Beagle: typical weight 20–30 lbs. Curious and loves food.',
  'siamese': 'Siamese: typical weight 6–14 lbs. Vocal and social.',
  'maine coon': 'Maine Coon: typical weight 10–25 lbs. Large and laid-back.',
  'holland lop': 'Holland Lop: typical weight 2–4 lbs. Calm and friendly.',
};

export const breedNames = Object.values(breedInfo).map((info) => info.split(':')[0]);

export function fetchBreedInfo(breed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(breedInfo[breed.trim().toLowerCase()] || `No breed info found for "${breed}".`);
    }, 500);
  });
}
