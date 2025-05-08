const generateBtn = document.getElementById('generate-btn');
const loading = document.getElementById('loading');
const keysSection = document.getElementById('keys-section');
const copyBtn = document.getElementById('copy-btn');
const keysList = document.getElementById('keys-list');

function randomHexKey(length = 32) {
  const chars = '0123456789abcdef';
  let key = '';
  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }
  return `FREE_${key}`;
}

function showLoading() {
  loading.classList.remove('hidden');
  keysSection.classList.add('hidden');
}

function hideLoading() {
  loading.classList.add('hidden');
}

function showKey(key) {
  keysList.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'key-box';
  div.textContent = key;
  keysList.appendChild(div);
  keysSection.classList.remove('hidden');
}

generateBtn.addEventListener('click', () => {
  showLoading();
  setTimeout(() => {
    const key = randomHexKey(32);
    hideLoading();
    showKey(key);
  }, 1700 + Math.random() * 800); // Smooth loading effect
});

copyBtn.addEventListener('click', () => {
  const key = keysList.textContent;
  navigator.clipboard.writeText(key).then(() => {
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = 'Copy Key';
    }, 1200);
  });
});

// Trigger opening animation on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.container').classList.add('opening-animate');
}); 