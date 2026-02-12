function openModal(title, img, desc){
  document.getElementById("modal").style.display = "block";
  document.getElementById("mTitle").innerText = title;
  document.getElementById("mImg").src = img;
  document.getElementById("mDesc").innerText = desc;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e){
  const modal = document.getElementById("modal");
  if(e.target === modal){
    closeModal();
  }
}
function openMember(name, img, desc){
  document.getElementById('memberName').innerText = name;
  document.getElementById('memberImg').src = img;
  document.getElementById('memberDesc').innerHTML = desc;
  document.getElementById('memberModal').style.display = 'block';
}

function closeMember(){
  document.getElementById('memberModal').style.display = 'none';
}
window.addEventListener("load", () => {
  setTimeout(() => {
    const opening = document.getElementById("opening");
    if(opening){
      opening.style.display = "none";
    }
  }, 3500);
});

