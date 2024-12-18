function toggleChatbox() {
    const chatbox = document.getElementById("chatbox");
    const feedbackIcon = document.querySelector(".feedback-icon");
  
    if (!chatbox || !feedbackIcon) return; // Cegah error jika elemen tidak ditemukan
  
    if (chatbox.classList.contains("open")) {
      chatbox.classList.remove("open");
      setTimeout(() => {
        chatbox.style.display = "none";
        feedbackIcon.classList.remove("hidden"); // Tampilkan ikon feedback kembali
      }, 300); // Sesuaikan dengan durasi animasi CSS
      document.removeEventListener("click", handleOutsideClick);
    } else {
      chatbox.style.display = "flex";
      feedbackIcon.classList.add("hidden");
      setTimeout(() => {
        chatbox.classList.add("open");
      }, 10);
  
      function updateTime() {
        const timeElement = document.getElementById('chatbox-time');
        if (!timeElement) return;
  
        const now = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
        const day = days[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
  
        timeElement.textContent = `${day}, ${date} ${month}`;
      }
  
      updateTime();
  
      // Tampilkan animasi mengetik
      const typingIndicator = document.getElementById("typing-indicator");
      const chatboxContent = document.getElementById("chatbox-content");
      if (typingIndicator && chatboxContent) {
        typingIndicator.style.display = "flex";
        chatboxContent.style.display = "none";
  
        setTimeout(() => {
          typingIndicator.style.display = "none";
          chatboxContent.style.display = "block";
          simulateTyping("Haloo!!! 👋 Selamat Datang Di ETHEREAL FLORIST Ada Yang Bisa Saya Bantu?");
        }, 2000); // Durasi animasi "sedang mengetik"
      }
  
      document.addEventListener("click", handleOutsideClick);
    }
  }
  
  function handleOutsideClick(event) {
    const chatbox = document.getElementById("chatbox");
    const feedbackIcon = document.querySelector(".feedback-icon");
  
    if (!chatbox.contains(event.target) && !feedbackIcon.contains(event.target)) {
      toggleChatbox();
    }
  }
  
  function simulateTyping(text) {
    const dynamicText = document.getElementById("dynamic-text");
    if (!dynamicText) return;
  
    dynamicText.textContent = ""; // Hapus teks sebelumnya
    let index = 0;
  
    const interval = setInterval(() => {
      if (index < text.length) {
        dynamicText.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
  document.getElementById('user-input').addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          handleSendMessage(); // Panggil fungsi kirim pesan
          event.preventDefault(); // Mencegah tindakan default (jika ada)
      }
  });
    // Fungsi untuk mengirim pesan
    function handleSendMessage() {
      const userInput = document.getElementById("user-input");
      const chatboxBody = document.getElementById("chatbox-body");
  
      if (!userInput || !chatboxBody || userInput.value.trim() === "") return;
  
      // Tambahkan pesan pengguna
      const userMessage = document.createElement("div");
      userMessage.className = "user-message";
      userMessage.textContent = userInput.value;
      chatboxBody.appendChild(userMessage);
  
      userInput.value = "";
  
      // Panggil fungsi untuk menggulir ke bawah
      scrollToBottom();
  
      // Tambahkan balasan sistem
      showSystemResponse("Hubungi Kami Info Selanjutnya");
  }
  
  function showSystemResponse(responseText) {
      const chatboxBody = document.getElementById("chatbox-body");
      if (!chatboxBody) return;
  
      // Bungkus typing-indicator dalam elemen chatbox-message
      const chatboxMessage = document.createElement("div");
      chatboxMessage.className = "chatbox-message";
  
      const typingIndicator = document.createElement("div");
      typingIndicator.className = "typing-indicator";
      typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
      chatboxMessage.appendChild(typingIndicator);
  
      chatboxBody.appendChild(chatboxMessage);
      scrollToBottom();
  
      setTimeout(() => {
          chatboxBody.removeChild(chatboxMessage);
  
          // Bungkus pesan sistem dalam elemen chatbox-message
          const systemMessageWrapper = document.createElement("div");
          systemMessageWrapper.className = "chatbox-message";
  
          // Tambahkan pesan sistem
          systemMessageWrapper.innerHTML = `
              <p>${responseText}</p>
              <p>
                  Silahkan Klik <a href="https://wa.me/628123456789" target="_blank" style="color: white; text-decoration: underline;">
                  Di Sini. <img src="images/iconwhatsapp.png" alt="Icon" style="width: 14px; height: 16px; margin-left: 2px; vertical-align: middle;"></a>
              </p>
          `;
  
          chatboxBody.appendChild(systemMessageWrapper);
          scrollToBottom();
      }, 2000);
  }
  
  
  function scrollToBottom() {
      const chatboxBody = document.getElementById("chatbox-body");
      if (chatboxBody) {
          chatboxBody.scrollTop = chatboxBody.scrollHeight; // Gulir ke bagian bawah
      }
  }
  // Panggil `scrollToBottom` setelah menambahkan elemen
  chatboxBody.appendChild(chatboxMessage);
  scrollToBottom();
  
  
    // Tambahkan event listener untuk tombol kirim
    document.getElementById("send-button")?.addEventListener("click", handleSendMessage);