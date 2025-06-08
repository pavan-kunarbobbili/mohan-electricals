document.querySelectorAll('.clickable').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

document.getElementById("complaintForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const complaint = document.getElementById("complaint").value;

  const response = await fetch("/send-complaint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, complaint })
  });

  const result = await response.json();
  if (result.success) {
    document.getElementById("responseMsg").style.display = "block";
    document.getElementById("complaintForm").reset();
  } else {
    alert("Failed to send complaint.");
  }
});
