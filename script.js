const agreeButton = document.getElementById("agree");
const declineButton = document.getElementById("decline");

// Khi bấm "Đồng ý"
agreeButton.addEventListener("click", () => {
  alert("Yeah! Từ giờ mình là người yêu nhau rồi nhé! 🥰");
  // Bạn có thể redirect đến trang khác hoặc hiển thị thêm nội dung
  window.location.href = "https://www.google.com"; // Hoặc link khác nếu cần
});

// Khi bấm "Từ chối"
declineButton.addEventListener("mouseover", () => {
  // Di chuyển nút "Từ chối" đến vị trí ngẫu nhiên
  const x = Math.random() * (window.innerWidth - 100); // Giới hạn để nút không bị ra ngoài màn hình
  const y = Math.random() * (window.innerHeight - 50);
  declineButton.style.position = "absolute";
  declineButton.style.left = `${x}px`;
  declineButton.style.top = `${y}px`;
});

declineButton.addEventListener("click", () => {
  alert("Không từ chối được đâu! Làm người yêu tui đi mà! 🥺");
});
