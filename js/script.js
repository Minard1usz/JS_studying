const voteElements = ['😀', '😊', '🤨', '😕', '🤬'];
let voteData = Array(voteElements.length).fill(0);

function updateVotingNumber() {
  const voteCountsBlock = document.getElementById('voteNumber');
  voteCountsBlock.innerHTML = '';

  for (let i = 0; i < voteElements.length; i++) {
    const face = voteElements[i];
    const count = voteData[i];
    const faceElement = document.createElement('div');
    faceElement.innerText = `${face}: ${count}`;
    voteCountsBlock.appendChild(faceElement);
  }
}

function vote(smileNumber) {
  voteData[smileNumber]++;
  updateVotingNumber();
}

updateVotingNumber();