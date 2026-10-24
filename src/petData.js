// Calls to the PetVitals service endpoints.
// Each function throws an error with the server's message if the call fails.

async function callService(url, method = 'GET', body) {
  const response = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const error = new Error(data.msg || `Request failed (${response.status})`);
    error.status = response.status;
    throw error;
  }

  return response.status === 204 ? null : response.json();
}

// ----- Auth -----

export function createAccount(email, password) {
  return callService('/api/auth/create', 'POST', { email, password });
}

export function loginAccount(email, password) {
  return callService('/api/auth/login', 'POST', { email, password });
}

export function logoutAccount() {
  return callService('/api/auth/logout', 'DELETE');
}

// ----- Pets and log entries -----

export function loadPets() {
  return callService('/api/pets');
}

export function addPet(pet) {
  return callService('/api/pets', 'POST', pet);
}

export function loadEntries() {
  return callService('/api/entries');
}

export function addEntry(entry) {
  return callService('/api/entries', 'POST', entry);
}

// ----- Breed info (the service gets this from dogapi.dog) -----

export async function fetchBreedInfo(breed) {
  try {
    const info = await callService(`/api/breed?name=${encodeURIComponent(breed)}`);
    return `${info.name}: typical weight ${info.minWeight}–${info.maxWeight} lbs, lives ${info.lifeMin}–${info.lifeMax} years. ${info.description}`;
  } catch (err) {
    return err.message;
  }
}

export const breedNames = [
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'Beagle',
  'Bulldog',
  'Poodle',
  'Dachshund',
  'Boxer',
];
